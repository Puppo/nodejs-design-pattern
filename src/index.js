class Boat {

    constructor(allParameters) {
        this.hasMotor = allParameters.hasMotor;
        this.motorCount = allParameters.motorCount;
        this.motorBrand = allParameters.motorBrand;
        this.motorModel = allParameters.motorModel;
        this.hasSails = allParameters.hasSails;
        this.sailsCount = allParameters.sailsCount;
        this.sailsMaterial = allParameters.sailsMaterial;
        this.sailColor = allParameters.sailColor;
        this.hullColor = allParameters.hullColor;
        this.hasCabin = allParameters.hasCabin;
    }

}

class BoatBuilder {

    withMotor(count, brand, model) {
        this.hasMotor = true;
        this.motorCount = count;
        this.motorBrand = brand;
        this.motorModel = model;
        return this;
    }

    withSails(count, material, color) {
        this.hasSails = true;
        this.sailsCount = count;
        this.sailsMaterial = material;
        this.sailColor = color;
        return this;
    }

    withHullColor(color) {
        this.hullColor = color;
        return this;
    }

    withCabin() {
        this.hasCabin = true;
        return this;
    }

    build() {
        return new Boat({
            hasMotor: this.hasMotor,
            motorCount: this.motorCount,
            motorBrand: this.motorBrand,
            motorModel: this.motorModel,
            hasSails: this.hasSails,
            sailsCount: this.sailsCount,
            sailsMaterial: this.sailsMaterial,
            sailColor: this.sailColor,
            hullColor: this.hullColor,
            hasCabin: this.hasCabin,
        })
    }

}

const myBoat = new BoatBuilder()
    .withSails(3, 'fabric', 'white')
    .withHullColor('blue')
    .withCabin()
    .build();

console.log(JSON.stringify(myBoat, null, 2));