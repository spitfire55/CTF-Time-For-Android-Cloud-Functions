const functions = require('firebase-functions');
const request = require('request');
const cors = require('cors')({origin: true});

exports.rankings = functions.https.onRequest((req, res) => {
	//cors(req, res, () => {
	const year = req.query.year;
	const pageNumber = req.query.pageNumber;
	if (!year || !pageNumber) {
		res.status(400).send("Invalid year and/or pageNumber")
		res.end()
		return
	}
	const url = "https://ctftime.org/stats/"+year+"?page="+pageNumber
	return request(url, function(error, response, body) {
		res.send(body)
	})
	//})
});
