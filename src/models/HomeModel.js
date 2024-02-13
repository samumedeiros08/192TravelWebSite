const mongoose = require('mongoose');

const HomeSchema = mongoose.Schema ({
    title: { type: String, required: true },
    description: {type: String}
})

const HomeModel = mongoose.model('Home', HomeSchema);

module.exports = HomeModel;
