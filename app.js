var myApp = (function(){
	$(document).ready(function(){


		// the list itself
		var list = [
			{details: "first"},
			{details: "second"}
		];

		// DOM cache
		var $wrapper = $('.wrapper');
		var $input = $wrapper.find('input');
		var $button = $wrapper.find('button');
		var $allItems = $wrapper.find('ul');
		var template = '<li>{{details}}</li>'

		// bind listener
		$button.on('click', addItem);

		// render list to html
		render();

		function render(){
			for(var x = 0; x < list.length; x++){
				$allItems.append(Mustache.render(template, list[x]));
			}
		}

		function addItem(){
			// get the input and create object
			item = {
				details: $input.val()
			}
			// put it in the array
			list.push(item);
			// render the new item to the page
			$(Mustache.render(template, item))
			.css({"display":"none"})
			.appendTo($allItems)
			.slideDown(300);

			// clear the input
			$input.val('');
		}


		return {
			addItem: addItem,
			list, list
		};
	});

})();
