const OTPSModel = require("../../models/Users/OTPSModel");

const SendEmailUtility = require ('../../utility/SendEmailUtility.js');

const UserVerifyEmailService = async (Request, DataModel) => {
        let email = Request.params.email;
        let OTPCode = Math.floor(100000 + Math.random() * 900000);
       try{
            //Data Process
            let UserCount = await DataModel.aggregate([{$match:{email:email}}, {$count: "total"}]);

            if(UserCount.length > 0){
                await OTPSModel.create({email:email, otp:OTPCode});
                let sendEmail = await SendEmailUtility(email,"Your PIN Code is= "+OTPCode,"Inventory PIN Verification");

                return {status:'success', data:sendEmail};

            }else{
                return {status:'fail', data:'No User found'};
            }

        }catch(error){
            return {status:'fail', data: error.toString()}
        }
}   

module.exports = UserVerifyEmailService;