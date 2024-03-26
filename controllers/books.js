const router = require('express').Router()

//Get Home
router.get('/', (req, res) => {
    res.render('books/home')
})