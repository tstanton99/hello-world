var databaseFunction = function(callback) {
    console.log("Do some stuff that needs to happen first");
    var fastData = 'Here is the data back from the db';
    console.log("Calling the function I was passed as a param...")
    callback(fastData)
    console.log("I'm in the first function but I run after the callback function has been supplied with data and completed.");
};

var dependentFunction = function(recievedFastData) {
    console.log("Hi, I'm the dependent function. I rely on databaseFunction's data. Now I have it, so I'll log it...");
    console.log("logging: " + recievedFastData);
    console.log("All done. Bye.");
};

databaseFunction(dependentFunction);