const actualDate = new Date()
const actualYear = actualDate.getFullYear()

const sentence = (num) => { 
    const dateOfBirth = actualYear - num 
    console.log(`Mmmmhh... let me see my cristal ball...
    \b You were born around the year ${dateOfBirth}`)
}

process.stdin.resume()
process.stdin.setEncoding('utf8')

console.log('How old are you?')
process.stdin.on('data', (input) => {
//input is a string!
//return console.log(parseInt(input), typeof parseInt(input)) //NaN, "number" 
    if (isNaN(input)) {
        console.log("sorry, this isn't a number. ")
        process.exit()
    }
    else if (input > 99){
        console.log("sorry, this number is too big.")
        process.exit()
    }
    sentence(input)
    process.exit()
})

