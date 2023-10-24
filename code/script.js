// Start here

// Step 1 - Welcome and introduction
// Your code goes here

alert(
    `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
  )

  const name = prompt(
    "Please enter your name:"
    )
    
    const lastName = prompt (
        "Please enter your last name:"
    )


  alert(
    `Hello ${name}! Let's order some food!`
    )
  
    alert(`Tjena ${name} ${lastName} hur är läget?`)
  // Step 2 - Food choice
  // Your code goes here
 
    
  let foodType = prompt(
        `What type of food would you like?  
        1 - Pizza 
        2 - Pasta 
        3 - Salad
        Enter the corresponding number: `
        )

let selectedFoodType

if (foodType === "1") {
    selectedFoodType = "Pizza"
} else if (foodType === "2") {
    selectedFoodType = "Pasta"
} else if (foodType === "3") {
    selectedFoodType = "Salad"
} else {
    alert("Error")
    exit(1)
}

alert(`You have chosen ${selectedFoodType}, mums!`)


  // Step 3 - Subtype choice
  // Your code goes here

  let foodChoice 
  let dish 
  
  switch (selectedFoodType) {
    case "Pizza": 
    foodChoice = prompt(
        `What type of pizza would you like?  
        1 - Hawai pizza 
        2 - Margherita pizza 
        3 - Kebab pizza
        Enter the corresponding number: `
        )
    dish = ["Hawai pizza", "Margherita pizza", "Kebab pizza"]
    break

    case "Pasta": 
    foodChoice = prompt(
        `What type of Pasta would you like?  
        1 - Pasta Carbonara 
        2 - Pasta Bolognese 
        3 - Pasta Pesto
        Enter the corresponding number: `
        )
    dish = ["Pasta Carbonara", "Pasta Bolognese", "Pasta Pesto"]    
    break

    case "Salad": 
    foodChoice = prompt(
        `What type of salad would you like?  
        1 - Ceasar Salad
        2 - Greek Salad
        3 - Russian Salad
        Enter the corresponding number: `
        )
    dish = ["Ceasar Salad", "Greek Salad", "Russian Salad"]
    break

    default: "Wops, something went wrong, try again!"
    exit(1)
}

if (foodChoice === "1") {
    alert(`Great choice! You have selected ${dish[0]}`)
} else if (foodChoice === "2") {
    alert(`Great choice! You have selected ${dish[1]}`)
} else if (foodChoice === "3") {
    alert(`Great choice! You have selected ${dish[2]}`)
}
  
  // Step 4 - Age
  // Your code goes here
  
  const age = prompt (
    `Is the food for an adult or child?
    Type your age:`
  )

  // Step 5 - Order confirmation
  // Your code goes here 


// How can I write this with less code? Did not manage to find the solution with switch statement...

// adult confirmation

if (age > 13 && foodChoice === "1") {
    orderConfirmation = prompt(
    `Wonderful, ${name}! Almost there, let's confirm:
    You have selected an adult size ${dish[0]} for €15
    is this correct?
    1 - Yes
    2 - No
    Please enter the corresponding value:
    `)
} else if (age > 13 && foodChoice === "2") {
    orderConfirmation = prompt(
    `Wonderful, ${name}! Almost there, let's confirm:
    You have selected an adult size ${dish[1]} for €15
    is this correct?
    1 - Yes
    2 - No
    Please enter the corresponding value:
    `)
} else if (age > 13 && foodChoice === "3") {
    orderConfirmation = prompt(
    `Wonderful, ${name}! Almost there, let's confirm: 
    You have selected an adult size ${dish[2]} for €15
    is this correct?
    1 - Yes
    2 - No
    Please enter the corresponding value:
    `)
}

// child confirmation 

if (age <= 13 && foodChoice === "1") {
    orderConfirmation = prompt(
    `Wonderful, ${name}! Almost there, let's confirm: 
    You have selected a child size ${dish[0]} for €10
    is this correct?
    1 - Yes
    2 - No
    Please enter the corresponding value:
    `)
} else if (age <= 13 && foodChoice === "2") {
    orderConfirmation = prompt(
    `Wonderful, ${name}! Almost there, let's confirm: 
    You have selected a child size ${dish[1]} for €10
    is this correct?
    1 - Yes
    2 - No
    Please enter the corresponding value:
    `)
} else if (age <= 13 && foodChoice === "3") {
    orderConfirmation = prompt(
    `Wonderful, ${name}! Almost there, let's confirm:
    You have selected a child size ${dish[2]} for €10
    is this correct?
    1 - Yes
    2 - No
    Please enter the corresponding value:
    `)
}

if(orderConfirmation === "1") {
    alert("Perfect, we are preparing the food for you! Bon apetite!")
} else if(orderConfirmation === "2") {
    alert("OK, no worries, go back and change your order.")
} else {
    alert("Woops, something went wrong, go back and try again!")
}
exit(1)
