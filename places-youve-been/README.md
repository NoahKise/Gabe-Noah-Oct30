Test: It will build a constructor that functions to add new places.
Code: function Place(location, landmark, year) {
    this.location = location;
    this.landmark = landmark;
    this.year = year;
}
let testPlace = new Place("Portland", "Forest Park", "2023");
testPlace;
Expected Result: Place {location: "Portland", landmark: "Forest Park", year: "2023"}
