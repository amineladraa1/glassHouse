import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const messageSchema = Schema({
  sentBy: { type: schema.Types.ObjectId, ref: 'artist' },
  to: { type: schema.Types.ObjectId, ref: 'artist' },
  body: { type: String, required: true },
  sentAt: { type: Date, default: Date.now },
  read: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model('Message', messageSchema);
