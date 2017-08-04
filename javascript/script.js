//Problem: 
//Solution: 

$("#asdf").click(function(event){

  event.preventDefault();
  var firstname = $("#firstname").text();
  var lastname = $("#lastname").text(); 
  var greeting = "Hello";

  if (firstname != "" || lastname != "") {
    greeting += ', ';
    if (firstname != "" && lastname != "") {
      greeting += firstname + ' ' + lastname;
    } else if (lastname != "") {
      greeting += 'Mx. ' + lastname;
    } else {
      greeting += firstname;
    }
  }
    greeting += '!';
  $("#greeting").text(greeting);
});


// var $overlay = $('<div id="overlay"></div>');
// var $image = $("<img>");
// var $caption = $("<p></p>");

// //An image to overlay

// $overlay.append($image);

// //A caption to overlay

// $overlay.append($caption);

// //Add overlay

// $("body").append($overlay);

// //Capture the click event on a link to an image
// $("#imageGallery a").click(function(event) {
//   event.preventDefault();
//   var href = $(this).attr("href");
//   var caption = $(this).children().attr("alt");
  
//   //Update overlay with the image linked in the link
//   $image.attr("src", href);
//   $caption.text(caption);
//   $overlay.show();

// });

// $overlay.click(function() {
//   $overlay.hide();
// });

  
  
  
  //Show the overlay.

  
  //Get child's alt attribute and set caption

//When overlay is clicked

  //Hide the overlay










