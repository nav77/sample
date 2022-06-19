const mongoose = require('mongoose')
var url1 = "mongodb+srv://navya77:navya77@cluster0.0r6qq.mongodb.net/?retryWrites=true&w=majority";

module.exports = {
    databaseConnect: async(callback) => {
        await mongoose.connect(url1, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
            .then((data) => {
                console.log(data)
                callback('_', data)
            })
            .catch((err) => {
                console.log(err)
                callback(err, '_')
            })
    }
}





