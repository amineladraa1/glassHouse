import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const artistSchema = Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  userName: String,
  bio: String,
  phoneNumber: Number,
  BirthDate: { type: Date, required: true },
  city: String,
  profilePic: String,
  messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
  notifications: [{ type: Schema.Types.ObjectId, ref: 'notification' }],
});

export default mongoose.model('Artist', artistSchema);
