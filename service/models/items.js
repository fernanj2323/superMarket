const mongoose = require('mongoose');
const { Schema } = mongoose;


const schema = new Schema ({

    title :{ type: String},
    description :{ type: String},
    quantity : {type:Number}, 
    category :{ type: String},

}); 


module.exports = mongoose.model('Item', schema);