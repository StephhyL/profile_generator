const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (nameAns) => {
  rl.question("What's an activity you like doing? ", (activityAns) => {
    rl.question("What do you listen to while doing that? ", (musicAns) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (mealAns) => {
        rl.question("What's your favourite thing to eat for that meal? ", (foodAns) => {
          rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpowerAns) => {
            console.log(`${nameAns} lives to ${activityAns} while listening to ${musicAns}. ${nameAns}'s favourite meal is ${mealAns} and favourite food is ${foodAns}. The most important thing fact about ${nameAns} is that ${nameAns}'s superpower is ${superpowerAns}'`) 
            rl.close();
          })
        })
      })
    })
  })
});
