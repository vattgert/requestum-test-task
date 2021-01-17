function getNumberOfDaysPassed(startDate, trainingsNumber, schedule){

    const getProperDayNumber = (weekdayNumber) => {
        return weekdayNumber || 7;
    }

    const getDateDifference = (startDate, endDate) => {
        return (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24);
    }

    const startDateObject = new Date(startDate);
    const endDateObject = new Date(startDate);

    let trainingDaysPassed = 0;
    while(trainingDaysPassed < trainingsNumber){
        const dayNumber = endDateObject.getDay();
        const properDayNumber = getProperDayNumber(dayNumber);
        if(schedule.includes(properDayNumber)){
            trainingDaysPassed++;
        } 
        endDateObject.setDate(endDateObject.getDate() + 1);
    }

    return getDateDifference(startDateObject, endDateObject);
};

module.exports = {
    getNumberOfDaysPassed
}