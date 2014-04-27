#docker run -v /tmp:/root dsgrid/phantomjs-node phantomjs --ignore-ssl-errors=true /root/test_2.js
#http://techslides.com/grabbing-html-source-code-with-phantomjs-or-casperjs/

var page = require('webpage').create();

page.settings.userName = '%user%';
page.settings.password = '%passwd%';

var url = '%url%';

page.open(url, function (status) {
	var js = page.evaluate(function () {
		return document;
	});
	console.log(JSON.stringify(js));
	phantom.exit();
});
