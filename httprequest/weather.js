//my key: 724802524fa5af818d3036fbe974d275
//url: api.openweathermap.org/data/2.5/forecast?id=524901&APPID=724802524fa5af818d3036fbe974d275q=London


const request = (apiUrl, somewhereOnEarth, apiKey) => `${apiUrl}${somewhereOnEarth}${apiKey}`


// const url = "http://api.openweathermap.org/data/2.5/weather?q="
// const key ="&APPID=724802524fa5af818d3036fbe974d275"


const validateClickHandler = () => {
    console.log("j'ai cliqué sur le bouton!")
    const location = document.getElementById("locationForm");
    const city = location.elements["city"].value;
    const url = "api.openweathermap.org/data/2.5/weather?q=" //this is the format when you want a JSON
    const key ="&APPID=724802524fa5af818d3036fbe974d275"
    const urlRequest = `${url}${city}${key}`
    console.log("my request url: ", urlRequest) //ok
    callApi(urlRequest)
}

const callApi = (myurl) => {
    const req = new XMLHttpRequest()
    req.onreadystatechange = function(event) {
       console.log(req)
        if (req.readyState === 4) {
            console.log("our req status: ", req.status) //status 0
            console.log(req.responseXML)
            let response = JSON.parse(req.responseText);
            console.log(response);
            if (req.status === 200) {
              //console.log(xhr.responseText);
            //   let response = JSON.parse(req.responseText);
            //   console.log(response);
            } else {
              console.error(req.statusText);
            }
          }
        }
//test thi: "https://crossorigin.me/https://api.openweathermap.org/data/2.5/weather?q=Paris&APPID=724802524fa5af818d3036fbe974d275"
    req.open("GET", myurl, true) //
    req.overrideMimeType('text/xml');
    req.send()
}


const button = document.getElementById("submitButton");
button.addEventListener("click", validateClickHandler, false)
//button.addEventListener('click', (event) => {
    // const location = document.getElementById("locationForm");
	// const city = location.elements["city"].value;
	//const zipCode = location.elements["zip"].value;
    //console.log("our data: ", city, zipCode)
    
    // function getData(myData) {
    //     console.log(myData)
    // }
    
    // console.log(request(url, city, key)) //ok
    
    // const req = new XMLHttpRequest();
    // console.log(req) //ok

    // req.onreadystatechange = function () {
    //     // see this https://www.w3schools.com/xml/ajax_xmlfile.asp 
    //     //and continue
    //     if (this.readyState == 4 && this.status == 200) {
    //         const myJson = JSON.parse(this.response.Text)
    //         getData(myJson)
    //     } else { 
    //         console.log("What's happening?")
    //     }
    // }
    
    // req.open("GET", request(url, city, key), true) // browser doesn't like the false...
    // //https://xhr.spec.whatwg.org/#the-open()-method
    // console.log(req.responseText) // ?


    
    // if (req.status === 200) {
    // //     console.log("It works! ", req.responseText)
    //  } else {
    //      console.log("Status de la réponse ", req.status, req.statusText)
    //  }


    //or use fetch??? https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data
    // console.log(request(url, city, key))
    // fetch(request(url, city, key))
    //     .then((resp) => resp.json()) //we get a JSON
    //     .then(function(data){
    //         console.log(data)
    //     }) 
    //     .catch(function(error){
    //         console.log(error)
    //     })

//});







