const actualDate = new Date()
const actualYear = actualDate.getFullYear()

const sentence = (num) => { 
    const dateOfBirth = actualYear - num 
    return console.log(`Mmmmhh... let me see my cristal ball...
    \b You were born around the year ${dateOfBirth}`)
}

process.stdin.resume()
process.stdin.setEncoding('utf8')

console.log('How old are you?')
process.stdin.on('data', (input) => {
//input is a string!
//return console.log(parseInt(input), typeof parseInt(input)) //NaN, "number" 
    if (isNaN(input)) {
        return console.log("sorry, this isn't a number. ")
    }
    else if (input > 99){
        return console.log("sorry, this number is too big.")
    }
    console.log(sentence(input))
  process.exit()
})

