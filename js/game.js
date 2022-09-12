//Codigo de juego

//randomWord recibe un array y retorna un elemento del array aleatorio

function randomWord(vector)
{
    if(!vector.length)
    {
       return -1;
    }

    let index=Math.floor(Math.random()*(vector.length));
    return vector[index];

}

function launchBoard(game)
{
    var maskedWord=document.querySelector(".maskedWord");
    for(let i=0; i<game.word.length; i++)
    {
        let li=document.createElement("li");
        li.classList.add("boardLetter");
        maskedWord.append(li);

    }

    game.nodeList=document.querySelectorAll(".boardLetter");
    return 0;

}

//funcion que recibe la ruta de un archivo JSON y devuelve un array parseado
function importLevels(pathJsonFileLevels)
{
    var levels;
    var xhr= new XMLHttpRequest();
    
    xhr.addEventListener("load",function ()
    {
        levels=JSON.parse(xhr.responseText);
    }
    );

    xhr.open("GET",pathJsonFileLevels,false);
    xhr.send();
    return levels;

}
function newGame(levels)
{
    var game={
        word:randomWord(levels).secretWord.toUpperCase(),
        attemps:10,//valor hardcodeado
        miss:0,
        hits:0,
        isGameOver:false,
        usedLetters:'',
        nodeList:[]
        
        }
    return game;
}

function newLevel(string)
{
    var level={
        secretWord:string
    };

return level;
}

function tryOut(letter,game)//Probar letra 
{
    let temp;
    letter=letter.toUpperCase();
    if(game.isGameOver!=false)
    {        return -1;
    }   
    if(count(letter,game.usedLetters))
    {
        return 0;
    }

        game.usedLetters+=letter;


    if(!(temp=count(letter,game.word)))
        {
            game.attemps--;
            displayHangman(game);
            game.miss++;
        }
    else
    {
        unmaskLetter(letter,game);
        game.hits+=temp;
    }


    checkStatus(game);
}

function unmaskLetter(letter,game){
    for(let i=0;i<game.word.length;i++)
    {
        if(game.word[i]==letter)
            game.nodeList[i].textContent=letter;
    }

}

function checkStatus(game){
    
    if(game.hits==(game.word).length)
    {   
        var gameOverScreen=gameOverLayer.querySelector("#gameOverScreen");
        gameOverScreen.textContent="GANASTE";
        game.isGameOver=true;
        show(gameOverLayer);
        hide(gameLayer);



        return 0;
    }

    else if(!game.attemps)
    {
        
        game.isGameOver=true;

        
        var gameOverScreen=gameOverLayer.querySelector("#gameOverScreen");
        gameOverScreen.textContent="PERDISTE";
        game.isGameOver=true;
        show(gameOverLayer);
        
        hide(gameLayer);
        return 0;
    }


}
//this function counts the occurrences of the char c  in a string s  (AGREGAR A MIS UTILS)
function count(c,string)
{
    c=c.toUpperCase();
    let i,occurrences;

    for(i=0,occurrences=0;i<string.length;i++)
        if(string[i]==c)
            occurrences++;
    

    return occurrences;

}


function finishGame(game)
{
    game.nodeList.forEach(function (li)
    {
        li.remove();
    });
     hideHangman(hangman);

return 0;
}

function refreshKeyBoard(event)
{
    tryOut(this.value,gameInstance);
    event.target.value='';

}




function displayHangman(game)
{
    show(hangman[game.miss]);
}
function hideHangman(hangman)
{
    hangman.forEach(function (value)
    {
        hide(value);
    });
}

var levels=importLevels("JSON/levels.json");
var hiddenInput=document.querySelector("#hiddenInput");
hiddenInput.addEventListener("input",refreshKeyBoard);
var hangman=document.querySelectorAll(".hangman");
hideHangman(hangman);
var gameInstance;
