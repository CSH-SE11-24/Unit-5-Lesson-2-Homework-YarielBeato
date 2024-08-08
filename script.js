// Task 1: Create variable called 'storeName' and set it to "CSH Store". Console log "Welcome to [storeName]"
let storename = "cshstore"

// Task 2: Create a user object with properties 'username' (any), 'password' (any), and 'status' (online or offline). 

let user = {
  username:"bro",
  pword: "nah" ,
  status:"online",
}


// Task 3: Console log "[username] is [status]".
console.log(`${user.username} is ${user.status}`)

// Task 4: Prompt the user to enter their password and save it in a variable called passwordGuess
 let save = prompt("enter your password")
let pwg = save
// Task 5: If passwordGuess is equal to the password, console log "Welcome [username]" and change status to "online". Else, console log "Wrong password" and change status to "offline"

if(pwg = user.pword){
  console.log("welcome" + user.status)
  
}if (pwg !== user.pword){
  console.log("wrong")
}



// Task 6: Create an object called hoodieInventory with the properties 'name' ("hoodie"), 'quantity' (any number), and 'price' (any number). 

let hood = {
  name: "nike tech" ,
  quantity: 4 ,
  price:120 , 
}


// Task 7: Console log "[name] costs [price]"
console.log(hood.name + hood.price)

// Task 8: You just sold a hoodie! Change the quantity to be smaller. Console log "[quantity] [name] left in inventory." Confirm that the number changed!

hood.quantity 4 = 3

// Extra credit: Change task 5 such that if the user guesses the password wrong, it keeps prompting them until they guess correctly!

