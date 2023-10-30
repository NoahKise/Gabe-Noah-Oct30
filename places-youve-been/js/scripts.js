// Business Logic

function Place(landmark, location, date, notes) {
    this.landmark = landmark;
    this.location = location;
    this.date = date;
    this.notes = notes;
}

// UI Logic
let placesArray = [];
const body = document.querySelector("body");

function formHandler(event) {
    event.preventDefault();
    const landmarkInput = document.querySelector("input#inputLandmark").value;
    const locationInput = document.querySelector("input#inputLocation").value;
    const dateInput = document.querySelector("input#inputDate").value;
    const notesInput = document.querySelector("textarea#inputNotes").value;
    const colorInput = document.querySelector("input#inputColor").value;
    const imageInput = document.querySelector("input#inputImage").files[0];

    const newPlace = new Place(landmarkInput, locationInput, dateInput, notesInput);
    placesArray.push(newPlace);
    console.log(newPlace);
    console.log(placesArray);
    // const nameDiv = document.createElement("div")
    // nameDiv.setAttribute("")
    const resultDiv = document.createElement("div")
    resultDiv.setAttribute("class", "result")
    const h1Landmark = document.createElement("h1");
    const h2Location = document.createElement("h2");
    const h3Date = document.createElement("h3");
    const pNotes = document.createElement("p");
    const imgImage = document.createElement("img");
    
    h1Landmark.append(landmarkInput);
    h2Location.append(locationInput);
    h3Date.append(dateInput);
    pNotes.append(notesInput);

    if (imageInput) {
        const reader = new FileReader();
        reader.onload = function (e) {
            imgImage.src = e.target.result; // Set the image source when it's loaded
        };
        reader.readAsDataURL(imageInput); // Read the image as a data URL
    }

    resultDiv.append(h1Landmark, imgImage, h2Location, h3Date, pNotes)
    resultDiv.style.backgroundColor = colorInput;
    document.body.append(resultDiv);
}

window.addEventListener("load", function () {
    document.querySelector("form#notes").addEventListener("submit", formHandler);
});