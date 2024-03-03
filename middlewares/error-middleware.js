
 const errorMiddleware=(err,req,res,next)=>{
    const status=err.status || 500;
    const msg= err.message || "Backend error";
    const extraDetle=err.extraDetle || "Error in backend";

    return res.status(status).json({msg,extraDetle});
 };

module.exports=errorMiddleware;