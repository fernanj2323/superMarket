const Item  = require ('../models/items')
const itemCTRL = {};

itemCTRL.getItems = async (req, res, next) => { 
 //console.log('getITems');
 await Item.find()
    .exec((err, data) =>{
        if (err){
            res.status(404).send({status: '404 Error'}); 
        } else { 
           res.status(200).send(data)
        }
    })
}

itemCTRL.getItemById = async (req, res, next) =>{
    let id = req.params.id;
   await Item.findById(id)
   .exec((err, data) =>{
       if (err){
           res.status(404).send({msg: "No existe el registro", status:404});
       }else{
           res.status(200).send(data);
       }
   })
}

itemCTRL.putItem  = async (req, res, next) =>{

  console.log('put item', req.body)
  
    let id = req.params.id; 
    await Item.findByIdAndUpdate(id, {$set: req.body}, {new: true})
    .exec((err, data) =>{
        if (err) {
            res.status(404).send({msg: 'Registro no existe', status:404});
        }else{ 
            res.status(200).send({msg: 'Updated'})
        }
    })
}




itemCTRL.postItem = async (req, res, next) => { 
     
    const item =  new Item( req.body);

    await item.save((err, data) => {
        if (err) {
            res.status(500).send({status: 'Server Error, 500'}); 
        }else {
            if (!data){
              res.status(404).send({msg: "Saving Error, 404 "})
            } else{ 
                //saved 
                res.status(200).send({msg: 'item saved successfully'})
            }
        }
    })
}

itemCTRL.deleteItem = async (req, res , next) =>{

    await Item.findByIdAndRemove(req.params.id);
    
    res.json({status: 'Deleted'});
}


module.exports = itemCTRL;