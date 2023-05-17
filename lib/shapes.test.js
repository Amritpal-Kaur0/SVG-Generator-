const { Triangle, Circle, Square } = require("./shapes.js");


describe('Triangle' , ()=>{
    it('should render a blue triangle',()=>{
         const shape = new Triangle();
        shape.setColor('blue');
        const expected =`<polygon points ="150,50 50,150 250,150" style="fill:blue" />  `
        expect(shape.render()).toEqual(expected);
    })  
});
describe('Circle' , ()=>{
    it('should render a green  Circle',()=>{
         const shape =new Circle();
        shape.setColor('green');
        const expected = `<circle cx="150" cy="100" r="100" style ="fill:green" />`
        expect(shape.render()).toEqual(expected);
    })  
});
describe('Square',()=>{
    it('should render a yellow  Square',()=>{
         const shape =new Square();
        shape.setColor('yellow');
        const expected = `<rect x="50" y="50" width="100" height="100" style="fill:yellow" />`
        expect(shape.render()).toEqual(expected);
    })  
});
