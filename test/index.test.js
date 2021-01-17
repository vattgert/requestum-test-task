const { expect } = require("chai");
const { getNumberOfDaysPassed } = require("../index");

describe("Testing getNumberOfDaysPassed function", () => {
    const checkData = [
        {
            startDate: "2016-10-10",
            trainingsNumber: 200,
            schedule: [7],
            expectedDaysPassed: 1400
        },
        {
            startDate: "2016-05-30", 
            trainingsNumber: 3, 
            schedule: [2],
            expectedDaysPassed: 16
        },
        {
            startDate: "2016-05-30", 
            trainingsNumber: 3, 
            schedule: [1,2,3,4,5,6],
            expectedDaysPassed: 3
        },
        {
            startDate: "2016-04-18", 
            trainingsNumber: 6, 
            schedule: [1,3,5],
            expectedDaysPassed: 12,

        },
        {
            startDate: "2016-10-10", 
            trainingsNumber: 200, 
            schedule: [2,4,6],
            expectedDaysPassed: 466
        }
    ];

    for(const params of checkData){
        const { startDate, trainingsNumber, schedule, expectedDaysPassed } = params;
        describe(`startDate: ${startDate}, trainingsNumber: ${trainingsNumber}, schedule: ${schedule}`, () => {
            it(`should return ${expectedDaysPassed}`, function() {
                const trainingCount = getNumberOfDaysPassed(startDate, trainingsNumber, schedule);
                expect(trainingCount).equal(expectedDaysPassed);
            });
        });
    }
});