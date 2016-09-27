var quantityInput = $(".element-quantity-input")
console.log ("quantityInput");

quantityInput.keydown(function(e) {
  console.log (e.keyCode)
  var keyCode = e.keyCode;
  var inputValue = quantityInput.val();

  if (keyCode == 13) {	
    addElementsToThePage(inputValue);
  }
})

function addElementsToThePage(numberOfElements) {	  
  $(".new-el").remove();
  for (var i = 0; i < numberOfElements; i++) {
    var newEl = $("<div class='new-el'>Hi there!</div>");		
    $(".element-display").append(newEl);
  }
}