import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,

    },
    password: {
        type: String,
        required: true,
    },
    accountNumber: {
        type: String,
    },
});
export default mongoose?.models?.User || mongoose.model("User", UserSchema);