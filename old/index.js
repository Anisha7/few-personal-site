// banner buttons for changing images
// NOT WORKING

const hero = document.getElementById("heroBG");
const heroTitle = document.getElementById("projectTitle");
const heroDescription = document.getElementById("projectDescription");
function changeB1() {
    hero.style.backgroundImage = "linear-gradient(rgba(44, 62, 80,.3), rgba(44, 62, 80,.3)), url('images/nourishBanner-01.jpg')";
    heroTitle.innerText = "Nourish";
    heroDescription.innerText = "A health tracker, with personalized recipes and immediate access to doctors."
    console.log("changed B1");
}

function changeB2() {
    hero.style.backgroundImage = "linear-gradient(rgba(44, 62, 80,.3), rgba(44, 62, 80,.3)), url('images/numNumBanner-02.jpg')";
    heroTitle.innerText = "NumNum";
    heroDescription.innerText = "Too much food? Worry not, now you can share your meal and split the cost!"
    console.log("changed B2");
}

function changeB3() {
    hero.style.backgroundImage = "linear-gradient(rgba(44, 62, 80,.3), rgba(44, 62, 80,.3)), url('images/doughNutBanner2-03.png')";
    heroTitle.innerText = "DoughNut";
    heroDescription.innerText = "Managing budgets is no longer a challenge!";
    console.log("changed B3");
}

window.setInterval(function(){
    console.log(heroTitle.innerText);
    if (heroTitle.innerText === "Nourish") {
        changeB2();
    }

    else if (heroTitle.innerText === "NumNum") {
        changeB3();
    }

    else if (heroTitle.innerText === "DoughNut") {
        changeB1();
    }

    console.log("slideshow image changed");
  }, 5000);