//js de transisiones entre "pantallas"

var initButton=document.querySelector("#initGameButton");
var addWordButton=document.querySelector("#addWordButton");

var saveAndStartButton=document.querySelector("#saveAndStartButton");
var cancelButton=document.querySelector("#cancelButton");


var newGameButton=document.querySelector("#newGameButton");
var surrenderButton=document.querySelector("#surrenderButton");

var exitButton=document.querySelector("#exitButton");

var homeLayer=document.querySelector("#homeLayer");//Visible inicialmente
var gameLayer=document.querySelector("#gameLayer");//Oculta inicialmente
var addWordLayer=document.querySelector("#addWordLayer");//Oculta inicialmente
var gameOverLayer=document.querySelector("#gameOverLayer");//Oculta inicialmente




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
    gameSanti =newGame(levels);
    launchBoard(gameSanti);
    hide(homeLayer);
    show(gameLayer);
    hiddenInput.focus();
    makeInvisible(hiddenInput);


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
    hiddenInput.focus();

 

}

surrenderButton.addEventListener("click",surrender);
function surrender(){
    finishGame(gameSanti);
    hide(gameLayer);
    show(homeLayer);

}

newGameButton.addEventListener("click",newGame);
function newGame()
{
    finishGame(gameSanti);
    gameSanti =newGame(levels);
    hiddenInput.focus();
    launchBoard(gameSanti);
}

exitButton.addEventListener("click",exit);
function exit()
{
    finishGame(gameSanti);
    hide(gameOverLayer);
    show(homeLayer);
    return 0;
}

