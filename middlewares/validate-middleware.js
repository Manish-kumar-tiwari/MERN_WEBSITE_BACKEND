

const validate=(schema)=>async (req,res,next)=>{
  try {
         const parseBody= await schema.parseAsync(req.body);
         req.body=parseBody;
         next();
  } catch (err) {
        const message=err.errors[0].message;
        const status=400;
        const extraDetle="Error cought";
        next({message});
  }
}

module.exports=validate;
