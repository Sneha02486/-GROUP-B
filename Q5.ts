const testResults: string[] = ["Passed", "Passed", "Failed", "Passed", "Failed"];

const firstFailedTest = testResults.find(result => result === "Failed");

if (firstFailedTest) {
    console.log("First failed test position:", testResults.indexOf(firstFailedTest) + 1);
} else {
    console.log("All tests passed");
}