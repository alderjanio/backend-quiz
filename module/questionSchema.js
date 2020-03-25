const mongoose = require ('mongoose');
const questionSchema = mongoose.Schema({
    asks:{
        type: String,
        require:true},
    opa:{type:String,
        require:true},
    opb:{type:String,
        require:true},
    opc:{type:String,
        require:true},
    opd:{type:String,
        require:true},
    ope:{type:String,
        require:true},        
    correct:{type:String,
        require:true},
})
module.exports = mongoose.model('questions',questionSchema);