import mongoose from 'mongoose';

const MenuItemSchema = new mongoose.Schema({
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'restaurants',  
        required: true,
    },
    item_name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

const MenuItem = mongoose.model('menuitem', MenuItemSchema);

export default MenuItem;
