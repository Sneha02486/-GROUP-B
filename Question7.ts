// Q7. Parse Test Log Messages

const logLine: string = "2026-10-26 │ ERROR │ Login Failed │ Browser=Chrome";

const parts: string[] = logLine.split("│");

const logDate: string = (parts[0] ?? "").trim();
const logLevel: string = (parts[1] ?? "").trim();
const logMessage: string = (parts[2] ?? "").trim();

const browserPart: string = (parts[3] ?? "").trim();
const browserName: string = browserPart.split("=")[1] ?? "";

console.log("Date: " + logDate);
console.log("Log Level: " + logLevel);
console.log("Message: " + logMessage);
console.log("Browser: " + browserName);