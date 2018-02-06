'use strict';
import mongoose from 'mongoose';

const loadSchema = mongoose.Schema({
  brassBrand:         {type: String},
  brassCaliber:       {type: Number},
  powderBrand:        {type: String},
  powderName:         {type: String},
  powderWeight:       {type: Number},
  bulletBrand:        {type: String},
  bulletCaliber:      {type: Number},
  bulletWeight:       {type: Number},
  roundOAL:           {type: Number},
  primerBrand:        {type: String},
  primerName:         {type: String},
  muzzleVelocity:     {type: Number}
});

export default mongoose.model('load', loadSchema);