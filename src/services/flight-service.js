const { FlightRepository,AirplaneRepository } = require('../repository/index');
const { compareTime } = require('../utils/helper');

class FlightService {

    constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }


    async createFlight(data) {
        try {
            // if(!compareTime(data.arrivalTime , data.departureTime)) {
            //     throw {error: 'Arrival time cannot be less than departure time'};
            // }
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

    async getAllFlights(data){
        try {
            const flight = await this.flightRepository.getAllFlight(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getFlights(flightId) {
        try {
            const flight = await this.flightRepository.getFlight(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async updateFlight(flightId,data) {
        try {
            const response = await this.flightRepository.updateFlights(flightId,data);
            return response;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

}

module.exports = FlightService;