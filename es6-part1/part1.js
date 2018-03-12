//je trouve les consignes un peu bizarres, 
//elles disent de déclarer des variables,
//mais il me semblerait plus commode de déclarer un objet "profile", non?



// pour déterminer l'année en cours:
const actualDate = new Date()

const actualYear = actualDate.getFullYear()

//les variables du profil:
const city = "Ulaanbaatar"

const dateOfBirth = {
    day: 6,
    month: "April",
    year: 1902
}

const age = actualYear - dateOfBirth.year

//la phrase
const sentence = `I live in ${city} and I'm ${age} old. 
\b Yes, I was born in ${dateOfBirth.year}!!!
\b To be more precise, I was born on the ${dateOfBirth.day}th of ${dateOfBirth.month} ${dateOfBirth.year}`

return console.log(sentence)