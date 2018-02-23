'use strict';
import mongoose from 'mongoose';

const barrelSchema = mongoose.Schema({
  userId:             {type: mongoose.Schema.ObjectId},
  barrelName:         {type: String},
  barrelBrand:        {type: String},
  barrelType:         {type: String},
  barrelTwist:        {type: String},
  barrelLength:       {type: Number},
  barrelChambered:    {type: Number},
  barrelLife:         {type: Number},
  currentRoundCount:  {type: Number},
});

export default mongoose.model('barrel', barrelSchema);