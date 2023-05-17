class Shape {
    constructor (){
        this.textColor = "";
    }
    setColor(textColor){
       this.textColor= textColor;
    }
}
class Circle extends Shape{ 
render(){
   return `<circle cx="150" cy="100" r="100" style ="fill:${this.textColor}" />` 
   
}
}
 class Triangle extends Shape{ 
render(){
    return `<polygon points ="150,50 50,150 250,150" style="fill:${this.textColor}" />  `
}
}
 class Square extends Shape {
    render() {
      return `<rect x="50" y="50" width="100" height="100" style="fill:${this.textColor}" />`;
    }
  };

module.exports = {
  Circle,
  Square,
  Triangle,
};