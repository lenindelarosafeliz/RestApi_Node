const movies = require('../db.json');
const _ = require('underscore');

const { Router } = require('express');
const router =   Router();

router.get('/', (req, res) => {
    res.json(movies);
});

router.post('/', (req, res) => { 
    const { nombre, director, clasificacion } = req.body; 
    if(nombre && director && clasificacion){
        const id = movies.length + 1;
        const newMovie = {...req.body, id};
        movies.push(newMovie);
        res.json(movies);
    }else{
        res.json({error: 'Wrong Request'});
    }
});

router.put('/:id', (req, res) => { 
    const { id }  = req.params;
    const { nombre, director, clasificacion } = req.body; 

    if(nombre && director && clasificacion){
        for(var i = 0; i < movies.length; i++){        
            if (movies[i].id == id) {
                movies[i].nombre = nombre;
                movies[i].director = director;
                movies[i].clasificacion = clasificacion;
            }
        }
    }
    res.send(movies);
});

router.delete('/:id', (req, res) => { 
    const { id }  = req.params;

    for(var i = 0; i < movies.length; i++){        
        if (movies[i].id == id) {
            movies.splice(i, 1);  
        }
    }
    res.send(movies);   
});



module.exports = router;