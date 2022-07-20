function sortTable(n) {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc";
  /*Make a loop that will continue until
    no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
      first, which contains table headers):*/
    for (i = 1; i < rows.length - 4; i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
        one from current row and one from the next:*/
      x = rows[i]
        .getElementsByTagName("TD")
        [n].innerHTML.toLowerCase()
        .toString()
        .replace(/[₹]/g, "");
      y = rows[i + 1]
        .getElementsByTagName("TD")
        [n].innerHTML.toLowerCase()
        .toString()
        .replace(/[₹]/g, "");
      /*check if the two rows should switch place,
        based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (n == 0) {
          if (x > y) {
            //if so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      } else if (dir == "desc") {
        if (n == 0) {
          console.log(n);
          if (x < y) {
            //if so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      //   else if (dir == "asc") {
      //     if (n == 1 || n == 2 || n == 3) {
      //       console.log(n);
      //       if (Number(x) > Number(y)) {
      //         shouldSwitch = true;
      //         break;
      //       }
      //     }
      //   } else if (dir == "desc") {
      //     if (n == 1 || n == 2 || n == 3) {
      //       console.log(n);
      //       if (Number(x) < Number(y)) {
      //         shouldSwitch = true;
      //         break;
      //       }
      //     }
      //   }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount++;
    } else {
      /*If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

// function SomeDeleteRowFunction() {
//   // event.target will be the input element.
//   var td = event.target.parentNode;
//   var tr = td.parentNode; // the row to be removed
//   tr.parentNode.removeChild(tr);
// }

function sortTableNumber(n) {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;

  console.log(n);
  const val = n;
  table = document.getElementById("myTable");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc";
  /*Make a loop that will continue until
      no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
        first, which contains table headers):*/
    for (i = 1; i < rows.length - 4; i++) {
      console.log(i);
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
          one from current row and one from the next:*/
      x = rows[i]
        .getElementsByTagName("TD")
        [val].innerHTML.toString()
        .replace(/[₹]/g, "");
      y = rows[i + 1]
        .getElementsByTagName("TD")
        [val].innerHTML.toString()
        .replace(/[₹]/g, "");
      /*check if the two rows should switch place,
          based on the direction, asc or desc:*/
      //   z = x.toString().replace(/[₹]/g, "");
      console.log("x & y", x, y);
      if (dir == "asc") {
        if (Number(x) > Number(y)) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (Number(x) < Number(y)) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
      console.log("x&y after:", x, y);
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
          and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount++;
    } else {
      /*If no switching has been done AND the direction is "asc",
          set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

// var index, rows;
// table = document.getElementById("myTable");
// for (var i = 1; i < table.rows.length; i++) {
//   table.rows[i].cells[4].onclick = function () {
//     index = this.parentElement.rowIndex;
//     table.deleteRow(index);

//     //console.log(index);
//   };
// }

function deleteRow() {
  var table = document.getElementById("myTable");
  var rowCount = table.rows.length;
  for (var i = 1; i < rowCount; i++) {
    var index = this.parentElement.rowIndex;
    console.log("row clicked", index);
    table.deleteRow(index);
  }
}

// function SomeDeleteRowFunction() {
//   var index;
//   var table = document.getElementById("myTable");
//   var tablelength = table.rows.length;
//   for (var i = 1; i < tablelength; i++);
//   index = table.parentElement.rowIndex;
// }

// function deleteR() {
//   var index,
//     table = document.getElementById("myTable");
//   console.log(table);
//   for (var i = 1; i < table.rows.length; i++) {
//     table.rows[i].cells[4].onclick = function () {
//       index = this.parentElement.rowIndex;
//       table.deleteRow(Index);
//       console.log(index);
//     };
//   }
// }
