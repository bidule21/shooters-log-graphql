'use strict';
import mongoose from 'mongoose';

const barrelSchema = mongoose.Schema({
  rifleId:            {type: mongoose.Schema.ObjectId},
  barrelBrand:        {type: String},
  barrelType:         {type: String},
  barrelTwist:        {type: String},
  barrelLength:       {type: Number},
  barrelChambered:    {type: Number},
  barrelLife:         {type: Number},
  currentRoundCount:  {type: Number},
  roundOAL:           {type: Number},
  primerBrand:        {type: String},
  primerName:         {type: String},
  muzzleVelocity:     {type: Number}
});

export default mongoose.model('barrel', barrelSchema);