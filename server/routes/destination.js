import express from "express";
import verifyToken from "../middleware/verifyToken.js";

import { uploader } from "../config/cloudinaryConfig.js";
import { multerUploads, dataUri } from "../middleware/multerUpload.js";

import DestinationModel from "../model/destination.model.js";

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const destinations = await DestinationModel.find({ category: "normal" });
    res.status(200).json(destinations);
  } catch (error) {
    console.log('Error while fetching destinations.', error);
    res.status(500).json({ message: 'Internal server error.' });
  };
});

router.get('/featured', async (req, res) => {
  try {
    const destinations = await DestinationModel.find({ category: "featured" });
    res.status(200).json(destinations);
  } catch (error) {
    console.log('Error while fetching destinations.', error);
    res.status(500).json({ message: 'Internal server error.' });
  };
});

router.get('/filter', async (req, res) => {
  try {
    const {
      temperature,
      flightDuration,
      journeyType
    } = req.query;
    const filters = {};

    if(temperature) filters.temperature = temperature;
    if(flightDuration) filters.flightDuration = flightDuration;
    if(journeyType) filters.journeyType = journeyType;

    const destinations = await DestinationModel.find(filters);
    
    if(destinations.length === 0) {
      return res.status(404).json({ message: 'No matching destinations found' });
    };

    res.status(200).json(destinations);
  } catch (error) {
    console.log('Error while fetching filtered destinations.', error);
    res.status(500).json({ message: 'Internal server error.' });
  };
});

router.post('/create', verifyToken, multerUploads, async (req, res) => {
  try {
    const {
      name,
      description,
      temperature,
      flightDuration,
      journeyType,
      category,
    } = req.body;
    
    if(!name || !description || !temperature || !flightDuration || !journeyType || !req.file) {
      return res.status(400).json({ message: "Please fill all the details." });
    };

    const file = dataUri(req).content;
    const cloudinaryResponse = await uploader.upload(file, {
      resource_type: 'image'
    });

    const image = {
      _id: cloudinaryResponse.public_id,
      URL: cloudinaryResponse.secure_url,
    };

    const destination = new DestinationModel({
      name,
      description,
      image,
      temperature,
      flightDuration,
      journeyType,
      category,
    });

    await destination.save();
    res.status(201).json(destination);
  } catch (error) {
    console.log('Error while creating a destination.', error);
    res.status(500).json({ message: 'Internal server error.' });
  };
});

router.put('/edit/:id', verifyToken, multerUploads, async (req, res) => {
  try {
    const destinationId = req.params.id;
    const {
      name,
      description,
      temperature,
      flightDuration,
      journeyType,
      category,
    } = req.body;

    const destination = await DestinationModel.findById(destinationId);
    
    if(!destination) {
      return res.status(404).json({ message: "No destination found to edit." });
    };

    if(req.file) {
      if (destination.image && destination.image._id) {
        await uploader.destroy(destination.image._id);
      };

      const file = dataUri(req).content;
      const cloudinaryResponse = await uploader.upload(file, {
        resource_type: 'image'
      });

      const image = {
        _id: cloudinaryResponse.public_id,
        URL: cloudinaryResponse.secure_url,
      };

      const updatedDestination = await DestinationModel.findByIdAndUpdate(
        destinationId, {
          name,
          description,
          image,
          temperature,
          flightDuration,
          journeyType,
          category
        },
        { new: true }
      );

      await updatedDestination.save();
      res.status(200).json({ 
        message: "Destination updated successfully.", 
        data: updatedDestination 
      });
    } else {
      const updatedDestination = await DestinationModel.findByIdAndUpdate(
        destinationId, {
          name,
          description,
          temperature,
          flightDuration,
          journeyType,
          category
        },
        { new: true }
      );

      await updatedDestination.save();
      res.status(200).json({ 
        message: "Destination updated successfully.", 
        data: updatedDestination 
      });
    };
  } catch (error) {
    console.log('Error while updating a destination.', error);
    res.status(500).json({ message: 'Internal server error.' });
  };
});

router.delete("/remove/:id", verifyToken, async (req, res) => {
  try {
    const destinationId = req.params.id;

    const destination = await DestinationModel.findById(destinationId);

    if(!destination) {
      return res.status(404).json({ message: "No destination found to delete." });
    };

    if(destination.image && destination.image._id) {
      await uploader.destroy(destination.image._id);
    };

    await DestinationModel.findByIdAndDelete(destinationId);
    res.status(200).json({ message: 'Destination removed successfully.' });
  } catch (error) {
    console.log('Error while removing a destination.', error);
    res.status(500).json({ message: 'Internal server error.' });
  };
});

export {
  router as destinationRoutes
};
