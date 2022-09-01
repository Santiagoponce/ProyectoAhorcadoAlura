//js de transisiones entre "pantallas"

var initButton=document.querySelector("#initGameButton");
var addWordButton=document.querySelector("#addWordButton");

var saveAndStartButton=document.querySelector("#saveAndStartButton");
var cancelButton=document.querySelector("#cancelButton");


var newGameButton=document.querySelector("#newGameButton");
var surrenderButton=document.querySelector("#surrenderButton");


var homeLayer=document.querySelector("#homeLayer");//Visible inicialmente
var gameLayer=document.querySelector("#gameLayer");//Oculta inicialmente
var addWordLayer=document.querySelector("#addWordLayer");//Oculta inicialmente



function hide(element)
{
    element.classList.add("hide");
}

function show(element)
{
    element.classList.remove("hide");
}



initButton.addEventListener("click",initGame);

function initGame()
{
    console.log("Boton pulsado init");
    hide(homeLayer);
    show(gameLayer);

}

addWordButton.addEventListener("click",addWord);

function addWord()
{
    console.log("Boton pulsado add");
    hide(homeLayer);
    show(addWordLayer);
}

cancelButton.addEventListener("click",cancel);

function cancel()
{
    console.log("Boton pulsado cancelit");
    hide(addWordLayer);
    show(homeLayer);
}


saveAndStartButton.addEventListener("click",saveAndStart);
function saveAndStart(){
    hide(addWordLayer);
    show(gameLayer);
 

}

surrenderButton.addEventListener("click",surrender);
function surrender(){
    hide(gameLayer);
    show(homeLayer);

}

newGameButton.addEventListener("click",newGame);
function newGame()
{

}
