var myApp = (function(){
	// the list itself
	var list = [];

	// DOM cache
	var $wrapper = $('.wrapper');
	var $input = $wrapper.find('input');
	var $button = $wrapper.find('button');
	var $allItems = $wrapper.find('ul');

	// bind listener
	$button.on('click', addItem);

	// render list to html
	render();

	function render(){
		for(var x = 0; x < list.length; x++){
			$allItems.append('<li>' + list[x] + '</li>');
		}
	}

	function addItem(){
		item = $input.val();
		list.push(name);
		$allItems.append('<li>' + item + '</li>');
		$input.val('');
	}


	return addItem;

})()