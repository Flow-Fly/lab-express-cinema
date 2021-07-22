const express = require('express')
const router = express.Router()
const Movie = require('../models/Movie.model')

router.get('/movies', (req, res, next) => {

    Movie.find().then(movieDocument => {
        console.log(movieDocument)
        res.render('movies.hbs', {
            movie: movieDocument
        })

    }).catch(e => console.log(e))
})

router.get('/movie/:id', (req,res,next) => {
    Movie.findById(req.params.id)
        .then(movieDocument => {
            res.render('details.hbs', {
                movie: movieDocument
            })
    })
        .catch(e => console.log(e))
})



module.exports = router;