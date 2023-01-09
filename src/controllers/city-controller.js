const { CityService } = require('../services/index');

const cityService = new CityService();

const create = async (req,res) => {
    try {
        const city = await cityService.createCity(req.body);
        return req.status(201).json({
            data: city,
            success: true,
            message: 'Successfully create a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message: "Not able to create a city",
            err: error
        });
    }
}

const destroy = async (req,res) => {
    try {
        const reaponse = await cityService.deleteCity(req.params.id);
        return req.status(200).json({
            data: reaponse,
            success: true,
            message: 'Successfully delete the city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message: "Not able to delete the city",
            err: error
        });
    }
}

const get = async (req,res) => {
    try {
        const city = await cityService.getCity(req.params.id);
        return req.status(200).json({
            data: city,
            success: true,
            message: 'Successfully fetched the city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message: "Not able to get the city",
            err: error
        });
    }
}

const update = async (req,res) => {
    try {
        const city = await cityService.updateCity(req.params.id,req.body);
        return req.status(200).json({
            data: city,
            success: true,
            message: 'Successfully updated the city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message: "Not able to update the city",
            err: error
        });
    }
}

module.exports = {
    create,
    destroy,
    get,
    update,
}