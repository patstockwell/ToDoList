var myApp = (function(){
	$(document).ready(function(){


		// the list itself
		// items take the form {details: 'someNewToDoItem'}
		var list = []

		// DOM cache
		var $wrapper = $('.wrapper')
		var $input = $wrapper.find('input')
		var $form = $('#form-input')
		var $allItems = $wrapper.find('ul')
		var template = '<li>{{details}}</li>'

		// bind listener
		$form.submit(function(event) {
			//stop the default form submission behaviour
			event.preventDefault()
			addItem(event)
		})

		// render list to html if there are already items
		render()

		function render(){
			for(var x = 0; x < list.length; x++){
				$allItems.append(Mustache.render(template, list[x]))
			}
		}

		function addItem(event){
			// get the input and create object
			item = {
				details: $input.val()
			}
			// put it in the array
			list.push(item)
			// render the new item to the page
			$(`<li>${item.details}</li>`)
			.appendTo($allItems)

			// clear the input
			$input.val('')
		}


		return {
			// addItem: addItem,
		}
	})

})()
