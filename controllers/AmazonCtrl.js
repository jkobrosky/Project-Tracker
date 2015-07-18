var AWS = require('aws-sdk');
var exports = module.exports = {};

exports.uploadToS3 = function(req, res) {
	// console.log('req.body in AmazonCtrl ', req.body);

	AWS.config.loadFromPath('./config/aws-config.json');
	var s3 = new AWS.S3({ params: { Bucket: 'jadesphere' }});

	var file = req.body.location;
	var fileName = req.body.name;

	var b64string = file;
	var buf = new Buffer(b64string, 'base64');

	console.log('buf ', buf);

	uploadToS3(buf, function(err, data) {
		if(err) return res.status(500).json(err);

		console.log('data after upload ', data);
	});

	function uploadToS3(file, callback) {
		if(!file) {
			return res.status(403).send('Please select a file');
		};

		s3
			.upload({ 
				ACL: 'public-read',
				Body: buf,
				Key: fileName,
				ContentType: 'file.mimetype'
		}, function(err, data) {
			if (err) console.log('there was an error uploading file');
			console.log('Successfully uploaded file', data);
			return res.json(data);
		})
	}
}