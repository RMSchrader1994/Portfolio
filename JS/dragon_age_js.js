
            function selectClass(selection) {
                var w = document.getElementsByClassName("warrior");
                var m = document.getElementsByClassName("mage");
                var r = document.getElementsByClassName("rogue");
                var a = document.getElementsByClassName("mage");
                var s = document.getElementsByClassName("rogue");
              if (selection.value == 'Warrior') {
                    var i;
                    for (i = 0; i < w.length; i++) {
                        w[i].style.display = "inline-block";
                        m[i].style.display = "none";
                        r[i].style.display = "none";
                    }
              } else if (selection.value == 'Mage') {
                    var ii;
                    for (ii = 0; ii < m.length; ii++) {
                        w[ii].style.display = "none";
                        m[ii].style.display = "inline-block";
                        r[ii].style.display = "none";
                    }
              } else if (selection.value == 'Rogue') {
                    var iii;
                    for (iii = 0; iii < r.length; iii++) {
                        w[iii].style.display = "none";
                        m[iii].style.display = "none";
                        r[iii].style.display = "inline-block";
                    }
            }
            }