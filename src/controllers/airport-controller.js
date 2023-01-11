const { AirportService } = require('../services/index');

const airportService = new AirportService();

const create = async (req,res) => {
    try {
        const response = await airportService.create(req.body);
        return res.status(201).json({
            body: response,
            success: true,
            message: "successfully create the airport",
            err: {},
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "cannot create an airport",
            success: false,
            body: {},
            err: error,
        })
    }
}


module.exports = {
    create,
}