import mongoose from 'mongoose'
const {Schema} = mongoose

const vehicleSchema = new Schema({
    name: {
        type: String
    },
    capacityKg: {
        type: Number
    },
    vehicleType: {
        type: Number
    },
    fuelType: {
        type: Number
    },
    fuelLiterCapacity: {
        type: Number
    }
})

// String, Number, Boolean