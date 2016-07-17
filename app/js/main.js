$(document).ready(function() {

  ////////////////////////////
  // GENERATE GRID
  ////////////////////////////

  function generateGrid() {
    var gridWidth = $('.gridWidth').val();
    var gridHeight = $('.gridHeight').val();

    var cellUnit = '<div class="cell"></div>';
    var cellSize = (960 / gridWidth) + 'px';

    for (i = 0; i < gridHeight; i++) {
      for (j = 0; j < gridWidth; j++) {
        $('.container').append(cellUnit);
      }
    }

    $('.cell').css({
      'width': cellSize,
      'height': cellSize,
      'display': 'inline-block'
    });
  }

  generateGrid();
  screenWrite();

  ////////////////////////////
  // CHANGE GRID SIZE
  ////////////////////////////

  $('.generate').click(function() {
    $('.container').empty();
    generateGrid();
    screenWrite();
  });

  ////////////////////////////
  // SHOW/HIDE GRID
  ////////////////////////////

  $('.showGrid').click(function() {
    if ($(this).hasClass('gridShowing')) {
      $('.container').children().css({
        'border': ''
      });
      $(this).removeClass('gridShowing');
      $(this).text('SHOW GRID');
    } else {
      $('.container').children().css({
        'border': '1px solid rgba(1, 1, 1, .1)'
      });
      $(this).addClass('gridShowing');
      $(this).text('HIDE GRID');
    }
  });

  ////////////////////////////
  // BASIC COLOR OPTIONS
  ////////////////////////////

  var fill = 'black';
  var opacityMode = false;
  var randomMode = false;

  function optionToggle(className) {
    randomMode = false;
    if (opacityMode) {
      $(className).addClass('selected').siblings().removeClass('selected');
      $('.opacity').addClass('selected');
    } else {
      $(className).addClass('selected').siblings().removeClass('selected');
    }
  }

  $('.black').click(function() {
    fill = 'black';
    optionToggle(this);
  });

  $('.white').click(function() {
    fill = 'white';
    optionToggle(this);
  });

  $('.red').click(function() {
    fill = 'red';
    optionToggle(this);
  });

  $('.green').click(function() {
    fill = 'green';
    optionToggle(this);
  });

  $('.blue').click(function() {
    fill = 'blue';
    optionToggle(this);
  });

  $('.erase').click(function() {
    fill = 'erase';
    optionToggle(this);
  });

  $('.yellow').click(function() {
    fill = 'yellow';
    optionToggle(this);
  });

  $('.orange').click(function() {
    fill = 'orange';
    optionToggle(this);
  });

  $('.violet').click(function() {
    fill = 'violet';
    optionToggle(this);
  });

  $('.pink').click(function() {
    fill = 'pink';
    optionToggle(this);
  });

  $('.tan').click(function() {
    fill = 'tan';
    optionToggle(this);
  });

  $('.brown').click(function() {
    fill = 'brown';
    optionToggle(this);
  });

  // RANDOM
  $('.random').click(function() {
    $(this).addClass('selected').siblings().removeClass('selected');
    if (randomMode) {
      randomMode = false;
      $(this).removeClass('selected');
    } else if (opacityMode) {
      opacityMode = false;
      $('.container').empty();
      generateGrid();
      $('.cell').css({
        'opacity': '1'
      });
      screenWrite();
      $('.opacity').removeClass('selected');
      randomMode = true;
    } else {
      randomMode = true;
    }
  });

  //OPACITY
  $('.opacity').click(function() {
    $(this).addClass('selected')

    if (opacityMode) {
      opacityMode = false;
      $(this).removeClass('selected');
      $('.container').empty();
      generateGrid();
      $('.cell').css({
        'opacity': '1'
      });
      screenWrite();
    } else if (randomMode) {
      randomMode = false;
      opacityMode = true;
      $('.container').empty();
      generateGrid();
      $('.cell').css({
        'opacity': '0'
      });
      screenWrite();
      $('.random').removeClass('selected');
    } else {
      opacityMode = true;
      $('.container').empty();
      generateGrid();
      $('.cell').css({
        'opacity': '0'
      });
      screenWrite();
    }
  });

  ////////////////////////////
  // SCREEN WRITE
  ////////////////////////////

  function screenWrite() {

    var isDown = false;
    $(document).mousedown(function() {
      isDown = true;
    });
    $(document).mouseup(function() {
      isDown = false;
    });

    // MOUSEDOWN
    $('.cell').mousedown(function() {
      // RANDOM
      if (randomMode) {
        var randomColor = {
          'background-color': 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')'
        };
        $(this).css(randomColor);
        //OPACITY
      } else if (opacityMode) {

        $(this).removeClass(this.className.split(' ').pop());
        $(this).css({
          'background-color': ''
        });
        $(this).addClass(fill);
        $(this).css('opacity', '+=.15');
      } else {
        $(this).removeClass(this.className.split(' ').pop());
        $(this).css({
          'background-color': ''
        });
        $(this).addClass(fill);
      }

    });

    //MOUSEOVER
    $('.cell').mouseover(function() {
      if (isDown) {
        //RANDOM
        if (randomMode) {
          var randomColor = {
            'background-color': 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')'
          };
          $(this).css(randomColor);
          //OPACITY
        } else if (opacityMode) {
          $(this).removeClass(this.className.split(' ').pop());
          $(this).css({
            'background-color': ''
          });
          $(this).addClass(fill);
          $(this).css('opacity', '+=.15');
        }
        //DEFAULT FILL
        else {
          $(this).removeClass(this.className.split(' ').pop());
          $(this).css({
            'background-color': ''
          });
          $(this).addClass(fill);
        }
      }
    });
  }

});
