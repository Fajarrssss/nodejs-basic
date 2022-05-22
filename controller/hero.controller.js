const express = require("express")
const router = express.Router()
const Hero = require("../model/Hero.model")

//get all hero list
router.get('/', (request, response) => {
    Hero.getHero(response);
})

router.get('/create/', (request, response) => {
    response.render('heroDetail', { hero: null })
    response.end()
})

//get hero by id
router.get('/update/:id', (request, response) => {
    const id = request.params.id
    Hero.getHeroById(id, response)
})

//update or edit hero
router.post('/update', (request, response) => {
    const data = {
        "id": request.body.id,
        "name": request.body.name,
        "role": request.body.role,
        "skills": request.body.skills
    }
    Hero.updateHeroById(data, response)
})

router.post('/add', (request, response) => {
    const data = {
        "name": request.body.name,
        "role": request.body.role,
        "skills": request.body.skills
    }
    Hero.addHero(data, response)
})

router.post('/remove', (request, response) => {
    const id = request.body.id
    Hero.removeHero(id, response)
})

module.exports = router