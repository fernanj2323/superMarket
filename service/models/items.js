const mongoose = require('mongoose');
const { Schema } = mongoose;


const schema = new Schema ({

    title :{ type: String},
    description :{ type: String},
    imagePath: String,
    categoryId :{ type: String},

}); 


module.exports = mongoose.model('Item', schema);