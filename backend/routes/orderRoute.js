import express from "express";
import authMiddleware from "../middleware/auth.js"; // for authentication
import { placeOrder, verifyOrder,userOrders,listOrders,updateStatus } from "../controllers/orderController.js"; // for placing an order

const orderRouter = express.Router();

// Correct usage of middleware and route handler
orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify",verifyOrder)
orderRouter.post("/userorders",authMiddleware,userOrders);
orderRouter.get('/list',listOrders)
orderRouter.post('/status',updateStatus)


export default orderRouter;
