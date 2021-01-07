const mongoose = require('mongoose');
  const { Schema } = mongoose;

  const logEntrySchema = new Schema({
    title:  {
        type: String,
        required: true,
    }, // String is shorthand for {type: String}
    description: String,
    comments:   String,
    image: String,
    rating : {
        type:Number,
        min: 0,
        max: 10,
        default: 0,
    },
    latitude:{
        type: Number,
        required: true,
        min: -90,
        max: 90,
    },
    longitude:{
        type: Number,
        required: true,
        min: -180, 
        max: 180,
    },
    visitDate:{
        required: true,
        type:Date,
    },
},{
    timestamps: true,
}
  );

const LogEntry = mongoose.model('LogEntry', logEntrySchema);
module.exports = LogEntry;