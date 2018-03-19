const listOfNames = ["Anahita", "Dorian", "Anthony", "Maxence", "Aurelie"]

const displayName = (typeOfFor, name) => console.log(typeOfFor, name) 

console.log(listOfNames.length + " wilders")

for (let i = 0; i < listOfNames.length; i++) {
    displayName("for loop", listOfNames[i])
}

for (name of listOfNames) {
    displayName("for of : ", name)
}

listOfNames.forEach(name => displayName("forEach :", name))


//class avec une méthode getName et dans la boucle on appelle getNAme sur chaque wilder.

class Wilder {
    constructor(name) {
        this.name = name
    } 
    getName() {
        console.log(`this wilder's name is ${this.name}`)
    }
}

for (name of listOfNames) {
    const student = new Wilder(name)
    console.log("We've got a new student!")
    student.getName()
}

//map pour créer un autre tableau d'objet que je récupère et j'appele get name en loopant dessus.

const listOfWilders = listOfNames.map(name => {
    return new Wilder(name)  //c'est ça qui marche, mais faire name = new Wilder(name) ça me donnait une array de undefined
})

console.log(listOfWilders)

for (wilder of listOfWilders) {
    wilder.getName()
}