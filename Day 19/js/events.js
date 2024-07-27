let h1 = document.getElementsByTagName("h1")[0]
h1.addEventListener("dblclick",()=>{
    console.log("element clicked")
})

h1.addEventListener("mouseenter",()=>{
    console.log("Entered")
    h1.innerText = "Entered"
})

h1.addEventListener("mouseleave",()=>{
    console.log("Left")
    h1.innerText = "left"
})