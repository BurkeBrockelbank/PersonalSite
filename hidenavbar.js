/*

    We are using the following attributes on anchors in order to collapse the responsive menu when an item is clicked:
    
        data-toggle="collapse"
        data-target=".in"

*/
$(document).ready(function () {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});
