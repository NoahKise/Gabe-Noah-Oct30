// Business Logic

function Place(landmark, location, date, notes, color) {
    this.landmark = landmark;
    this.location = location;
    this.date = date;
    this.notes = notes;
    this.color = color;
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

    const newPlace = new Place(landmarkInput, locationInput, dateInput, notesInput, colorInput);
    placesArray.push(newPlace);
    const nameDiv = document.createElement("div");
    nameDiv.setAttribute("id", "resultName");
    const resultDiv = document.createElement("div");
    resultDiv.setAttribute("class", "result");
    resultDiv.setAttribute("id", "hidden");
    const buttonLandmark = document.createElement("button");
    const h2Location = document.createElement("h2");
    const h3Date = document.createElement("h3");
    const pNotes = document.createElement("p");
    const imgImage = document.createElement("img");

    buttonLandmark.append(landmarkInput);
    h2Location.append(locationInput);
    h3Date.append(dateInput);
    pNotes.append(notesInput);

    if (imageInput) {
        const reader = new FileReader();
        reader.onload = function (e) {
            imgImage.src = e.target.result;
        };
        reader.readAsDataURL(imageInput);
    }
    nameDiv.append(buttonLandmark)
    resultDiv.append(imgImage, h2Location, h3Date, pNotes)
    resultDiv.style.backgroundColor = colorInput;
    document.body.append(nameDiv, resultDiv);
    function toggleDisplay() {
        if (resultDiv.getAttribute("id") === "hidden") {
            resultDiv.removeAttribute("id");
        } else {
            resultDiv.setAttribute("id", "hidden");
        }
    }

    buttonLandmark.addEventListener("click", toggleDisplay);
    
    const landmarkForm = document.getElementById("landmark");
    landmarkForm.reset();
    const locationForm = document.getElementById("location");
    locationForm.reset();
    const dateForm = document.getElementById("date");
    dateForm.reset();
    const colorForm = document.getElementById("color");
    colorForm.reset();
    const imageForm = document.getElementById("image");
    imageForm.reset();
    const notesForm = document.getElementById("notes");
    notesForm.reset();
}

window.addEventListener("load", function () {
    document.querySelector("form#notes").addEventListener("submit", formHandler);
});