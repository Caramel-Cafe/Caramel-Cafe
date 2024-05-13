function showDropdown() {
  var dropdown = document.querySelector('.primary-navigation ul li ul');
  dropdown.style.visibility = 'visible';
  dropdown.style.opacity = '1';
  dropdown.style.display = 'block';
  dropdown.style.minWidth = '250px';
  dropdown.style.textAlign = 'left';
  dropdown.style.paddingTop = '20px';
  dropdown.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
  dropdown.style.boxShadow = '0px 3px 5px -1px rgba(0, 0, 0, 0.2)';
  dropdown.style.backdropFilter = 'blur(5px)';
  dropdown.style.borderRadius = '10px';
}

function hideDropdown() {
  var dropdown = document.querySelector('.primary-navigation ul li ul');
  dropdown.style.visibility = 'hidden';
  dropdown.style.opacity = '0';
  dropdown.style.display = 'none';
}
