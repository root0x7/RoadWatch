const { Charsets } = require('../models')


class charsetscontroller{
	async index(req,res){
		try{
			res.json(await Charsets.findAll({
				attributes:['id','name','photo'],
				where:{
					status:'active'
				}
			}))
		}catch(error){
			res.status(500).json({
				message:'error'
			})		
		}
	}
	async create(req,res){
		try{
			Charsets.create({

			});
		}
		catch(error){

		}
	}
}



module.exports = new charsetscontroller()