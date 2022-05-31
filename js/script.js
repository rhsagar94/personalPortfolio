// Used reference from w3schools.com website
function myFunction() {
	document.getElementById('myDropdown').classList.toggle('show');
}

// Used reference from w3schools.com website
window.onclick = function (e) {
	if (!e.target.matches('.dropbtn')) {
		var myDropdown = document.getElementById('myDropdown');
		if (myDropdown.classList.contains('show')) {
			myDropdown.classList.remove('show');
		}
	}
};



// Used reference from https://www.youtube.com/watch?v=6ophW7Ask_0

const modal = document.getElementById('simpleModal');
const modalBtn = document.getElementById('modalBtn');
const closeBtn = document.getElementsByClassName('closeBtn')[0];

modalBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', clickOutside);

// Used reference from https://www.youtube.com/watch?v=6ophW7Ask_0

function openModal() {
	modal.style.display = 'block';
}

function closeModal() {
	modal.style.display = 'none';
}

function clickOutside(e) {
	if (e.target == modal) {
		modal.style.display = 'none';
	}
}
