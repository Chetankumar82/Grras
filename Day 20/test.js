let h = 1, m=1, s=10
let x = setInterval(()=>{
    if(s>0) {
        s--
    } else if(m>0) {
        m--
        s = 59
    } else if(h>0) {
        m--
        h--
        s = 59
        m = 59
    } else if(m==0 && h == 0 && s == 0) {
        clearInterval(x)
    }

    console.log(h, m, s)
}, 100)