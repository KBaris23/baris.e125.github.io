function revealOption(optionId) {
  var options = document.querySelectorAll('.options');
  options.forEach(function(option) {
    option.style.display = 'none'; // Hide all options
  });

  var optionToShow = document.getElementById(optionId);
  optionToShow.style.display = 'block'; // Show the selected option
}
