 
const { FlightsData } = require('../models/index');
const { Op } = require('sequelize');

class FlightRepository {

    #createFilter(data) {
        let filter = {};
        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId) {
            filter.departureAirportId =  data.departureAirportId;
        }
        let flag = false;
        if(data.minPrice && data.maxPrice) {
            Object.assign(filter, {price: {[Op.between]: [data.minPrice,data.maxPrice]}});
            flag = !flag;
        }
        if(flag) return filter;
        if(data.minPrice) {
            Object.assign(filter,{price: {[Op.gte]: data.minPrice}});
        }
        if(data.maxPrice) {
            Object.assign(filter,{price: {[Op.lte]: data.maxPrice}});
        }
        console.log(filter);
        return filter;

    }

    async createFlight(data) {
        try {
            const flight = await FlightsData.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getFlight(flightId) { 
        try {
            const flight = await FlightsData.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getAllFlight(filter) {
        try {

            const filterObject = this.#createFilter(filter);
            const flight = await FlightsData.findAll({
                where: filterObject,
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async updateFlights(flightId,data) {
        try {
            await FlightsData.update(data,{
                where: {
                    id: flightId,
                }
            })
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

}

module.exports = FlightRepository;