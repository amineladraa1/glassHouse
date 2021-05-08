import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const commentSchema = Schema({
  by: { type: Schema.Types.ObjectId, ref: 'Artist' },
  body: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Comment', commentSchema);
