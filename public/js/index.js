'use-stric'



let str = `https://api.openweathermap.org/data/2.5/weather?q=bogota&appid=ae84ccab5d1b43a7bc72b33ce2cc7f32&units=metric`

let paris = `https://api.openweathermap.org/data/2.5/weather?q=paris&appid=ae84ccab5d1b43a7bc72b33ce2cc7f32&units=metric`

let tokio = `https://api.openweathermap.org/data/2.5/weather?q=tokio&appid=ae84ccab5d1b43a7bc72b33ce2cc7f32&units=metric`




const xhr = new XMLHttpRequest();
const xhrParis = new XMLHttpRequest();
const xhrTokio = new XMLHttpRequest();



function onRequest() {

    if (this.readyState === 4 && this.status === 200) {


        let dataInital = JSON.parse(this.response);
        let { main } = dataInital;
        let { icon } = dataInital.weather[0]
        let img = `https://openweathermap.org/img/wn/${icon}@2x.png`

        document.getElementById('grados').innerHTML = `<span class="contenidoTemp"> ${main.temp + '°'}</span>`
        document.getElementById('icon').innerHTML = `<img  src="${img}" class="iconBogota" alt="icono clima"/>`
    }

}


function onRequestParis() {

    if (this.readyState === 4 && this.status === 200) {


        let dataInital = JSON.parse(this.response);


        let { main } = dataInital;
        let { icon, description } = dataInital.weather[0]
        let { name } = dataInital
        let { humidity } = dataInital.main
        console.log(dataInital)
        let img = `https://openweathermap.org/img/wn/${icon}@2x.png`
        let { speed } = dataInital.wind

        document.getElementById('franceGrades').innerHTML = `<span class="contenidoTemp"><h4> ${main.temp + '°'}</h4> <p> ${' ' + name}</p></span>`
        document.getElementById('iconFrance').innerHTML = `<img  src="${img}" class="iconParis" alt="icono clima"/>`
        document.getElementById('pDetailsParis').innerHTML = `Humidity - ${humidity}% ${description} ${speed + ' km/H'}`




    }

}

function onRequestTokio() {
    console.log('tokio')

    if (this.readyState === 4 && this.status === 200) {

        let dataInital = JSON.parse(this.response);
        console.log(dataInital)
        let { main } = dataInital;
        let { icon, description } = dataInital.weather[0]
        let { name } = dataInital
        let { humidity } = dataInital.main
        let img = `https://openweathermap.org/img/wn/${icon}@2x.png`
        let { speed } = dataInital.wind

        document.getElementById('tokioGrades').innerHTML = `<span class="contenidoTemp"><h4> ${main.temp + '°'} </h4> <div class="separador"></div> <p> ${' ' + name}</p></span>`
        document.getElementById('iconTokio').innerHTML = `<img  src="${img}" class="iconParis" alt="icono clima"/>`
        document.getElementById('pDetailsTokio').innerHTML = `Humidity - ${humidity}% ${description} ${speed + ' km/H'}`

    }

}




xhr.addEventListener('load', onRequest);
xhr.open('GET', str);
xhr.send();


xhrParis.addEventListener('load', onRequestParis);
xhrParis.open('GET', paris);
xhrParis.send();


xhrTokio.addEventListener('load', onRequestTokio);
xhrTokio.open('GET', tokio);
xhrTokio.send();







/*
request({
    url: `https://api.openweathermap.org/data/2.5/weather?q=bogota&appid=${process.env.APIKEY}`,
    json: true,

}, (error, response, body) => {
    console.log('desde front')

        res.json(body);

})

*/