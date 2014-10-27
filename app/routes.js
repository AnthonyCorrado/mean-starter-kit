// grab the patron model
var Patron = require('./models/patron');

	module.exports = function(app) {

		// ================= server routes would go here =============
		// handle things like api calls
		// authentication routes

		// sample api route
		app.get('/api/patrons', function(req, res) {
			// use mongoose to find all patrons
			Patron.find(function(err, patrons) {
				if(err)
					res.send(err);

				res.json(patrons); // returns all patrons in JSON
			});
		});

		// other CRUD routes could go here. Ex: (app.post) and (app.delete)

		// =================== frontend routes go here ================

		app.get('*', function(req, res) {
			res.sendfile('./public/views/index.html');
		});

	};