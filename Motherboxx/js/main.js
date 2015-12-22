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
		$("#forgotPasswordLink").on("touchend", function () { alert("message"); });

	}

};

app.initialize();