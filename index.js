
const app = require('./app')


// tour get 
app.get('/', (req, res)=>{
    res.send('Route is working! Yay!')
});

