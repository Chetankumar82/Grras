function age_verification(age, verify) {
    let result = verify(age)

    return result
}

function details(fname, lname, age, age_verification) {
    let isadult = age_verification(age, ()=>{
        if(age>=18) {
            return "Adult"
        } else {
            return "Child"
        }
    })

    return `First Name: ${fname},\nLast Name: ${lname},\nStatus: ${isadult}`
}

console.log(details("Hriday", "Goswami", 2, age_verification))