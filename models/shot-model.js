'use strict';
import mongoose from 'mongoose';

const shotSchema = module.exports = mongoose.Schema({
  xValue: {type: Boolean, required: true},
  score: {type: String, required: true},
  dateOf: {type: String},
  shotNumber: {type: Number},
  polarCoords: {type: Array},
  cartesianCoords: {type: Array},
  elevation: {type: Number},
  windage: {type: Number},
  practice: {type: Boolean},
  sighter: {type: Boolean},
  record: {type: Boolean}
});

export default mongoose.model('shot', shotSchema);