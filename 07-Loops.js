// for(let i = 50; i>=0; --i){
//     console.log(i);
// }

var timesRepeated = 0;
var sentence = 'I like programming as much as I like to eat'

for(let i=0; i < sentence.length; ++i){
   if  (sentence[i] === 'a'){
    timesRepeated += 1;
   }
}

console.log(`There is ${timesRepeated} 'a' letters in the sentence '${sentence}'`)

// Basic structure
// for(let variable=value; loopCondition; variableIncrease or variableDecrease (or any other way to change initial value of variable)){
//  instructions;
//}
