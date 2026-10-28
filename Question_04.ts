// Section 2: Arrays and Array Methods
// Question 4: Identify the Top Three Scores

let score: number[] = [78, 92, 45, 99, 85, 92, 67, 99];

let topThree: number[] = [...new Set(score)]
    .sort((a, b) => b - a)
    .slice(0, 3);

console.log(topThree);