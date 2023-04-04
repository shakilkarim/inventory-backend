const CreateService = async(Request,DataModel) => {
    try{
        const PostBody = Request.body;
        PostBody.UserEmail=Request.headers['email'];

        let Data = await DataModel.create(PostBody);
        return {status:'success', data:Data};
    }catch(error){
        return {status:'fail', data:error}
    }
}

module.exports = CreateService;