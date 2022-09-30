const app = require('./app')
app.use(express.json());
app.use(cors());

// tour get 
app.get('/', (req, res)=>{
    res.send('Route is working! Yay!')
});

app.listen(port, ()=>{
    console.log('port is', port);
})