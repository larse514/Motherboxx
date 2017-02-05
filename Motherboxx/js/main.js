var application = {
	//GLOBAL alert method to use native phone dialog
	showAlert: function (message, title) {
		if (navigator.notification) {
			navigator.notification.alert(message, null, title, 'OK');
		} else {
			alert(title ? (title + ": " + message) : message);
		}
	},
	initialize: function(){
		var self = this;
	},
};

application.initialize();