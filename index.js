const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries = batteryBatches.reduce(function (total, batteryCount){
    total += batteryCount
    return total
},0);

console.log(totalBatteries);