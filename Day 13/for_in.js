let arrObj = [
    {
    "fname":"Chetan",
    "lname":"kumar"
},
{
    "fname":"Harish",
     "lname":"kumar"
},
{
    "fname":"Dilip",
     "lname":"kumar"
},
{
    "fname":"Dasharath",
     "lname":"kumar"
},
{
    "fname":"Kushal",
     "lname":"kumar"
}
]

for (const key in arrObj) {
    if (Object.hasOwnProperty.call(arrObj, key)) {
        const element = arrObj[key];
        console.log(element);
        
    }
}