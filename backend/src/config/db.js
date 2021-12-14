const mongoose = require("mongoose");

const connect = () => {
    mongoose.connect("mongodb+srv://cuddly:cuddly-engine@cluster0.redqo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
        useCreateIndex= true,
        useNewUrlParser= true,
        useUnifiedTopology= true,
        useFindAndModify = true
    })
}

module.exports = connect;