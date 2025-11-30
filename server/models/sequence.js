const mongoose = require('mongoose');

const sequenceSchema = mongoose.Schema({
   id: { type: String, required: true },
   sequence_value: { type: Number, required: true }
});

module.exports = mongoose.model('Sequence', sequenceSchema);

