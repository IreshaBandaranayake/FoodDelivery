# FoodDelivery

Full Stack Food Ordeing Website

Project Documentation

Project name: ‘MealHub’ Food Ordering Website
Author: Iresha Bandaranayake Himihami Mudiyanselage

Public URL:
Front End for users / customers:
https://fooddelivery-frontend-iuul.onrender.com/

Admin Panel:
https://fooddelivery-admin-yhue.onrender.com/

GitHub Project Repo URL: https://github.com/IreshaBandaranayake/FoodDelivery.git

Technical support contact info
Email: iresha.himihami.mudiyanselage@student.lut.fi / ireshabke@gmail.com
Phone Number: +358449258650 / +94711807214

Project Description
MealHub is a responsive food ordering website offering a seamless experience for users to browse, filter, and order food, while admins efficiently manage items, orders, and statuses via a dedicated panel. It prioritizes usability, scalability, security, and transparency, featuring real-time updates, secure Stripe payments, and alerts with Toastify.
With mobile responsiveness, clear navigation, and input validation using Validator, MealHub ensures convenience, accessibility, and a transparent ordering experience for both technical and non-technical users.

Tech Stack
MealHub uses a modern full-stack architecture:
• Frontend: React.js for dynamic and responsive interfaces, with React Router for navigation and Toastify for notifications
• Backend: Node.js and Express.js for a secure and scalable server-side application
• Database: MongoDB for efficient data storage and Mongoose for schema validation.
• Authentication and Security: JWT(Json Web Token) for secure user authentication and Bcrypt for password hashing.
• Third-Party Integrations: Stripe for secure payment processing, Multer for file handling, Axios for API calls.

API Architecture
The REST APIs used to handle user authentication, product management, order processing, and more. Authenticated APIs ensure secure data access. APIs were tested using Postman.
Testing
• API Testing: APIs were tested using Postman, to verify data transfer accuracy and error handling.
• Error Handling: Comprehensive error handling covered cases like failed authentication, invalid inputs, and server issues.
• Feedback Integration: Feedback from peers was used to refine the user interface and improve the overall experience.

Deployment Process
The application is deployed on Render.

Installation Instructions

To Run the Project Locally,

1. Clone the Project
   git clone https://github.com/IreshaBandaranayake/FoodDelivery.git

2. Go to the Project Directory
   cd FoodDelivery

3. Install Dependencies Front end
   cd frontend
   npm install

4. Install Dependencies Admin
   cd admin
   npm install

5. Install Dependencies Backend
   cd backend
   npm install

6. Set Up Environmental Variables
   JWT_SECRET=YOUR_SECRET_TEXT
   STRIPE_SECRET_KEY=YOUR_KEY

7. Setup the Frontend and Backend URL
   Admin folder in App.jsx file
   const url = YOUR_BACKEND_URL
   Frontend folder in StoreContext.js file
   const url = YOUR_BACKEND_URL
   Backend folder orderController.js file
   const frontend_url = YOUR_FRONTEND_URL

8. Start the Backend server
   nodemon server.js

9. Start the Frontend server
   npm start

10. Start the Backend server
    npm start

User's Manual

For Frontend Users (Customers)
Users can visit our website using the url: https://fooddelivery-frontend-iuul.onrender.com/
(Note: Please kindly note that I have used Render's free hosting service to host my website. Therefore, it may sometimes take a few minutes to load the entire webpage. In such cases, kindly wait until the webpage is fully loaded. If you can see product items with their prices under the “Choose Your Flavor” heading, it means the website has loaded completely.)

1. User Registration and Login
   In the top right corner of the website, you will find the “Sign-Up” option for new users to register with our system and for registered users to log in to the website. (After logging in, the sign-up button changes to a user icon.)
   To log in or register on the system: Email ID: Must be valid and Password: Must be at least 8 characters long.
   [![Register](https://i.postimg.cc/rd85c228/register.png)](https://postimg.cc/rd85c228)

2. Navigate through the website
   Using the navigation bar in the header section, you can easily navigate through our website. The provided links locate you to the menu, contact us, and home of the website. Additionally, I have included a link to the mobile-app (Currently I have linked it to Google Play store and Apple Store), which I plan to develop in the future for MealHub.
   [![Navbar](https://i.postimg.cc/k2NWkXZ1/navbar.png)](https://postimg.cc/k2NWkXZ1)

3. Explore the Menu
   You can explore our menu in two ways:
   • By clicking the "menu" link in the navigation bar
   • By clicking the "View Our Menu" button in the display image
   There ,you see the menu categories under the "Find Your Favorite" heading.
   [![Menu](https://i.postimg.cc/G4nk7sMT/menu.png)](https://postimg.cc/G4nk7sMT)

4. Filter Items
   • By selecting any menu category (e.g. Salad, Noodles), you can filter the available food items under that category. You can then view the available items for the selected category.
   • By clicking on the + icon on the product image, you can increase the quantity you want to order. You can also decrease the quantity.
   [![Cat](https://i.postimg.cc/kDZNSHKc/cat.png)](https://postimg.cc/kDZNSHKc)

5. Add Item to the Cart
   • When you select food items along with their quantities, the selected items will be added to the cart.
   • After adding items to the cart, you will notice that the cart icon in the navigation bar changes as in the following image
   [![Basket](https://i.postimg.cc/LYQtNC7m/basket.png)](https://postimg.cc/LYQtNC7m)

6. Cart Page
   • You can navigate to the Cart page by clicking the above Cart icon in the header.
   • On the Cart page, you can:
   View your added items along with their quantities and prices,Remove items or decrease their quantity by clicking the ‘X’ icon, See the total amount, including delivery charges, at the bottom.
   [![Cart](https://i.postimg.cc/Wtt6hVFz/cart.png)](https://postimg.cc/Wtt6hVFz)

7. Proceed to Checkout
   • By clicking the Proceed to Checkout button on the Cart page, you will be directed to the checkout page.
   • On the checkout page, you must fill in your Delivery Information.
   • After entering your details, click the Proceed to Payment button to continue with the payment.
   [![Checkout](https://i.postimg.cc/Lgqz7kKL/checkout.png)](https://postimg.cc/Lgqz7kKL)

8. Payment
   On the payment page:
   Left side: You can see the total amount, items with quantities and prices. If needed, you can go back by clicking the back arrow to edit something.

   Right side: You need to enter your payment details.
   • First, enter your email address.
   • Then, select the “Card” option. (Following image you can see this option, highlighted with red outline)
   • After that, add your card information. You can test this option using dummy Stripe card numbers. Below are the details for testing:
   • Card Number: 4000002460000001
   • Date: 12/26 (You can use any valid month and year that hasn't expired in MM/YY format)
   • CVC: 456 (Use Any 3 digits)
   • Country: Finland ( The above card number is for Finland)

   If you need dummy card numbers for other countries, visit this URL: Stripe Testing Cards. (https://docs.stripe.com/testing#international-cards)
   After entering the payment details, click the Pay button to proceed with the payment.
   (Note: The payment process may take a few minutes due to the free hosting services. Please be patient until you are redirected to the "My Orders" page)
   [![Payment](https://i.postimg.cc/yJvc8p70/payment.png)](https://postimg.cc/yJvc8p70)

9. My Orders
   • After completing the payment, you will automatically be redirected to the “My Orders page”.
   • On this page, you can view your order details and the order status (e.g. Order Processing, Out for Delivery, Delivered).
   • You can also view your orders in the following way:
   Move your cursor to the User icon in the header.
   Two options will appear: Orders and Logout.
   By selecting Orders, you will be redirected to the My Orders page
   [![My Orders](https://i.postimg.cc/tYx3NzzH/myOrders.png)](https://postimg.cc/tYx3NzzH)

10. Admin User
    Admin Panel URL: https://fooddelivery-admin-yhue.onrender.com/
    Admin User can Add / Delete Food Items, view the list of items on the website. And admin can view the order details and update order status using the admin panel.
    [![Admin Panel](https://i.postimg.cc/wtZx2DVS/adminpanel.png)](https://postimg.cc/wtZx2DVS)

11. Add Items
    • The admin can add food items by clicking the “Add Items” icon in the Admin Panel.
    • After filling in the item details and clicking the ADD button, the item will be successfully added.
    • The added item will appear in the “List Items” section of the Admin Panel and also on the frontend of the website under the selected category (Under the header Choose Your Flavour ).
    [![Add Item](https://i.postimg.cc/0MSkBrXr/addIem.png)](https://postimg.cc/0MSkBrXr)

12. List of Items
    • The added items are displayed in the List Items section of the Admin Panel.
    • The admin also has the option to delete items.
    • If an item is removed from the Admin Panel, it will no longer appear in the frontend customer view.
    [![List Item](https://i.postimg.cc/dZKsPvg6/listItem.png)](https://postimg.cc/dZKsPvg6)

13. Orders
    The admin can view customer orders and update their statuses. Three order statuses are available:
    • Order Processing: The order is being prepared.
    • Out for Delivery: The order is on its way.
    • Delivered: The order has been completed.
    The admin can update the order status at each stage, and these updates will reflect in the My Orders section for customers. This allows customers to view the current status of their orders.
    [![Orders Admin](https://i.postimg.cc/D4d27HTT/orderesadmin.png)](https://postimg.cc/D4d27HTT)

14. Mobile Responsiveness
    • MealHub is a fully responsive food ordering website
    • Both the frontend and the admin panel are designed to provide an optimal user experience on mobile devices.
    [![Responsive](https://i.postimg.cc/CdjMCBfQ/responsive.png)](https://postimg.cc/CdjMCBfQ)

Note: The project interface images included in this README file were uploaded to PostImage to help readers easily understand the contents and features of the project.
