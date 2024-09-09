const mongoose = require('mongoose');
const Mess = new mongoose.model("Mess", {
    name: { type: String, required: true },
    mob: { type: String, required: true },
    address: { type: String, required: true },
    price: { type: Number },
    nonveg: { type: Boolean, default: false },
    menu: { type: Array, default: null },
});

export default Mess;