/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

//create a variable for Jon and Jamie's attack strengths
let jonSnowAttack = 25
let jamieLannisterAttack = 35

//check who has the larger attack

if (jonSnowAttack > jamieLannisterAttack){
    console.log('Jon has a better than Jamie')
}
else if (jamieLannisterAttack > jonSnowAttack){
    console.log('Jamie has a better attack than Jon')
}
else{
    console.log('Jon and Jamie have the same attack')
}

//Additional stats for Jon snow
let jonSnowHealth = 100
let jonSnowDefense = 0

//Jamie attacks first - use if/else statements; "Jon Snow has been slain."

if (jonSnowHealth <= jamieLannisterAttack){
    console.log(`Jon Snow has been slain`)
}
else {
    jonSnowHealth -= jamieLannisterAttack
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`)
}

//increase Jon snow defence by 25 as he picks up a shield 
//jonSnowDefense = jonSnowDefense + 25
jonSnowDefense += 25

if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense){
    console.log(`Jon Snow has been slain`)
}
else {
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`)
}

//add a health kit to Jon's health; it only kicks in if Jon's health is below 100

if(jonSnowHealth + 50 >= 100) {
    jonSnowHealth = 100
} else {
    jonSnowHealth += 50
}

 console.log(jonSnowHealth)

 //coin toss to see if Jamie will fight or not

 let coinlandsHeads = false
 
//  if (coinlandsHeads === true){
//     console.log(`The fight continues.`)
//  } else{
//     console.log(`Jon is allwowed to run away.`)
//  }

 //use != to accomplish the same thing

 if (coinlandsHeads !== false){
    console.log(`The fight continues.`)
 } else{
    console.log(`Jon is allwowed to run away.`)
 }

 //for-loop
 //lets let the battle playout where Jamie attacks Jon 5 times; Console log Jon's health after each attack

 for (let i = 0; i < 5; i++){
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense);
    if (jonSnowHealth <= 0){
        console.log(`Jon has been slain`)
    } else{ 
    console.log(`Jon Snow has ${jonSnowHealth} health remaining`);
    }
 }

 //same thing as above but as a while loop

 while (jonSnowHealth > 0){
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
    console.log (`Jon's health is now ${jonSnowHealth}`)
    if (jonSnowHealth <= 0){
        console.log(`Jon has been slain`)
    }
 }
