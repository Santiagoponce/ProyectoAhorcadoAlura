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

function launchBoard()
{

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
        word:randomWord(levels).secretWord,
        attemps:10,//valor hardcodeado
        hits:0,
        isGameOver:false,
        usedLetters:''
    }
    return game;
}


function tryOut(letter,game)//Probar letra 
{
    let temp;
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
        game.hits+=temp;
    }


    checkStatus(game);
}

function checkStatus(game){
    
    if(game.hits==(game.word).length)
    {   console.log("Ganaste");
        game.isGameOver=true;
        return 0;
    }

    else if(!game.attemps)
    {
        console.log("perdiste");
        game.isGameOver=true;
        return -1;
    }

    console.log("Intentos restantes: "+game.attemps)

}
//this function counts the occurrences of the char c  in a string s  (AGREGAR A MIS UTILS)
function count(c,string)
{
    let i,occurrences;

    for(i=0,occurrences=0;i<string.length;i++)
        if(string[i]==c)
            occurrences++;
    

    return occurrences;

}




var levels=importLevels("JSON/levels.json");
var gameSanti=newGame(levels);
