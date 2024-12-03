import pkg from "jsonwebtoken";
const { verify } = pkg;
import orderModel from "../models/orderModel.js";
import userModel from '../models/userModel.js';
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_key);

// Placing user order for frontend
const placeOrder = async (req, res) => {
    const frontend_url = "https://fooddelivery-frontend-iuul.onrender.com"; // Frontend URL

//console.log (req.user);

    try {
        // **Updated userId extraction**
        const userId = req.body.userId; // From authMiddleware's req.user

        const newOrder = new orderModel({
            userId: userId, // Changed from req.body.userId
            items: req.body.items,
            amount: req.body.amount,
            status: "Order Processing",
            address: req.body.address
        });
        await newOrder.save();

        // Clear user's cart data
        await userModel.findByIdAndUpdate(userId, { cartData: {} });

        // Construct line_items for Stripe
        const line_items = req.body.items.map((item) => ({
            price_data: {
                currency: "eur", // Use euros
                product_data: {
                    name: item.name
                },
                unit_amount: Math.round(item.price * 100) // Convert to cents
            },
            quantity: item.quantity
        }));

        // Add delivery charges as a separate line item
        line_items.push({
            price_data: {
                currency: "eur",
                product_data: {
                    name: "Delivery Charges"
                },
                unit_amount: Math.round(2 * 100) // €2 delivery charge converted to cents
            },
            quantity: 1
        });

        // Create Stripe session
        const session = await stripe.checkout.sessions.create({
            line_items: line_items,
            mode: 'payment',
            success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
        });

        // Respond with session URL
        res.json({ success: true, session_url: session.url });

    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
};

const verifyOrder = async (req,res) => {
    const {orderId,success} = req.body;
    try { //res.json({success:true,message:"Paid"})
        if (success=="true") {
            await orderModel.findByIdAndUpdate(orderId,{payment:true});
            return res.json({success:true,message:"Paid"})
        }
        else{
            await orderModel.findByIdAndDelete(orderId);
          return res.json({success:false,message:"Not Paid"})
        }
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

//User Orders for Frontend
const userOrders = async (req,res) => {
    try {
        const Orders = await orderModel.find({userId:req.body.userId});
        res.json({success:true,data:Orders})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

// Listing orders for Admin Panel
const listOrders = async (req,res) => {
   try{
     const Orders = await orderModel.find({});
     res.json({success:true,data:Orders})
    } catch(error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
   } 

//API for updating order status
const updateStatus = async (req,res) => {
    try {
        await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status})
        res.json({success:true,message:"Status Updated"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}


export {placeOrder,verifyOrder,userOrders,listOrders,updateStatus};
