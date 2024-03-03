const {z} =require("zod");

const loginSchema=z.object({
        email: z
        .string({required_error:"email is required"})
        .trim()
        .email({message:"Invalid email address"}),

        password: z
        .string({required_error:"password is required"})
        .trim()
        .min(6,{message:"password is at least 6 character"})
        .max(1024,{message:"pasword is not more than 1024 character"})
})


const signupSchema=loginSchema.extend({
        username: z
        .string({required_error:"Name is required"})
        .trim()
        .min(3,{message:"username must be atleast 3 character"})
        .max(245,{message:"username not more than 245 character"}),

       
        phone: z
        .string({required_error:"Phone is required"})
        .trim()
        .min(10,{message:"number is at 10 character"})
        .max(20,{message:"number is at 10 character"}),

       
});


module.exports={signupSchema,loginSchema};