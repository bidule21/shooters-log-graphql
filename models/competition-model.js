'use strict';

import mongoose from 'mongoose';

const competitionSchema = mongoose.Schema({
  location: {type: String, required: true},
  action: {type: String, required: true},
  caliber: {type: Number, required:true},
  dateOf: {type: String}
});

export default mongoose.model('competition', competitionSchema);