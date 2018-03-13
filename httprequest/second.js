// const myRequest = new XMLHttpRequest()
// myRequest.open('GET', 'http://pokeapi.co/api/v2/pokemon/45', true)
// myRequest.onload = function(){
//     const myData = JSON.parse(myRequest.responseText)
//     console.log(myData[0])
// }
// myRequest.send
let pokemon = "http://pokeapi.co/api/v2/pokemon/45"
let weatherApi = "https://api.openweathermap.org/data/2.5/weather?q=Paris&APPID=724802524fa5af818d3036fbe974d275"

    function get(url) {
        return new Promise((resolve, reject) => {
          const req = new XMLHttpRequest();
          req.open('GET', url);
          req.onload = () => req.status === 200 ? resolve(req.response) : reject(Error(req.statusText));
          req.onerror = (e) => reject(Error(`Network Error: ${e}`));
          req.send();
        });
      }
    get(weatherApi)
    .then((data) => {
    console.log(JSON.parse(data))
    })
    .catch((err) => {
        console.log("sniff...catch error...")
    })

