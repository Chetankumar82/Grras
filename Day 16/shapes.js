class Shape {
    constructor(shape,l,b=0){
        this.shape = shape
        this.area_peri = {
            "square":()=>{
                let area = l**2
                let perimeter = 2*(l*b)
                return `Shape:${shape},\nPerimeter:${perimeter},\nArea:${area}`
            },
            "circle":()=>{
                let area = Math.PI*(l**2)
                let perimeter = 2*Math.PI*l
                 return `Shape:${shape},\nPerimeter:${perimeter},\nArea:${area}`
            },
            "rectangle":()=>{
                let area = l*b
                let perimeter = 2*(l*b)
                return `Shape:${shape},\nPerimeter:${perimeter},\nArea:${area}`
            }

        }
    }
    output(){
        return this.area_peri[this.shape]();
    }
}

let obj = new Shape("square",20,30);
console.log(obj.output());