const DataModel = require('../../models/Users/UsersModel');
const OTPSModel = require('../../models/Users/OTPSModel');

const {UserCreateServices} = require('../../services/user/UserCreateService');
const {UserDetailService} = require('../../services/user/UserDetailsService');
const {UserLoginService} = require('../../services/user/UserLoginService');
const {UserResetPassService} = require('../../services/user/UserResetPassService');
const {UserUpdateService} = require('../../services/user/UserUpdateService');
const {UserVerifyEmailService} = require('../../services/user/UserVerifyEmailService');
const {UserVerifyOtpService} = require('../../services/user/UserVerifyEmailService');

exports.Registration = (req,res) => {
        let Result = UserCreateServices(req,DataModel);
        res.status(200).json(Result);
};

exports.Login = (req,res) => {
        let Result = UserLoginService(req,DataModel);
        res.status(200).json(Result);
}
exports.ProfileUpdate = (req,res) => {
        let Result = UserUpdateService(req,DataModel);
        res.status(200).json(Result);
}
exports.ProfileDetails = () => {
       let Result = UserDetailService(req,DataModel);
       res.status(200).json(Result);
}
exports.RecoverVerifyEmail = (req,res) => {
       let Result = UserVerifyEmailService(req,DataModel);
       res.status(200).json(Result);
}
exports.VerifyOTPCode = (req,res) => {
       let Result = UserVerifyOtpService(req,OTPSModel);
       res.status(200).json(Result);
}

exports.ResetPassword = (req,res) => {
       let Result = UserResetPassService(req,DataModel);
       res.status(200).json(Result);
}