import mongoose from "mongoose";

const Schema = mongoose.Schema;

const notifSchema = Schema({
  by: { type: Schema.Types.ObjectId, ref: "artist" },
  to: { type: Schema.Types.ObjectId, ref: "artist" },
  notificationType: {
    type: String,
    enum: ["like", "comment"],
  },
  createdAt: { type: Date, default: Date.now },
  read: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("notification", notifSchema);
