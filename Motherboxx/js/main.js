var app = {
	
	showAlert: function (message, title) {
		if (navigator.notification) {
			navigator.notification.alert(message, null, title, 'OK');
		} else {
			alert(title ? (title + ": " + message) : message);
		}
	},
	initialize: function(){
		var self = this;
		//showAlert('oh my', 'jargon')
	},
	helloworld: function(){
		$.ajax({
			url:'http://localhost:8080/helloworld',
			dataType: 'jsonp',
			success: function(result) {
			alert(result);
			}  // edited
		});
	}

};

app.initialize();