import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema({
  "name": { 
    type: String,
    required: true
  },
  "description": { 
    type: String,
    required: true
  },
  "image": {
    "_id": {
      type: String,
      required: true
    },
    "URL": {
      type: String,
      required: true
    },
  },
  "temperature": {
    type: String, 
    enum: ["hot", "warm", "temperate", "cool", "cold"], 
    required: true
  },
  "flightDuration": {
    type: String, 
    enum: ["short-haul", "medium-haul", "long-haul"], 
    required: true
  },
  "journeyType": {
    type: String, 
    enum: ["adventurous", "relaxing", "cultural", "nature-exploration", "romantic"], 
    required: true
  },
  "category": {
    type: String,
    enum: ["featured", "normal"],
    default: "normal" },
}, {
  timestamps: true
});

const DestinationModel = mongoose.model("destination", destinationSchema);

export default DestinationModel;
