const  mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    UserEmail:{type:String},
    Name:{type:String, unique:true},
    CreateDate:{type:Date, default:Date.now()}
},
  {versionKey:false}
); 

const BrandsModel = mongoose.model('brands', DataSchema);

module.exports = BrandsModel;