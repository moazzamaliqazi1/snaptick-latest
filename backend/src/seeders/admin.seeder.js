const adminSeeders = async () => {
    try {
        const user = await models.Users.findOne({ user_type: 'admin' })
        if (!user) {
            const bcryptPassword = await bcrypt.hash('Admin123%', 10);
            const code = await randomString.generate({
                length: 6,
                charset: "numeric",
            });
            let newUser = new models.Users({
                user_name: 'admin99',
                email: 'admin99@gmail.com',
                password: bcryptPassword,
                verification_code: code,
                expire_date: moment(Date.now()).add(5, "m").toDate(),
                email_verify: true,
                user_type: 'admin'
            });
            newUser = await newUser.save()
            // create stripe id for new user
            const customer = await stripe.customers.create({
                description: `user stripe id created on ${new Date}`,
                metadata: {
                    "database_id": newUser._id
                },
                name: newUser.user_name
            })
            await models.Users.updateOne({_id: newUser._id}, {$set: {
                stripe_customer_id: customer.id
            }})
        }
    } catch (error) {
        console.log(error)
    }
}
adminSeeders()