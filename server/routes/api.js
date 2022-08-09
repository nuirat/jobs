const express = require('express')
const { type } = require('jquery')
const router = express.Router()
const Job = require('../models/Job')


router.get('/getCpmpanies', (req, res) => {
  
})

router.get('/get', (req, res) => {
    Item.find({}, function(err, data) {
        console.log(data)
        res.send(data)
    })
});

router.post('/save', (req, res) => {
    let data = req.body
    let newItem = new Item(data)
    newItem.save()
})
module.exports = router
