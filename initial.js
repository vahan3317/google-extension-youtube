
var header = document.createElement('h1');
let div =document.createElement("div");


const characters ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, porro, commodi sunt fugiat quas sed repudiandae qui optio id ipsa modi neque, inventore perferendis quidem. Aut fugiat reprehenderit voluptatem saepe.Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, porro, commodi sunt fugiat quas sed repudiandae qui optio id ipsa modi neque, inventore perferendis quidem. Aut fugiat reprehenderit voluptatem saepe.Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, porro, commodi sunt fugiat quas sed repudiandae qui optio id ipsa modi neque, inventore perferendis quidem. Aut fugiat reprehenderit voluptatem saepe.';

function generateString(length) {
 let result = ' ';
 const charactersLength = characters.length;
 for ( let i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
 }

 return result;
}

console.log(generateString(5));


div.append(generateString(200));
var element = document.getElementById("contents");
div.style.backgroundColor ="green";
div.style.width ="240px";
div.style.height ="200px";
div.style.display = "flex";
div.style.justifyContent = "center";
div.style.alignItems = "center";
div.style.margin = "0 auto";
div.style.marginBottom ="20px"
element.prepend(div);




