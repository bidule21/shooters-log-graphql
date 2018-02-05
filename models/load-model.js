'use strict';
import mongoose from 'mongoose';

const loadSchema = mongoose.Schema({
  brassBrand:         {type: String},
  brassCaliber:       {type: String},
  powderBrand:        {type: String},
  powderName:         {type: String},
  powderWeight:       {type: Number},
  bulletBrand:        {type: String},
  bulletWeight:       {type: Number},
  bulletCaliber:      {type: Number},
  roundOAL:           {type: Number},
  primerBrand:        {type: String},
  primerName:         {type: String},
  muzzleVelocity:     {type: Number}
});

export default mongoose.model('load', loadSchema);