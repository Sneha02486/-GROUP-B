//Given an array of scores, use loops and conditional statements to classify each score as "Distinction" (75–100), "Passed" (50–74), "Failed" (0–49), or "Invalid Score" (outside 0–100). Print each score with its classification.
//[95, 42, 67, 30, 105, 50, -5, 88, 0]

 // Question 2: Test Score Analysis

let scores: number[] = [95, 42, 67, 30, 105, 50, -5, 88, 0];

for (let i = 0; i < scores.length; i++) {
    let Score: number = scores[i];

    if (Score >= 75 && Score <= 100) {
        console.log(Score, "Distinction");
    } else if (Score >= 50 && Score <= 74) {
        console.log(Score, "Passed");
    } else if (Score >= 0 && Score <= 49) {
        console.log(Score, "Failed");
    } else {
        console.log(Score, "Invalid Score");
    }
}
