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

module.exports = {
    addFarmer,

}