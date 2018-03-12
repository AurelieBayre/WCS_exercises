

const prompting = () => {
    const answer = window.prompt("Hey mon ami ! Tu aimes ça les patates ?");
    return answer;
}

const check = (something) => {
    let success = something === "oui" || something === "Oui"; 
    let fail = something === "non" || something === "Non";
    //ternary operator with multiple cases:
       return success ? (console.log("you will get your potatoes"), printPotatoes())
            : fail ? no() 
            : neither()
}

const printPotatoes = () => {
   let potatoString = "#"
    for (let i = 0; i < 7; i++){
        //concat the string with a carriage return:
        console.log(potatoString + "\r" )
        //concat a new potato:
        potatoString += "#"
    }
}

const no = () => alert("Mais Dieu du Ciel, QUI n'aime pas les patates???")

const neither = () => alert("je vous sens comme tiraillé..")

check(prompting())