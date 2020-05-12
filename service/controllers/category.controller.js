const Category = require('../models/category')
const categoryCTRL = {};


categoryCTRL.getCategories = async (req, res, next) => {
    await Category.find()
    .exec((err, data) =>{
        if (err){
            res.status(404).send({status: '404 Error'});
        } else {
            res.status(200).send(data)
        }
    })
}

categoryCTRL.postCategory = async (req, res, next) =>{
    const categoy = new Category (req.body); 

    await categoy.save((err, data) =>{
        if (err){
            res.status(500).send({status: 'Server Error, 500'}); 
        }else{ 
            if (!data){
                res.status(404).send({msg: "Saving Error, 404 "})
            }else{
                //saved 
                res.status(200).send({msg: 'category saved successfully'})
            }
        }
    })
}


categoryCTRL.putCategory = async (req, res,  next) =>{
    let id = req.params.id; 
    await Category.findByIdAndUpdate(id, {$set: req.body} , {new: true})
    .exec((err, data) =>{
        if(err){
            res.status(404).send({msg: 'Registro no existe' , status:404})
        }else{ 
            res.status(200).send({msg: 'updated'});
        }
    })
}

categoryCTRL.deleteCategory = async (req, res, next)  =>{
await Category.findByIdAndDelete(req.params.id);
res.json({status: 'Deleted'});

}

module.exports = categoryCTRL; 