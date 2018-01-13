var path = require('path');
const db = require('../models');


module.exports = app=>{
	app.get('/', (req, res)=>{
		db.Board.findAll().then(dbBoard => {
			let hbsObject = {
				boards: dbBoard
			}

			res.render('index', hbsObject);
            // res.json(dbBoard);
        });
	})
}