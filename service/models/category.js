const mongoose = require('mongoose');
const { Schema } = mongoose;


const schema = new Schema ({

    title :{ type: String},
    description :{ type: String},


}); 


module.exports = mongoose.model('Category', schema);