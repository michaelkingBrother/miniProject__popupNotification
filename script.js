var mark = document.querySelector(".mark")
var span = document.querySelector("span")
var closeButton = document.querySelector("#closeButton")

var openButton = document.querySelector("#openButton")
var popup = document.querySelector(".popup")

var openPopup = function(e){mark.style.display="block";e.stopPropagation()}
var hidePopup = function(e){mark.style.display="none";e.stopPropagation()}

openButton.addEventListener("click", openPopup)
popup.addEventListener("click", openPopup)

mark.addEventListener("click", hidePopup)
span.addEventListener("click", hidePopup)
closeButton.addEventListener("click", hidePopup)


