$(function(){
	var total = 0;
	var limit = 0;
	chrome.storage.sync.get(['total', 'limit'], function(budget){
		limit = parseInt(budget.limit);
		total = parseInt(budget.total);
		$("#limit").text("Limit: " + limit);		
		$("#total").text("Total: " + total);
	});

	$("#btn-spend").click(function(){		
		var input = $("#input").val();		
		if(input){	
			total += parseInt(input);

			chrome.storage.sync.set({'total': total}, function(){
				if(total > limit){
					var notifOptions = {
						type: 'basic',
						iconUrl: 'icon.png',
						title: 'Limit Exceeded',
						message: 'Uh oh! Limit exceeded bro..'
					};
					chrome.notifications.create('limitNotif', notifOptions);
				}
			});

			$("#input").val("");
			$("#total").text("Total: " + total);
		}		
	});	
});

