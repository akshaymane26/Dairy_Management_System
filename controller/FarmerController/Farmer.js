const { get } = require('mongoose');
const Farmer = require('../../models/Farmer');

const addFarmer =async (req, res ) => {
    try {

        const { customerNumber, name, mobile, address } = req.body;
        // Validate required fields
        if (!customerNumber || !name) {
            return res.status(400).json({ message: 'Customer number and name are required' });
        }
        // Check if the farmer already exists
        const existingFarmer = await Farmer.findOne({ customerNumber });
        if (existingFarmer ) {
            return res.status(400).json({ message: 'famer with this customer number already exists' });
        }
        // create a new farmer
        const newFarmer = new Farmer({
            customerNumber, 
            name, 
            mobile,
            address
        });

        // Save the farmer to the database
        await newFarmer.save();
        res.status(201).json({
            message: 'Farmer created successfully', farmer: newFarmer 
        });

    } catch (error) {
        console.error('Error in FarmerController:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const getAllFarmers = async (req, res) => {
    try{
        const farmers = await Farmer.find();
        if (farmers.length === 0) {
            return res.status(404).json({ message: 'No farmers found' });
        }
        res.status(200).json(farmers);


    }catch (error) {
        console.error('Error in getAllFarmers:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
const getFarmerByID = async (req, res) => {
    try{
        const farmerId = req.params.id;
        if(!farmerId){
            return res.status(400).json({ message: 'Farmer ID is required' });
        }
        const farmer = await Farmer.findById(farmerId);
        if (!farmer) {
            return res.status(404).json({ message: 'Farmer not found' });
        }
        res.status(200).json(farmer);
    } catch (error) {
        console.error('Error in getFarmerByID:', error);
        res.status(500).json({ message: 'Internal server error' });

    }
}

const updateFarmer = async (req, res) => {
    try {
        // console.log("=====im comming");
            const farmerId = req.params.id;
        // console.log("=====im comming", req);
        
        const { customerNumber, name, mobile, address } = req.body;
        if (!farmerId) {
            return res.status(400).json({ message: 'Farmer ID is required' });
        }
        console.log(req.body);
        
        const updatedFarmer = await Farmer.findByIdAndUpdate(
            farmerId, 
            { customerNumber, name, mobile, address },
            { new: true, runValidators: true }
        );
        if (!updatedFarmer) {
            return res.status(404).json({ message: 'Farmer not found' });
        }
        res.status(200).json({ message: 'Farmer updated successfully', farmer: updatedFarmer });
    }
    catch (error) {
        console.error('Error in updateFarmer:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
const deleteFarmer = async (req, res) => {
    try {
        const farmerId = req.params.id;
        if (!farmerId) {
            return res.status(400).json({ message: 'Farmer ID is required' });
        }
        const deletedFarmer = await Farmer.findByIdAndDelete(farmerId);
        if (!deletedFarmer) {
            return res.status(404).json({ message: 'Farmer not found' });
        }
        res.status(200).json({ message: 'Farmer deleted successfully' });
    } catch (error) {
        console.error('Error in deleteFarmer:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const getFarmerByCustomerNumber = async (req, res) => {
    try {
        const { customerNumber } = req.params;
        if (!customerNumber) {
            return res.status(400).json({ message: 'Customer number is required' });
        }
        const farmer = await Farmer.findOne({ customerNumber });
        if(!farmer){
            return res.status(404).json({ message: 'Farmer not found' });
        
        }
        res.status(200).json(farmer);
    } catch (error) {
        console.error('Error in getFarmerByCustomerNumber:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}



module.exports = {
    addFarmer,
    getAllFarmers,
    getFarmerByID,
    updateFarmer,
    deleteFarmer,
    getFarmerByCustomerNumber
}