const app = require('./app')
const cors = require('cors');


app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;
// tour get 
app.get('/', (req, res)=>{
    res.send('Route is working! Yay!')
});

app.listen(port, ()=>{
    console.log('port is', port);
})