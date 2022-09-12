//Archivo js en el cual se implementan las transiciones entre las distintas pantallas del juego

var initButton=document.querySelector("#initGameButton");
var addWordButton=document.querySelector("#addWordButton");


var saveAndStartButton=document.querySelector("#saveAndStartButton");
var cancelButton=document.querySelector("#cancelButton");


var newGameButton=document.querySelector("#newGameButton");
var surrenderButton=document.querySelector("#surrenderButton");
var newWordInput=document.querySelector(".newWordInput");
var exitButton=document.querySelector("#exitButton");

var homeLayer=document.querySelector("#homeLayer");//Visible inicialmente
var gameLayer=document.querySelector("#gameLayer");//Oculta inicialmente
var addWordLayer=document.querySelector("#addWordLayer");//Oculta inicialmente
var gameOverLayer=document.querySelector("#gameOverLayer");//Oculta inicialmente
var html=document.querySelector("html");
html.addEventListener("click",function(){hiddenInput.focus();
})



function hide(element)
{
    element.classList.add("hide");
}

function makeInvisible(element)
{
    element.classList.add("invisible");
}
function show(element)
{
    element.classList.remove("hide");
}



initButton.addEventListener("click",initGame);

function initGame()
{
    gameInstance =newGame(levels);
    launchBoard(gameInstance);
    hide(homeLayer);
    show(gameLayer);
    hiddenInput.focus();
    makeInvisible(hiddenInput);


}

addWordButton.addEventListener("click",addWord);

function addWord()
{
    hide(homeLayer);
    show(addWordLayer);
}

cancelButton.addEventListener("click",cancel);

function cancel()
{
    hide(addWordLayer);
    show(homeLayer);
    newWordInput.value='';
}


saveAndStartButton.addEventListener("click",saveAndStart);
function saveAndStart(){
    hide(addWordLayer);
    show(gameLayer);
    levels.push(newLevel(newWordInput.value));
    newWordInput.value='';
    initGame();


}

surrenderButton.addEventListener("click",surrender);
function surrender(){
    finishGame(gameInstance);
    hide(gameLayer);
    show(homeLayer);

}

newGameButton.addEventListener("click",newGame);
function newGame()
{
    finishGame(gameInstance);
    gameInstance =newGame(levels);
    hiddenInput.focus();
    launchBoard(gameInstance);
}

exitButton.addEventListener("click",exit);
function exit()
{
    finishGame(gameInstance);
    hide(gameOverLayer);
    show(homeLayer);
    return 0;
}

