
            function selectClass(selection) {
                var x = document.getElementsByClassName("warrior");
                var y = document.getElementsByClassName("mage");
                var z = document.getElementsByClassName("rogue");
              if (selection.value == 'Warrior') {
                    var i;
                    for (i = 0; i < x.length; i++) {
                        x[i].style.visibility = "visible";
                        y[i].style.visibility = "hidden";
                        z[i].style.visibility = "hidden";
                    }
              } else if (selection.value == 'Mage') {
                    var ii;
                    for (ii = 0; ii < y.length; ii++) {
                        x[ii].style.visibility = "hidden";
                        y[ii].style.visibility = "visible";
                        z[ii].style.visibility = "hidden";
                    }
              } else if (selection.value == 'Rogue') {
                    var iii;
                    for (iii = 0; iii < z.length; iii++) {
                        x[iii].style.visibility = "hidden";
                        y[iii].style.visibility = "hidden";
                        z[iii].style.visibility = "visible";
                    }
            }
            }