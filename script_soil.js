const form = document.querySelector('form');
const resultsDiv = document.getElementById('results');

form.addEventListener('submit', async (e) => {
	e.preventDefault();
	const soilType = document.getElementById('soilType').value;
	const soilTest = document.getElementById('soilTest').value;

	const response = await fetch(`https://yoursoilapi.com/soil?type=${soilType}&test=${soilTest}`);
	const data = await response.json();

	let resultsHTML = '';
	for (const key in data) {
		resultsHTML += `<h2>${key}</h2>`;
		resultsHTML += '<ul>';
		for (const item of data[key]) {
			resultsHTML += `<li>${item}</li>`;
		}
		resultsHTML += '</ul>';
	}

	resultsDiv.innerHTML = resultsHTML;
});
``
