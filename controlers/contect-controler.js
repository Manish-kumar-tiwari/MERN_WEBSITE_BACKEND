const Contect= require("../models/contect-model");

const contectForm=async (req,res)=>{
        try {
                const response=req.body;
                await Contect.create(response);
                return res.json({message:"Message post successfully"});
                
        } catch (error) {
                return res.json({message:"Message post failed"});
        }
};

module.exports=contectForm;