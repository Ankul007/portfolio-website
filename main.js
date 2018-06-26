
var p1 = document.getElementById("coded-lines");
var p2 = document.getElementById("coffee-cups");
var p3 = document.getElementById("rendered-pixels");
var p4 = document.getElementById("projects-completed");
var a = 0, b=0, c=0, d=0;
var t1, t2, t3, t4;
function inc1() {
    if (a <= 2000) {
        p1.innerHTML = a + "+";
    } else {
        clearInterval(t1);
    }
    a = a+10;
} 

function inc2() {
    if (b <= 234) {
        p2.innerHTML = b;
    } else {
        clearInterval(t2);
    }
    b = b + 3 ;
}
function inc3() {
    if (c <= 7607600) {

        p3.innerHTML = c ;
    } else {
        clearInterval(t3);
    }
    c = c + 9876;
}
function inc4() {
    if (d <= 4) {

        p4.innerHTML = d;
    } else {
        clearInterval(t4);
    }
    d = d + 1;
}

t1 = setInterval(function () { inc1() }, 20);
t2 = setInterval(function () { inc2() }, 20);
t3 = setInterval(function () { inc3() }, 1);
t4 = setInterval(function () { inc4() }, 100);


    