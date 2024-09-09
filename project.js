//project

function check(array, name) {
    var flag = 0;
    for (var i = 0; i < array.length; i++) {
        if (name == array[i][0]) {
            flag = 1;
        }
    }
    return flag;
}

function linear_search_username(arr, key) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][0] == key) {
            return i;
        }
    }
    console.log("Key doesn't exist");
    return -1;
}

var users = [["prasiddha", "yolo"], ["boring", "seriously"], ["timepass", "shit"], ["bakwasshit", "hell"], ["vegbiryani", "pulav"]];

console.log("Welcome to our site");
var ans = prompt("Do you have an account? (yes/no)");

if (ans === "no" || ans === "No" || ans === "NO") {
    var username = prompt("Create a new username");
    while (check(users, username) == 1) {
        username = prompt("This username already exists. Please create a new username");
    }
    
    var pass = prompt("Create a password");
    while (pass == username) {
        pass = prompt("Password can't be same as username. Create a new password");
    }
    users.push([username, pass]);
    console.log("Account created successfully");
}

// login for both new and existing users
console.log("Login to your account");
var usertry = prompt("Enter your username");
while (check(users, usertry) != 1) {
    usertry = prompt("This username doesn't exist. Enter a valid username");
}

var user_index = linear_search_username(users, usertry);
if (user_index !== -1) {
    var passtry = prompt("Enter the password");
    while (passtry != users[user_index][1]) {
        passtry = prompt("Incorrect password. Enter the correct password");
    }
    console.log("Logged in successfully");
} else {
    console.log("Username not found, cannot log in.");
}

// Method of consumption
var consumption = prompt("How would you be ordering today (delivery/takeaway/dine-in)");
if (consumption === "delivery" || consumption === "takeaway") {
    var stores = prompt("Select the nearest Outlet to you\n1. Pimple Saudagar\n2. Aundh\n3. Kothrud");
}

// Balance management
var balance = 0;
ans = prompt("Your current balance is " + balance + " Rs. Do you want to add to your current balance? (yes/no)");
if (ans === "Yes" || ans === "yes" || ans === "YES") {
    var budget = prompt("Enter the amount you want to add to your current balance.");
    while (Number(budget) < 100) {
        budget = prompt("The minimum amount to add is 100 Rs");
    }
    balance += Number(budget);
    console.log("Your updated balance is " + balance + " Rs");
}

// Order function
console.log("This is our menu:\nVeg Burger: 80 Rs\nVeg Pizza: 90 Rs\nChicken Burger: 60 Rs\nChicken Pizza: 120 Rs\nFries: 50 Rs");
function order() {
    var vb = prompt("How many Veg burgers do you want to order?");
    var vp = prompt("How many Veg Pizzas do you want to order?");
    var cb = prompt("How many Chicken burgers do you want to order?");
    var cp = prompt("How many Chicken Pizzas do you want to order?");
    var f = prompt("How many Fries do you want to order?");
    var total = Number(vb) * 80 + Number(vp) * 90 + Number(cb) * 60 + Number(cp) * 120 + Number(f) * 50;
    var totalWithTax = total * 1.10;                                                                          // Adding 10% tax
    console.log("Your order is as follows:\n"+vb+" Veg Burgers\n"+vp+" Veg Pizzas\n"+cb+" Chicken Burgers\n"+cp+" Chicken Pizzas\n"+f+" Fries");
    return totalWithTax;
}

var totalOrderCost = order();
if (consumption === "delivery") {
    totalOrderCost += 85;                                                                                     // Adding delivery charges
    console.log("The total cost of your order is: " + totalOrderCost + " Rs including taxes and delivery charges.");
}
else {
    console.log("The total cost of your order is: " + totalOrderCost + " Rs including taxes.");
}

if (totalOrderCost > balance) {
    console.log("Insufficient balance. Please add more money to your account.");
}
else{
    balance -= totalOrderCost;
    console.log("Order placed successfully. Your remaining balance is: " + balance + " Rs");
}


/*
create function to create best possible order form given budget/balance
*/