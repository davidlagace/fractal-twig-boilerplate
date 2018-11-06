(function primary_click() {
  var button = document.getElementsByClassName('primary-button');

  for (var i=0; i < button.length; i++) {
    button[i].onclick = function () {
      console.log("Do Something");
    }
  }

})();
