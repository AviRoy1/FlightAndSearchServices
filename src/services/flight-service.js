const { FlightRepository,AirplaneRepository } = require('../repository/index');
const { compareTime } = require('../utils/helper');

class FlightService {

    constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }


    async createFlight(data) {
        try {
            if(compareTime(data.arrivalTime , data.departureTime)) {
                throw {error: 'Arrival time cannot be less than departure time'};
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const filght = await this.flightRepository.createFlight({
                ...data, totalSeats: airplane.capacity
            });
            return filght;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getFlightData(){

    }
}

module.exports = FlightService;