var list = document.getElementById('list');
	element = list.getElementsByTagName('li');
	add = document.getElementById('addElement');


add.addEventListener('click', function() {
list.innerHTML += '<li>item' + element.length + '</li>';
});