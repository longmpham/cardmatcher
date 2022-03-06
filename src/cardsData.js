let i = 0;

const arrayOfCards = Array.from(Array(50), () => ({
    "id": `${i++}`,
    "isFlipped": false
}))
console.log(arrayOfCards)
export default arrayOfCards

// export default [
//     {
//         "id": "1",
//         "isFlipped": false,    
//     },
//     {
//         "id": "2",
//         "isFlipped": false,    
//     },
//     {
//         "id": "3",
//         "isFlipped": false,    
//     },
//     {
//         "id": "4",
//         "isFlipped": false,    
//     },
//     {
//         "id": "5",
//         "isFlipped": false,    
//     },
//     {
//         "id": "6",
//         "isFlipped": false,    
//     },
//     {
//         "id": "7",
//         "isFlipped": false,    
//     },
//     {
//         "id": "8",
//         "isFlipped": false,    
//     },
//     {
//         "id": "9",
//         "isFlipped": false,    
//     },
// ]