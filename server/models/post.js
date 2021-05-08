import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const postSchema = new Schema({
  createdBy: { type: Schema.Types.ObjectId, ref: 'Artist' },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // image: String,
  description: String,
  likes: [{ likedBy: { type: Schema.Types.ObjectId, ref: 'Artist' } }],
  comments: [
    {
      by: { type: Schema.Types.ObjectId, ref: 'Artist' },
      body: String,
      createdAt: { type: Date, default: Date.now },
    },
  ],
});

export default mongoose.model('post', postSchema);
