const express = require('express');
const app = express();
var users = [{
    name : 'john',
    kidneys : [{
        healthy : false
    }]
}]
const bodyparser = require('body-parser')
app.use(bodyparser.json()) 
app.use(express.json());
app.get('/',function(req,res){
    const Johnkidneys = users[0].kidneys;
    const numberOfkidneys = users[0].kidneys.length;
    let numberofhealthykidneys = 0
    for (let i = 0; i < Johnkidneys.length; i++) {
        if (Johnkidneys[i].healthy){
            numberofhealthykidneys = numberofhealthykidneys+1;
        }
    }
    const numberofunhealthykidneys = numberOfkidneys - numberofhealthykidneys;
    res.json({
        numberOfkidneys,
        numberofhealthykidneys,
        numberofunhealthykidneys
    })
})
app.post('/',function(req,res){
    const ishealthy = req.body.ishealthy;
    users[0].kidneys.push({
        healthy : ishealthy
    })
    res.json({
        msg:'Done!'
    })

})
app.put('/',function(req,res){
    for (let i = 0; i < users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true
    }
    res.json({})
})

app.listen(3000)