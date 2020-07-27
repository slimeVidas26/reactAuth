$(document)
		.ready(function() {
       //from index
			new Clipboard('.clipboad-copy-sq', {
				target: function(trigger) {
					return trigger.nextElementSibling;
				}
			});

		});