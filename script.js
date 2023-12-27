
var addPopup = document.getElementById("add-popup")
var popupOverlay = document.querySelector(".popup-overlay")
var popupBox = document.querySelector(".popup-box")
var cancelpopup = document.getElementById("cancel-popup")

//  changing the display to block and none to make app
addPopup.addEventListener("click",function(){
    popupOverlay.style.display = "block" ;
    popupBox.style.display = "block" ;

})

cancelpopup.addEventListener("click",function(){
    popupOverlay.style.display = "none" ;
    popupBox.style.display = "none" ;
})

//  need to get details from thee input and add it to the container with the same tag
var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var bookTitle = document.getElementById("book-title-input")
var bookAuthor = document.getElementById("book-author-input")
var shortDescription = document.getElementById("book-description-input")
var change = document.getElementById("change")

addbook.addEventListener("click",function(event){
    event.preventDefault()
   if(bookTitle.value !=  ""){
    var div = document.createElement("div") ;
    div.setAttribute("class","book-container") 
    div.innerHTML = `<h2>${bookTitle.value} </h2>
                     <h5>${bookAuthor.value}</h5> 
                    <p>${shortDescription.value}</p>
                    <button type="button" onclick="deleteitem(event)">Delete</button>`
    container.append(div) 
    // changed because of the placeholder is not showing , and the previously entered text is showing
    shortDescription.value = ""
    bookAuthor.value = ""
    bookTitle.value = ""

    popupOverlay.style.display = "none" ;
    popupBox.style.display = "none" ;

   }}
)

// used to delete the notes

function deleteitem(event){
    event.target.parentElement.remove()
}
