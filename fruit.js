const express = require("express")
const fruit = express.Router()
const uuid = require("uuid/v4")

const allThings = [
    {
        name: "banana",
        type: "food",
        price: 200,
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
    },{
        name: "soup",
        type: "food",
        price: 300,
    },{
        name: "flour",
        type: "food",
        price: 100,
    }
]

fruit.route("/")

.get((req, res) => {
    res.send(allThings)
})

fruit.route("/type")

.get((req, res) => {
    const thingType = req.query.type
    const filteredThing = allThings.filter(thing => thing.type === thingType)
    res.send(filteredThing)
})

fruit.route("/:name")

.get((req, res) =>{
    const name = req.params.name
    const foundName = allThings.find(item => item.name === name)
    res.send(foundName)
})

module.exports = fruit