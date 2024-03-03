const mongoose =require("mongoose");


const contectSchema= new mongoose.Schema({
        username:{
                type:String,
                require:true
        },

        email:{
                type:String,
                require:true
        },

        message:{
                type:String,
                require:true
        }
});

const contect= new mongoose.model("contect",contectSchema);

module.exports=contect;