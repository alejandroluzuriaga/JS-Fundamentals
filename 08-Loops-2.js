// var count = 0;

// while(count<=10){
//     console.log(`Count is on ${count}`);
//     count++;
// }

// var negativeCount = 10;

// while (negativeCount>=0){
//     console.log(`Count is on ${negativeCount}`);
//     negativeCount--;
// }

var timesRepeated = 0;
var sentence = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
var count2 = 0;
while(count2<sentence.length){
    if (sentence[count2] === 'a'){
        timesRepeated++;
    }
    count2++;
}

console.log(`There is ${timesRepeated} 'a' letters in the sentence`)

// Basic structure WHILE LOOP
// while(condition){
//  instructions;
//}
// First check condition = TRUE, then execute instructions.
