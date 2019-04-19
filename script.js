const simplequotes=[
{
  name:"Sri",
  Quote:"Get busy Coding or get busy Dying"
},
{
  name:"Sri Ram",
  Quote:"You cannot climb the ladder of success with your hands in your pocket"
},
{
  name:"Sri ram Ede",
  Quote:"If you want to be happy, be."
},
{
  name:"Stephen Chbosky",
  Quote:"Things change. And friends leave. Life doesn't stop for anybody"
},
{
  name:"Einstein",
  Quote: "The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking. "
}

];

const quotebtn= document.querySelector("#quotebtn");
//console.log(quotebtn);check
const quoteAutor = document.querySelector("#quoteAuthor");
const quote=document.querySelector("#quote");

quotebtn.addEventListener("click",displayquote);

function displayquote(e){
e.preventDefault();

let randomnum=Math.floor((Math.random())*simplequotes.length);

//console.log(randomnum); check

// console.log("name"+simplequotes[randomnum].name+"quote"+simplequotes[randomnum].Quote); check

quote.textContent=simplequotes[randomnum].Quote;

quoteAutor.innerHTML=simplequotes[randomnum].name;

//console.log(quoteAutor);

}