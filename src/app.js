const express = require('express');
const path= require('path');
const hbs = require('hbs');
const getWeather = require('./utils/getWeather')


const app = express()
const publicDirectoryPath = path.join(__dirname ,'../public');
const viewPath =path.join(__dirname,'../templates/views')
const partialsPath =path.join(__dirname,'../templates/partials')


app.set('view engine','hbs')
app.set('views', viewPath)
app.use(express.static(publicDirectoryPath))
hbs.registerPartials(partialsPath)


app.get('',(req, res)=>{
    res.render('index',{ 
        title:'Weather page',
        body:'This is the site to find the forecast of any city in the world, Type a city and find out',
        name: 'Menashe Malessa'

    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About page',
        body:'This is the site to find the the Condition weather and the temperature of any city in the world.',
        name: 'Menashe'

    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help page' ,
        body:'How to search: ',
        name: 'Menashe'
    })
})

app.get('/help/*',(req,res)=>{
res.render('404',{
    title:'Help page' ,
    body:'help article not found'})
})

app.get('/weather',(req,res) => {
    if(!req.query.city){
        return res.send({
            error:'you most provide a city'
        })
     }
     getWeather(req.query.city ,(error,weather)=>{
        if(error){
            return res.send('error')
        }

        res.send(weather)
    })  
})

app.get('*',(req,res)=>{
    res.render('404',{
        title:'404 Page' ,
        body:'you are LOST!!'})
 })


    app.listen(3000,()=>{
        console.log('server is up on port 3000.')
})


// app.get('/products', (req,res)=>{
//     if(!req.query.search){
//         return res.send({
//             eror:'you most provide a search term'
//         })
//     }
//     res.send({
//         products:[]
//     })
// })