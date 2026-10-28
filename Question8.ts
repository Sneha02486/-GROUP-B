// An automated test compares the expected message "Login Successful" with the actual message " login successful ". Write a function that compares the messages while ignoring leading/trailing whitespace and differences in letter case. Return true if the normalized messages match and false otherwise.

function compareMessages(expected: string, actual: string): boolean {
    
    const cleanExpected = expected.trim().toLowerCase();
    
    
    const cleanActual = actual.trim().toLowerCase();
    
    
    return cleanExpected === cleanActual;
}


const expected = "Login Successful";
const actual = " login successful ";

console.log(compareMessages(expected, actual)); 
