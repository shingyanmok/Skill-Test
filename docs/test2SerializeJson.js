const handleFormSubmit = event => {
	// Stop the form from submitting since we’re handling that with AJAX.
	event.preventDefault();

	var obj = $('#form').serializeJSON();

	// Demo only: print the form data onscreen as a formatted JSON object.
	const dataContainer = document.getElementsByClassName('result__display')[0];

	// Use `JSON.stringify()` to make the output valid, human-readable JSON.
	dataContainer.textContent = JSON.stringify(obj, null, "  ");
}

/*
 * This is where things actually get started. We find the form element using
 * its class name, then attach the `handleFormSubmit()` function to the 
 * `submit` event.
 */
const form = document.getElementsByClassName('form')[0];
form.addEventListener('submit', handleFormSubmit);