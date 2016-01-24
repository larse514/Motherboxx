var app = {
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
	helloworld: function(){
		$.ajax({
			url:'http://mbloginservice-larslarslars.rhcloud.com/login',
			contentType:"application/json",
			type: "POST",
			data:{
			},
			success: function(result) {
				alert(result.message);
			},
			error: function(err){
				console.log(err)
			}// edited
		});
	}
};

app.initialize();