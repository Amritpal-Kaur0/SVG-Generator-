const inquirer =require("inquirer");
const fs =require("fs");
const {Circle,Square,Triangle} =require("./lib/shapes.js");
const questions =require("./lib/questions.js");

// Inquirer to get user's answer in prompt in the form of terminal
inquirer.prompt(questions).then((data) => {
  const { shape, text, textColor, bg } = data;

  console.log("Creating svg file.....");
// switch to select shape and get required shape ,font color and bg color 
  switch (shape) {
    case 'Square':
        console.log("Square is being Created....");
        const square = new Square();
        square.setColor(bg);
        const squareSvg = square.render();
      
        const squareX = 98;
        const squareY = 105;
      
        const squareLogoSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" style="fill:${bg}">
          ${squareSvg}
          <text x="${squareX}" y="${squareY}" fill="${textColor}" font-size="30" text-anchor="middle">${text}</text>  
        </svg> `;
      
        fs.writeFileSync('./Examples/logo.svg', squareLogoSvg);
        console.log(`🏆 Generated Logo.svg of ${shape} `);
        break;

    case 'Circle':
      console.log("Circle is being Created");
      const circle = new Circle();
      circle.setColor(bg);
      const circleSvg = circle.render();

      const circleX = 145;
      const circleY = 110;

      const circleLogoSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" style="fill:${bg}" >
        ${circleSvg}
        <text x="${circleX}" y="${circleY}" fill="${textColor}" font-size="40" text-anchor="middle">${text}</text>  
      </svg>`;

      fs.writeFileSync('./Examples/logo.svg', circleLogoSvg);
      console.log(`🏆 Generated Logo.svg of ${shape} `);
      break;

    case 'Triangle':
      console.log("Triangle is being Created....");
      const triangle = new Triangle();
      triangle.setColor(bg);
      const triangleSvg = triangle.render();

      const trinagleX = 150;
      const triangleY = 120;

      const triangleLogoSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" style="fill:${bg}">
        ${triangleSvg}
        <text x="${triangleX}" y="${triangleY}" fill="${textColor}" font-size="30" text-anchor="middle">${text}</text>  
      </svg>`;

      fs.writeFileSync('./Examples/logo.svg', triangleLogoSvg,(err)=>{
        if (err)throw err;
      });
      console.log(" 🏆 Generated Logo.svg");
      break;
  }
});

