// grabs the mongoose module
var mongoose = require('mongoose');

// defines model.
// module.exports allows this to pass to other files when it's called
module.exports = mongoose.model('Patron', {
	name: {type: String, default: ''}
});