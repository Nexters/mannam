'use strict';

import mongoose from 'mongoose';

var categorySchema = new mongoose.Schema({

  categoryName : String,
  categoryTeam : String,
  categoryJob : String

});

export default mongoose.model("Category", categorySchema);
