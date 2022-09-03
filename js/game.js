//Codigo de juego

//randomWord recibe un array y retorna un elemento del array aleatorio

function randomWord(vector)
{
    if(!vector.length)
    {
       console.log("empty array");
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
        hits:0,
        isGameOver:false,
        usedLetters:'',
        nodeList:[]
        
        }
    return game;
}


function tryOut(letter,game)//Probar letra 
{
    let temp;
    letter=letter.toUpperCase();
    if(game.isGameOver!=false)
    {
        console.log("Juego terminado");
        return -1;
    }   
    if(count(letter,game.usedLetters))
    {
        console.log("letra ya usada");
        return 0;
    }

        game.usedLetters+=letter;
        console.log(game.usedLetters);



    if(!(temp=count(letter,game.word)))
        {
            console.log("Sin aciertos");
            game.attemps--;
            console.log(game.attemps);
        }
    else
    {
        console.log("Aciertos"+temp);
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
    {   console.log("Ganaste");
        var gameOverScreen=gameOverLayer.querySelector("#gameOverScreen");
        gameOverScreen.textContent="Ganaste";
        game.isGameOver=true;
        show(gameOverLayer);
        hide(gameLayer);



        return 0;
    }

    else if(!game.attemps)
    {
        console.log("perdiste");
        game.isGameOver=true;

        console.log("Perdiste");
        var gameOverScreen=gameOverLayer.querySelector("#gameOverScreen");
        gameOverScreen.textContent="Perdiste";
        game.isGameOver=true;
        show(gameOverLayer);
        hide(gameLayer);
        return 0;
    }

    console.log("Intentos restantes: "+game.attemps)

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
return 0;
}

function refreshKeyBoard(event)
{
    console.log(this.value);
    tryOut(this.value,gameSanti);
    event.target.value='';

}
var levels=importLevels("JSON/levels.json");
var hiddenInput=document.querySelector("#hiddenInput");
hiddenInput.addEventListener("input",refreshKeyBoard);

var gameSanti;
