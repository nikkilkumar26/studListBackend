const mongoose = require('mongoose')

const StudSchema  = new mongoose.Schema({
    Name:{
        type: String,
        required:true,
    },
    Age:{
        type: Number,
        required : true,

    }
})

const Stud = mongoose.model("Stud",StudSchema);
module.exports = Stud;