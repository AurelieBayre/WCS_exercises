// Please read this:
// For security reasons, browsers restrict cross-origin HTTP requests initiated from within scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. 
// This means that a web application using those APIs can only request HTTP resources from the same domain the application was loaded from unless CORS headers are used.
// *from: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

// +<p class="note no-backref" id=event-listeners-and-preflight>Registering one or more event listeners
// on an {{XMLHttpRequestUpload}} object will result in a <a>CORS-preflight request</a>. (That is
// because registering an event listener causes the <a>upload listener flag</a> to be set, which in
// turn causes the <a>use-CORS-preflight flag</a> to be set.)
// *from : https://twitter.com/xhrstandard/status/895574019772227584



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
const url = "https://api.openweathermap.org/data/2.5/weather?q=" //this is the format when you want a JSON
const key = "&APPID=724802524fa5af818d3036fbe974d275"

function validateHandler () {
    console.log(this)
    const form = document.getElementById("locationForm");
    const city = form.elements["city"].value;
    const urlRequest = url+city+key
    //console.log(city)
    //console.log("my request url: ", urlRequest)
    getJSON(urlRequest) 
    .then((data) => {
    console.log(JSON.parse(data)) // là ça ne marche pas QUAND ON EST DANS validateHandler... il me concatène mon url locale, plus l'url de la request.... ???
    })
    .catch((err) => {
        console.log("sniff...catch error...", err)
    })
}