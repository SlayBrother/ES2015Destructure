//1.
// 8 & 1846

//2. 
// yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659

// 3. 
// "Your name is Alejandro and you like purple"
// "Your name is Melissa and you like green"
// "Your name is undefined and you like green"

// 4. 
// console.log(first); "Maya"
// console.log(second); "Marisa"
// console.log(third); "Chi"

//5. 
// console.log(raindrops); "Raindrops on roses",
// console.log(whiskers); "whiskers on kittens"
// console.log(aFewOfMyFavoriteThings); "Bright copper kettles","warm woolen mittens",
// "Brown paper packages tied up with strings"

// 6. 
// 10, 30, 20

// 7. 

// const obj = {
//     numbers: {
//         a:1,
//         b:2
//     }
// }

// const  {a,b} = obj.numbers 

// 8. 
// const arr = [1,2]

// [arr[0], arr[1]] = [arr[1], arr[0]]

const participants = (['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])
const [first,second,third,...rest] = participants
const raceResults = ([first,second,third,...rest]) => ({
        first, second, third, rest 
})