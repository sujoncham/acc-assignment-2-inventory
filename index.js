const app = require('./app')


// tour get 
app.get('/', (req, res, next)=>{
    res.send('Route is working! Yay!')
});

