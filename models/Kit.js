const mongoose = require(`mongoose`),
      Schema   = mongoose.Schema,

kitSchema = new Schema({
  userId: {
    type:      Schema.Types.ObjectId,
    ref:       `User`,
    required:  [true, `Owner is required`]
  },
  name: {
    type: String,
    default: 'Home'
  }
},{
  timestamps: {
    createdAt: `created_at`,
    updatedAt: `updated_at`
  }
});

module.exports = mongoose.model(`Kit`, kitSchema);