window.logout = function() {
	fetch('/~/RiseUp/logout', { method: 'POST'});
	alert('Logged Out!')
	location.href = '/~/RiseUp'
}

function bookmark1() {
var bookmark1 = document.getElementById("bookmark1");
  if (bookmark1.getAttribute('src') === 'bookmark-o.png') {
  	bookmark1.src="bookmark.png";
  } else {
  bookmark1.src = "bookmark-o.png";
}
}

function bookmark2() {
var bookmark2 = document.getElementById("bookmark2");
  if (bookmark2.getAttribute('src') === 'bookmark-o.png') {
  	bookmark2.src="bookmark.png";
  } else {
  bookmark2.src = "bookmark-o.png";
}
}

function bookmark3() {
var bookmark3 = document.getElementById("bookmark3");
  if (bookmark3.getAttribute('src') === 'bookmark-o.png') {
  	bookmark3.src="bookmark.png";
  } else {
  bookmark3.src = "bookmark-o.png";
}
}