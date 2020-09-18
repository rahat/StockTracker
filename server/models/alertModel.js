var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var alertSchema = new Schema({
	'symbol': String,
	'price': Number,
	'operation': Number,
	'category': Number,
	'active': Boolean,
	'user': {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
},
	{
		timestamps: true
	});

module.exports = mongoose.model('Alert', alertSchema);
