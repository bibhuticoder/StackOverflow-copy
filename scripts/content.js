$(function(){


	$("pre.default").append(`
		<div class="copy"> Copy </div>
	`);

	$("div.copy").click(function(){		
		var spans = ($($($(this).parent()).children()[0]).children());
		var s = "";
		$.each(spans, function(i, v){
			if($(v).hasClass("pln") && $(v).text() === "") s+= "\n";
			s += $(v).text();

		});
		console.log(s);

		//copy to clipboard
		var $temp = $("<input>");
		$("body").append($temp);
		$temp.val(s).select();
		document.execCommand("copy");
		$temp.remove();

		alert("Copied");
	});

	chrome.runtime.sendMessage({todo :"showPageAction"});

});






