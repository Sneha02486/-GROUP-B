
//Write a function that accepts an HTTP status code and returns the corresponding category: 
//200–299: "Success" 
//300–399: "Redirection" 
//400–499: "Client Error" 
//500–599: "Server Error" 
//Any other value: "Invalid Status Code" 


function getStatusCategory(statusCode: number): string {
    if (statusCode >= 200 && statusCode <= 299) {
        return "Success";
    } 
    else if (statusCode >= 300 && statusCode <= 399) {
        return "Redirection";
    } 
    else if (statusCode >= 400 && statusCode <= 499) {
        return "Client Error";
    } 
    else if (statusCode >= 500 && statusCode <= 599) {
        return "Server Error";
    } 
    else {
        return "Invalid Status Code";
    }
}

console.log(getStatusCategory(200));
console.log(getStatusCategory(404));
console.log(getStatusCategory(500));
console.log(getStatusCategory(700));
