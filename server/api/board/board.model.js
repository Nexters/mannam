'use strict';


import mongoose from 'mongoose';
mongoose.Promise = require('bluebird');
import {Schema} from 'mongoose';


var boardSchema = new mongoose.Schema({

  type : String,
  color : String,
  boardID : String,
  writeUser : String,
  categoryList : String,

  boardLocation : String,
  boardTitle : String,
  boardContent : String,

  boardMeetingTime : String,

  boardIsFavorite : [],


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
