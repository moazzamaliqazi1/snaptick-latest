const usersService = new services.UsersService(models.Users);
exports.list = {
    getProfile: async(req, res, next)=>{
        try {
            utils.response.response(res, messages.success, true, 200, req.user);
        } catch (error) {
            console.log(error)
            next(error)
        }
    },
    getSingleUserDetails: async (req, res, next) => {
        try {
            const { _id } = req.params
            const user = await usersService.getUserById(_id)
            utils.response.response(res, messages.success, true, 200, user);
        } catch (error) {
            console.log(error)
            next(error)
        }
    }
}
