const getJSON = (str) => {
    return new Promise((resolve, reject) => {
        const req = new XMLHttpRequest();
        req.open('GET', str, true);
        req.onload = () => req.status === 200 ? resolve(req.response) : reject(Error(req.statusText));
        req.onerror = (e) => reject(Error(`Network Error: ${e}`));
        req.send();
    });
}

// TEST:
// let weatherApi = "https://api.openweathermap.org/data/2.5/weather?q=Paris&APPID=724802524fa5af818d3036fbe974d275"

const url = "https://api.openweathermap.org/data/2.5/weather?q=" //this is the format when you want a JSON
const key = "&APPID=724802524fa5af818d3036fbe974d275"

//function without parameters written as a const?
function validateHandler() {
    //console.log(weatherApi)
    const form = document.getElementById("locationForm");
    const city = form.elements["city"].value;
    const urlRequest = url+city+key
    const metrics = "&units=metric"
    //console.log(city)
    console.log("my request url: ", urlRequest)
    getJSON(urlRequest) 
    .then((data) => {
    console.log(JSON.parse(data)) // là ça ne marche pas QUAND ON EST DANS validateHandler... il me concatène mon url locale, plus l'url de la request.... ???
    })
    .catch((err) => {
        console.log("sniff...catch error...", err)
    })
}