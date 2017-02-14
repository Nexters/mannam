'use strict';


import mongoose from 'mongoose';
mongoose.Promise = require('bluebird');
import {Schema} from 'mongoose';


var boardSchema = new mongoose.Schema({

  boardID : String,
  writeUser : String,
  categoryList : String,

  boardTitle : String,
  boardContent : String,

  boardCreateTime : {
    type : Date,
    default : Date.now
  },

  userReferenceList : []

});

boardSchema
  .pre('save', function(next) {
    this.boardID = "1";
    next();
  });


export default mongoose.model("Board", boardSchema);
