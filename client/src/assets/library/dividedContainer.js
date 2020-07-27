$(document)
		.ready(function() {
			new Clipboard('.clipboad-copy-sq', {
				target: function(trigger) {
					return trigger.nextElementSibling;
				}
			});

        });