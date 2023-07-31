
function lightMode(){
    let myLight = document.body
    myLight.classList.toggle("myLight")
    let myColor = document.getElementsByClassName("myColor1")[0]
    let btn2A = document.getElementsByClassName("btn2A")[0]
    myColor.classList.toggle("myColor")
    btn2A.classList.toggle("btn2B")

}

// COUPON LOAD FUNCTION 
function loadCoupon(){
    document.getElementById("coupon").style.visibility = "visible"
    document.getElementById("header").style.opacity = "0.4"
    document.getElementById("footer").style.opacity = "0.4"
    document.getElementById("faq").style.opacity = "0.4"
    document.getElementById("cartoon").style.opacity = "0.4"
    document.getElementById("left").style.opacity = "0.4"
    document.getElementById("tv1").style.opacity = "0.4"
    document.getElementById("tv").style.opacity = "0.4"
    document.getElementById("home").style.opacity = "0.4"
}

// COUPON CLOSE BUTTON 
function closeCoupon(){
    document.getElementById("coupon").style.visibility = "hidden"
    document.getElementById("header").style.opacity = "1"
    document.getElementById("footer").style.opacity = "1"
    document.getElementById("faq").style.opacity = "1"
    document.getElementById("cartoon").style.opacity = "1"
    document.getElementById("left").style.opacity = "1"
    document.getElementById("tv1").style.opacity = "1"
    document.getElementById("tv").style.opacity = "1"
    document.getElementById("home").style.opacity = "1"
}
function couponLink(){
    document.getElementById("coupon").style.visibility = "hidden"
    document.getElementById("header").style.opacity = "1"
    document.getElementById("footer").style.opacity = "1"
    document.getElementById("faq").style.opacity = "1"
    document.getElementById("cartoon").style.opacity = "1"
    document.getElementById("left").style.opacity = "1"
    document.getElementById("tv1").style.opacity = "1"
    document.getElementById("tv").style.opacity = "1"
    document.getElementById("home").style.opacity = "1"
}

// GEOLOCATION
let x = document.getElementById("out")
let y = document.getElementById("weather")

function geolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }else{
        x.innerText = "Geolocation not supported here"
    }
}

function showPosition(data){
    console.log(data)
    let lat = data.coords.latitude
    let lon = data.coords.longitude
    // x.innerText = `latitude is ${lat} and longitude is ${lon}`
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`

    // API CALLING 
    fetch(url,{method: "GET"})
    // return promise 
    .then((res) => res.json())
    // RESOLVE THE PROMISE 
    .then((data) => {
        console.log(data)
        let cityName = data.city.name
        let weather = Math.round(data.list[0].temp.day)+"°C"
        y.innerText = `${weather} ${cityName}`
    })

}