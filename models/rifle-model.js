'use strict';
import mongoose from 'mongoose';

const rifleSchema = mongoose.Schema({
  rifleBrand:         {type: String},
  rifleModel:         {type: String},
  rifleAction:        {type: String},
  rifleCategory:      {type: String},
});

export default mongoose.model('rifle', rifleSchema);