$(".create-form").on("submit", function (event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

  let newBurg = {
    burger_name: $("#new-name").val().trim(),
    icon: "",
  };

  let test = $("#new-name").val().trim().toLowerCase();
  //pick random burger icon, with options for chicken and fish
  if (test.includes("chicken")) {
    newBurg.icon = "chicken" + Math.round(Math.random());
  } else if (test.includes("fish") || test.includes("salmon")) {
    newBurg.icon = "fish0";
  } else {
    newBurg.icon = "burger" + Math.floor(Math.random() * 6);
  }

  // Send the POST request.
  $.ajax("/api/burger", {
    type: "POST",
    data: newBurg,
  }).then(function () {
    // Reload the page to get the updated list
    location.reload();
  });
});

$(".devour-it").on("click", function (event) {
  var id = $(this).data("id");

  // Send the POST request.
  $.ajax("/api/devour/" + id, {
    type: "PUT",
  }).then(function () {
    // Reload the page to get the updated list
    location.reload();
  });
});
