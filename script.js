window.logout = function() {
	fetch('/~/StepUp/logout', { method: 'POST'});
	alert('Logged Out!')
	location.href = '/~/StepUp'
}



function bookmarkmicopp() {
var bookmarkmicopp = document.getElementById("bookmarkmicopp");
  if (bookmarkmicopp.getAttribute('src') === 'bookmark-o.png') {
  	bookmarkmicopp.src="bookmark.png";
  } else {
  bookmarkmicopp.src = "bookmark-o.png";
}
}


function bookmarkresopp() {
  var bookmarkresopp = document.getElementById("bookmarkresopp");
  
  if (bookmarkresopp.getAttribute('src') === 'bookmark-o.png') {
  	bookmarkresopp.src="bookmark.png";
  } else {
  bookmarkresopp.src = "bookmark-o.png";
}
}

function bookmarkartsch() {
  var bookmarkartsch = document.getElementById("bookmarkartsch");
  
  if (bookmarkartsch.getAttribute('src') === 'bookmark-o.png') {
  	bookmarkartsch.src="bookmark.png";
  } else {
  bookmarkartsch.src = "bookmark-o.png";
}
}

function bookmarkmatsch() {
  var bookmarkmatsch = document.getElementById("bookmarkmatsch");
  
  if (bookmarkmatsch.getAttribute('src') === 'bookmark-o.png') {
  	bookmarkmatsch.src="bookmark.png";
  } else {
  bookmarkmatsch.src = "bookmark-o.png";
}
}