 const questions =
    
    [
        {
            type :"list",
            name:"shape",
            message:"What Shape you want to draw for your LOGO?",
            choices:["Circle","Square","Triangle"],
        },
        {
            type :"input",
            name:"text",
            message:"What text  you want inside the Shape for LOGO(max 3 characters )?",
        },
        {
            type :"input",
            name:"textColor",
            message:"What Color you want for text inside LOGO? ",
        },
        {
            type :"input",
            name:"bg",
            message:"What background color you want the Shape to have ?(Enter name of color OR  hex Color Code)",
        },
        ];
module.exports =questions;