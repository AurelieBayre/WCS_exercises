// const myRequest = new XMLHttpRequest()
// myRequest.open('GET', 'http://pokeapi.co/api/v2/pokemon/45', true)
// myRequest.onload = function(){
//     const myData = JSON.parse(myRequest.responseText)
//     console.log(myData[0])
// }
// myRequest.send

function getJSON(str) {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open('GET', str, true);
        req.onload = () => req.status === 200 ? resolve(req.response) : reject(Error(req.statusText));
        req.onerror = (e) => reject(Error(`Network Error: ${e}`));
        req.send();
    });
}

let pokemon = "http://pokeapi.co/api/v2/pokemon/45"
let weatherApi = "https://api.openweathermap.org/data/2.5/weather?q=Paris&APPID=724802524fa5af818d3036fbe974d275"

const form = document.getElementById("locationForm");
let city = form.elements["city"].value;
let urlRequest = ""
const url = "https://api.openweathermap.org/data/2.5/weather?q=" //this is the format when you want a JSON
const key = "&APPID=724802524fa5af818d3036fbe974d275"

function validateHandler () {
    //const form = document.getElementById("locationForm");
    city = form.elements["city"].value;
    //urlRequest = url+city+key
    console.log(city)
    //console.log("my request url: ", urlRequest)
    console.log(url+city+key)

    return url+city+key
}


getJSON(weatherApi) 
    .then((data) => {
    console.log(JSON.parse(data)) // là ça ne marche pas QUAND ON EST DANS validateHandler... il me concatène mon url locale, plus l'url de la request.... ???
    })
    .catch((err) => {
        console.log("sniff...catch error...", err)
    })

//const urlRequest = `${url}${city}${key}`

//console.log("and weatherAPI: ", weatherApi)


    // const getJSON = (url) => {
    //     return new Promise((resolve, reject) => {
    //       const req = new XMLHttpRequest();
    //       req.open('GET', url);
    //       req.onload = () => req.status === 200 ? resolve(req.response) : reject(Error(req.statusText));
    //       req.onerror = (e) => reject(Error(`Network Error: ${e}`));
    //       req.send();
    //     });
    //   }
    // getJSON(weatherApi)
    // .then((data) => {
    // console.log(JSON.parse(data)) //là aucun souci!!!
    // })
    // .catch((err) => {
    //     console.log("sniff...catch error...")
    // })

    const validateClickHandler = () => {
        console.log("j'ai cliqué sur le bouton!")
        const location = document.getElementById("locationForm");
        const city = location.elements["city"].value;
        const url = "api.openweathermap.org/data/2.5/weather?q=" //this is the format when you want a JSON
        const key ="&APPID=724802524fa5af818d3036fbe974d275"
        const urlRequest = `${url}${city}${key}`
        console.log("my request url: ", urlRequest) //ok
        getJson(urlRequest) .then((data) => {
            console.log(JSON.parse(data))
            })
            .catch((err) => {
                console.log("sniff...catch error...")
            })
    }

