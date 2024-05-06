console.log('client side javascript file loaded');

const url = 'http://api.weatherapi.com/v1/current.json?key=6bd328d2ca174d35b00103403241704&q='

const weatherForm= document.querySelector('form');
const search =document.querySelector('input');
const messageOne= document.querySelector('#message-1');

const messageTwo= document.querySelector('#message-2');
const conditionImg= document.querySelector('.condition');
const cityImg= document.querySelector('.cityPic');

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const city=search.value;
    

    messageOne.textContent='Loading...'
    messageTwo.textContent=' '
    conditionImg.src=''

    fetch(url+city).then(( response)=>{
    response.json().then((data)=>{
    if(data.error){
        messageOne.textContent= "Please enter a valid City"
        

    }else{
   
        messageOne.textContent = ('The temperature in '+ data.location.name +" in "+ data.location.country+' is');

       messageTwo.textContent = ( data.current.condition.text+' with '+ data.current.temp_c+' degress celsius');

        conditionImg.src= data.current.condition.icon;
        cityImg.src= "https://images.pexels.com/lib/api/barcelona.png" ;

    }
})
})
})