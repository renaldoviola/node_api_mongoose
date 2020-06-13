const mogoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');


const ProductSchema = new mogoose.Schema({

    title:{
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
});

ProductSchema.plugin(mongoosePaginate);
mogoose.model('Product', ProductSchema);