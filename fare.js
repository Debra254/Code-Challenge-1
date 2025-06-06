function calculateBodaFare(distanceInKm) {
    const baseFare = 50;
    const perKmRate = 15;
    const extraFare = distanceInKm * perKmRate;
    const totalFare = baseFare + extraFare;

    console.log(`Your trip is ${distanceInKm} km:
Base Fare: KES ${baseFare}
Distance Fare: KES ${extraFare}
Total Fare: KES ${totalFare}

Enjoy your ride!`);
}

const distance = Number(prompt("Where are you going? How many kilometers is your trip?:"));
calculateBodaFare(distance);
