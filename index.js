const axios  = require('axios');
const { json } = require('express');
const express = require('express')
const PORT = 8000
const app = express()

// FIRST QUESTION 
//Base currency used is TZS 
app.get('/rates',(req,res)=>{

axios.get("https://v6.exchangerate-api.com/v6/3778037bf323be1d6beb4085/latest/TZS").then(
    response=>{

        const rates = [];
         rates.push(response.data["conversion_rates"]);
rates.forEach(rate=>{
res.json(rate)
})
    }
)

})

//converting from USD TO TZS  supplying the amount 


app.get('/convert',(req,res)=>{

axios.get("https://v6.exchangerate-api.com/v6/3778037bf323be1d6beb4085/pair/USD/TZS/20").then(response=>{

res.json(response.data)



})




})



//SECOND QUESTION 

app.get("/weather",(req,res)=>{
    axios.get("http://api.openweathermap.org/data/2.5/weather?q=Dar-es-salaam&appid=b722db0c0986cb21e1ed8c98ec616cdd").then(
        response=>{
         const current_temp = response.data["main"]["temp"]
        const  lowest_temp =  response.data["main"]["temp_min"];
        const highest_temp =  response.data["main"]["temp_max"];
        const humidity =  response.data["main"]["humidity"];
        const windspeed=  response.data["wind"]["speed"];
        const country=  response.data["sys"]["country"];
        const city=  response.data["name"];
  const weather_data= [];
     weather_data.push({
        country:country,
        city:city,
        current_temp:current_temp,
        lowest_temp:lowest_temp,
        highest_temp:highest_temp,
        humidity:humidity,
        windspeed:windspeed
     })

res.json(weather_data);
        }
    )
})


app.listen(PORT, ()=>console.log(`server running on ${PORT} `))











