$(document).ready(function() {

  ////////////////////////////
  // GENERATE GRID
  ////////////////////////////
  var gridSize = $('.inputGridSize').val();

  function generateGrid(gridSize) {
      var cellUnit = '<div class="cell"></div>';
      var cellSize = (960 / gridSize) + 'px';


      for (i = 0; i < gridSize; i++) {
          for (j = 0; j < gridSize; j++) {
              $('.container').append(cellUnit);
          }
      }

      $('.cell').css({
          "width": cellSize,
          "height": cellSize,
          "display": "inline-block"
      });
  }

  generateGrid(gridSize);
  screenWrite();
  ////////////////////////////
  // CHANGE GRID SIZE
  ////////////////////////////

$('.generate').click(function() {
  $('.container').empty();
  generateGrid($('.inputGridSize').val());
  screenWrite();
});

////////////////////////////
// BASIC COLOR OPTIONS
////////////////////////////

  var fill = 'black';

  $('.black').click(function(){
      fill = 'black';
      console.log(fill);
  });

  $('.white').click(function(){
      fill = 'white';
      console.log(fill);
  });

  $('.red').click(function(){
      fill = 'red';
      console.log(fill);
  });

  $('.green').click(function(){
      fill = 'green';
      console.log(fill);
  });

  $('.blue').click(function(){
      fill = 'blue';
      console.log(fill);
  });

  $('.random').click(function(){
      fill = 'blue';
      console.log(fill);
  });

  ////////////////////////////
  // SCREEN WRITE
  ////////////////////////////

  function screenWrite() {
  var isDown = false;

  $('.cell').mousedown(function() {
    $(this).removeClass(this.className.split(' ').pop());
    $(this).addClass(fill);
  });

  $(document).mousedown(function() {
    isDown = true;
  })

  $(document).mouseup(function() {
    isDown = false;
  })

  $('.cell').mouseover(function() {
    if(isDown) {
      $(this).removeClass(this.className.split(' ').pop());
      $(this).addClass(fill);

      }
  });
}



});
