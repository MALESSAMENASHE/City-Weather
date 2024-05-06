const request= require('request');


/// for Developer use. 

function getWeather(city ,callBack){
    const url = 'http://api.weatherapi.com/v1/current.json?key=6bd328d2ca174d35b00103403241704&q='+ city;

    request({url, json: true}, (error, {body} ) => {

    if(error){
        callBack('unable to connect to weather service', undefined)
        
    }else if(body.error){
        callBack('Unable to find the location', undefined)
    }
     else {
        
        const temp_c=body.current.temp_c+' degress';
        const city =body.location.name
        const country =body.location.country;
        const weather = body.current.condition.text+' ,The temperature in '+city+' of the '+ country +' is '+ temp_c +' degress celsius'

        callBack(undefined,{
            temperature: temp_c,
            city: city,
            country: country,
            weather: weather,
        })
}
})
}

module.exports =getWeather ;