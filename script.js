// set up text to print, each item in array is new line
var aText = new Array(
    // " I am fresher and speaking of which gives me a tinch of confidence about writing the next line that I am even a good listener and fast learner as I have recently completed <b>my second year</b> and wanted to get my hands into the actual field and get to learn some real-world skills by applying them."
    "Eager to explore the intersection of Data Science and Artificial Intelligence, I am committed to leveraging<b>my analytical skills and innovative thinking in a role that combines data-driven insights with cutting-edge<b>AI research. Passionate about contributing to advanced analytics projects and AI initiatives, I aim to drive<b>impactful solutions in a progressive environment where continuous learning and collaborative exploration<b>are valued."
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("typedtext");

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 500);
        }
    } else {
        setTimeout("typewriter()", iSpeed);
    }
}


typewriter();

// var beepOne = $("#beep")[0];
// $(".loader")
//     .mouseenter(function () {
//         beepOne.play();
//     });

//POPUP EVENT
let popup = document.getElementById("popup");
function openPopup() {
    // function required() {
    //     var empt = document.forms["form1"]["lastName"]["email"]["mobile"]["textarea"].value;
    //     if (empt == "") {
    //         alert("Please input a Value");
    //         return false;
    //     }
    //     else {

    //         return true;
    //     }
    // }
    popup.classList.add("open-popup");
}
function closePopup() {
    popup.classList.remove("open-popup");
}

// window.onscroll = function () { myFunction() };

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//     if (window.pageYOffset >= sticky) {
//         navbar.classList.add("sticky")
//     } else {
//         navbar.classList.remove("sticky");
//     }
// }

//Get Data
// const firstNameInput = document.querySelector("#firstname");
// const lastNameInput = document.querySelector("#lastname");
// const emailInput = document.querySelector("#email");
// const mobileInput = document.querySelector("#mobile");
// const messageInput = document.querySelector("#message"); 
