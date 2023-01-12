const{ ClientErrors } = require('../utils/error-code');
const validateCreateFlight = (req,res,next) => {
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price 
    ) {
        return res.status(ClientErrors.BAD_REQUEST).json({
            data: {},
            success: false,
            message: "Invalid request body for flight   ",
            error: "Missing mendatory propertiesto create a flight",
        })
    }
    next();
}

module.exports = {
    validateCreateFlight,
}