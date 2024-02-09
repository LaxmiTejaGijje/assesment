
  
    function expandBox(boxId) {
      var box = document.getElementById(boxId);
      if (box.classList.contains('expanded')) {
        box.classList.remove('expanded');
      } else {
        var expandedBoxes = document.querySelectorAll('.box.expanded');
        for (var i = 0; i < expandedBoxes.length; i++) {
          expandedBoxes[i].classList.remove('expanded');
        }
        box.classList.add('expanded');
      }
    }
