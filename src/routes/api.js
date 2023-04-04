const express =require('express');

const{Registration,Login,ProfileUpdate,ProfileDetails,RecoverVerifyEmail,VerifyOTPCode,ResetPassword} = require('../controllers/Users/UsersController');
const{CreateBrand,UpdateBrand,BrandList,BrandDropDown} = require('../controllers/Brands/BrandsController');


const AuthVerifyMiddleware = require('../../src/middlewares/AuthVerifyMiddleware');
const router = express.Router(); 

//User Profile
router.post('/registration', Registration);
router.post('/login', Login);
router.post('/profileUpdate', AuthVerifyMiddleware,ProfileUpdate);
router.get('/profileDetails', AuthVerifyMiddleware,ProfileDetails);
router.get('/recoverVerifyEmail/:email',RecoverVerifyEmail);
router.get('/recoverVerifyOTP/:otp', VerifyOTPCode);
router.post('/resetPassword', ResetPassword)

//Brand api
router.post('/createBrand',AuthVerifyMiddleware, CreateBrand);
router.post('/updateBrand/:id', AuthVerifyMiddleware, UpdateBrand);
router.get("/brandList/:pageNo/:perPage/:searchKeyword",AuthVerifyMiddleware,BrandList);
router.get("/brandDropDown",AuthVerifyMiddleware,BrandDropDown);


module.exports = router;