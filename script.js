const isDay = false;
console.log(isDay);

const isLightOn = !(isDay);
console.log("Daytime?");

console.log(isDay);
console.log("Lights on?");
console.log(isLightOn);

const batteryLevel = 50;

console.log("Battery level?");
console.log(batteryLevel + "%");

const isWorking = isLightOn && batteryLevel > 0;

console.log ("Is everything working?");
console.log(isWorking);