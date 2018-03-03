let answer = "";

function prompting(){
    answer = window.prompt("Hey mon ami ! Tu aimes ça les patates ?");
    return answer;
}

function check(something) {
    let success = something === "oui" || something === "Oui"; 
    let fail = something === "non" || something === "Non";
    //ternary operator with multiple cases:
       return success ? (console.log("you will get your potatoes"), printPotatoes())
            : fail ? no() 
            : neither()
}

function printPotatoes() {
   let potatoString = "#"
    for (let i = 0; i < 7; i++){
        //concat the string with a carriage return:
        console.log(potatoString + "\r" )
        //concat a new potato:
        potatoString += "#"
    }
}

function no(){
    alert("Mais Dieu du Ciel, QUI n'aime pas les patates???")
}
function neither() {
    alert("je vous sens comme tiraillé..")
}

prompting()
check(answer)