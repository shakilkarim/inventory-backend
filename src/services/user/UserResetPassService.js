const OTPSModel = require("../../models/Users/OTPSModel");

const UserResetPassService = async (Request,DataModel) =>{
        const {email,OTP,password} = Request.body;
        let statusUpdate = 1;
        try{
             // Database First Process
        let OTPUsedCount = await OTPSModel.aggregate([{$match: {email: email, otp: OTP, status: statusUpdate}}, {$count: "total"}])

        if (OTPUsedCount.length>0) {
            // Database Second Process
            let PassUpdate = await DataModel.updateOne({email: email},{password: password})
            return {status: "success", data: PassUpdate}
        }

        else {
            return {status: "fail", data: "Invalid Request"}
        }
    

        }catch(error){
            return {status:'fail', data:error.toString()};
        }
}
module.exports = UserResetPassService;