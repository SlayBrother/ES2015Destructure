const teaOrder = {
    variety : 'oolong', 
    teaName : 'Winter sprout', 
    origin : 'taiwan', 
    price: 12.99, 
    hasCaffeine : true,
    quantity : 3
}; 

// const price = teaOrder.price
// const quantity = teaOrder.quantity
// const teaName = teaOrder.teaName

const {price,quantity,teaName,...others} = teaOrder
const {origin} =teaOrder

const {brewTemp = 175} = teaOrder

const {teaName: blackTea } = teaOrder

function checkout(tea){
    const {quantity,price} = tea
    return quantity * price
}

const order1 = {
    variety : 'green', 
    teaName : 'green jasmine', 
    origin : 'taiwan', 
    price: 12.99, 
    hasCaffeine : true,
    quantity : 3
}; 


const students = [
    {name: 'Drake', gpa: 4.6},
    {name: 'Henry', gpa: 4.4},
    {name: 'Tung', gpa: 4.0},
    {name: 'Harry', gpa: 3.8},
    {name: 'Ant', gpa: 3.2}
]

const [topStudent,...losers] = students

const order2 = {
    variety : 'green', 
    teaName : 'green jasmine', 
    origin : 'taiwan', 
    price: 12.99, 
    hasCaffeine : true,
    quantity : 4
}; 

function getTotal(tea){
    const {quantity,price} = tea; 
    return quantity * price
}

const longJumpResults = ['Tammy', 'Jessica', 'Violet'];
const swimMeetResults = ['Japan', 'France', 'Chile'];

function awardMedals([gold,silver,bronze]) {
    return {
        gold,silver,bronze
    }
}

let delicious = 'Mayonnaise';
let disgusting = 'whipped cream';


// let temp = delicious
// delicious = disgusting
// disgusting = temp

// let both = [delicious,disgusting];
// [disgusting,delicious] = both

[disgusting,delicious] = [delicious,disgusting]