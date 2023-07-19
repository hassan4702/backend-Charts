const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  values: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("Task", taskSchema);
