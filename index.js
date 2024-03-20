// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
    const hqLocation = 42;
    if (42 < pickup) {
        return pickup - 42; 
    }else {
        return 42 - pickup;
    }
}

function distanceFromHqInFeet(pickupp){
    distanceFromHqInBlocks(pickupp);
    return distanceFromHqInBlocks(pickupp) * 264;
}

function distanceTravelledInFeet(start, destination){
    const distance = Math.abs(destination - start) * 264;
    return distance;
}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    }else if (distance >400 && distance < 2000) {
        const price = (distance - 400) * 0.02;
        return price;
    }else if (distance > 2000 && distance < 2500){
        return 25;
    }else if (distance > 2500) {
        return 'cannot travel that far';
    }
}
