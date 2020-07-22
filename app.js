
console.log("Loaded script");
const apiKey = "b44d0686d2b41ca32e0c0b7c594929ef";

var button = document.getElementById('search-button');

button.addEventListener('click', function (){

    let searchQuery = document.getElementById('search-query').value;
    let searchType = document.getElementById('search-type').value;
    let fetchQuery = " ";

    if(searchQuery == ' '){
        alert('Please Enter a value');
        return; 
    }
    if(searchType == 'city'){
        fetchQuery = 'q';
    }else{
        fetchQuery = 'zip';
    }

    fetch(
        `https://api.openweathermap.org/data/2.5/weather?${fetchQuery}=${searchQuery},us&appid=${apiKey}&units=imperial&mode=html`
    ).then(function(response){
        return response.text();
    }).then(function(data){
        console.log(data);
        document.getElementById('weatherData').innerHTML=data;
    }).catch(function(error){
        console.log(error);
    })

    //api.openweathermap.org/data/2.5/weather?q=Atlanta,us&units=imperial&appid=b44d0686d2b41ca32e0c0b7c594929ef
    //api.openweathermap.org/data/2.5/weather?q=Atlanta,us&units=imperial&appid=b44d0686d2b41ca32e0c0b7c594929ef
   
});