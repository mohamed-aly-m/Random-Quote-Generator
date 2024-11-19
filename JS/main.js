

var quote =["Live as if you were to die tomorrow. Learn as if you were to live forever. ― Mahatma Gandhi ", "It is better to be hated for what you are than to be loved for what you are not.  ― Andre Gide, Autumn Leaves", "Without music, life would be a mistake.  ― Friedrich Nietzsche", "Always forgive your enemies; nothing annoys them so much.  ― Oscar Wilde", "If you only read the books that everyone else is reading, you can only think what everyone else is thinking.  ― Haruki Murakami", "Perhaps one did not want to be loved so much as to be understood.  ― George Orwell"];
var display = document.getElementById("display");
var x = 0;

function addQuote(){
    if (x < quote.length){
        display.innerHTML = quote[x];
    }

    x++;

    // for(var i=0; i< quote.length ; i++){
    //     console.log(quote[i]);
    //     document.getElementById("newQuote").innerHTML = `<h3>"${(quote[i])}"</h3>`;
    // }
}