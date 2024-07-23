function prime_number_finder(n) {
    let flag = true
    for(let i=2; i<n; i++) {
        if(n%i==0) {
            flag = false
            break
        }
    }

    if(flag) {
        return "Prime"
    } else {
        return "Not prime"
    }
}

function prime_number_range(start=0, end, isPrime) {
    let output = []
    for(let i=start; i<=end; i++) {
        if(i == 0 || i == 1) {}
        else if (isPrime(i) == "Prime") {
            output = [...output, i]
        }
    }
    
    return output
}

// console.log(prime_number_finder(4))
// for(let i=0; i<=50; i++) {
//     if (prime_number_finder(i) == "Prime") {
//         console.log("Prime", i)
//     }
// }

console.log(prime_number_range(0, 10000, (n)=>{
        let flag = true
        for(let i=2; i<n; i++) {
            if(n%i==0) {
                flag = false
                break
            }
        }

        if(flag) {
            return "Prime"
        } else {
            return "Not prime"
        }
    }
    ))