 //Select color input
 //Select size input


 //When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!


const heightInput = $('#input_height');
const widthInput = $('#input_width');
const colorInput = $('#colorPicker');
 
 makeGrid = () => {
 const pixelCanvas = $('#pixel_canvas'); 
  const heightValue = $('#input_height').val();
  const widthValue = $('#input_width').val();
  pixelCanvas.innerText = "";
  for (let h = 0; h < heightValue; ++h) {
    const row = pixelCanvas.insertRow(-1);
  for (let w = 0; w < widthValue; ++w) {
      const cell = row.insertCell(-1);
      cell.onclick = changeColor;
    }
  }
  event.preventDefault();
}

changeColor = () => {
  const color = $('#colorPicker').val();
 this.style.background = color;
}

  let heightValue = heightInput.val();
  let widthValue = widthInput.val();
 
  let pixelCanvas = $('#pixel_canvas');
  pixelCanvas.children().remove(); 
 
for (let h = 0; h < heightValue; h++) {
    pixelCanvas.append("<tr></tr>");
  }
  for (let w = 0; w < widthValue; w++) {
    $('tr').append("<td></td>");
  }
}
 
$('table').on('click', 'td', function() {
  $(this).css('backgroundColor', colorInput.val() );
});
 
form = $('#sizePicker');
form.submit(function(event) {
    event.preventDefault(); 
    makeGrid();
});