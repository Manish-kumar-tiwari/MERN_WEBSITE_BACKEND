

const adminMiddleware=async(req,res,next)=>{

        try {
        
                const admin=req.user.isAdmin;

                if(!admin){
                      return res.status(404).json({msg:"You are not admin"});  
                }

                next();
                
        } catch (error) {
                console.log(error);
        }

}

module.exports=adminMiddleware;