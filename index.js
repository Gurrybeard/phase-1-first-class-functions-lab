// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
        let drive = [...drivers]
        return drive.splice(0,2);
    };
const returnLastTwoDrivers = function(drivers){
    let drive = [...drivers]
        return drive.splice(drive.length-2,drive.length);
    }
let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
function createFareMultiplier(num){  
    return (fare) => fare*num;
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers,f){
    if (f === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(drivers);
    }
    else if(f === returnLastTwoDrivers){
       return returnLastTwoDrivers(drivers)
    }
}