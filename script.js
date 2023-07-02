let spinCount = 0;
let spinning = false;

function spinWheel() {
    if (spinning) return;

    if (spinCount === 0) {
        // First spin, show "Try Again"
        spinCount++;
        startSpin(1, "Try Again");
    } else if (spinCount === 1) {
        // Second spin, show "Gift Card"
        spinCount++;
        startSpin(2, "Gift Card");
    }
}




function shuffle(array){
    var currentIndex = array.length,
    randomIndex;

    while(0!==currentIndex){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex],array[randomIndex]]=[
            array[currentIndex],
            array[currentIndex],
        ];
    }
    return array;
}

function spin(){
    Wheel.play();
    const box = document.getElementById("box");
    const element = document.getElementById("mainbox");
    let SelectedItem = "";

    let AirC = shuffle([1890, 2250, 2610]);
    let Camera = shuffle([1850, 2210, 2570]);
    let Zonk = shuffle([1770, 2130, 2490]);
    let PlayS = shuffle([1810, 2170, 2530]);
    let Headset = shuffle([1750, 2110, 2470]);
    let Drone = shuffle([1630, 1990, 2350]);
    let AsusROG = shuffle([1570, 1930, 2290]);

    let results = shuffle([
        AirC[0],
        Camera[0],
        Zonk[0],
        PlayS[0],
        Headset[0],
        Drone[0],
        AsusROG[0],
    ]);

    if(AirC.includes(results[0])) SelectedItem = "Air Conditioner";
    if(Camera.includes(results[0])) SelectedItem = "Camera Sport";
    if(Zonk.includes(results[0])) SelectedItem = "💣";
    if(PlayS.includes(results[0])) SelectedItem = "Playstation 4 Slim";
    if(Headset.includes(results[0])) SelectedItem = "Headset Gaming";
    if(Drone.includes(results[0])) SelectedItem = "Drone Mini";
    if(AsusROG.includes(results[0])) SelectedItem = "Laptop Asus ROG";

    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate(" + results[0] + "deg)";
    element.classList.remove("animate");
    setTimeout(function(){
        element.classList.add("animate");
    }, 5000);

    setTimeout(function(){
        applause.play();
        Swal.fire({
            title: 'Horaaay.....!',
            html: 'You Won ' + SelectedItem + ' | ' + '<a href="#">Claim Now</a>',
            imageUrl: 'assets/photo-1551564874-2c247864797e.avif',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
    }, 5000);

    setTimeout(function(){
        box.style.setProperty("transition", "initial");
        box.style.transform = "rotate(90deg)";
    }, 6000);
}