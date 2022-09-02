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


function newGame(secretWord)
{
    var game={
        word:secretWord,
        attemps:10,//valor hardcodeado
        hits:0;


    }
    return game;
}