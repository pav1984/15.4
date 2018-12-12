function Phone(brand, price, color, display, country) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.display = display;
    this.country = country;
}
Phone.prototype.printInfo = function () {
    console.log(`The phone brand is ${this.brand}, color is ${this.color}, the price is ${this.price} zł and display size is ${this.display}.`);
}
Phone.prototype.countryInfo = function () {
    console.log(`${this.brand} smartphones are from ${this.country}`)
}

var iPhone6S = new Phone("Apple", 2250, "silver", "4.7-inch", "USA");
var samsungGalaxyS6 = new Phone("Samsung", 2500, "black", "5.1-inch", "SOUTH KOREA");
var onePlusOne = new Phone("OnePlus", 1600, "red", '5.5-inch', "CHINA");
var iphoneX = new Phone("Apple", 3800, "white", "5.8-inch", "USA");

iPhone6S.printInfo();
samsungGalaxyS6.printInfo();
onePlusOne.printInfo();
iphoneX.printInfo();

iPhone6S.countryInfo();
samsungGalaxyS6.countryInfo();
onePlusOne.countryInfo();
iphoneX.countryInfo();