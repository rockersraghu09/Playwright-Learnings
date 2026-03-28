var Environment;
(function (Environment) {
    Environment["Local"] = "LOCAL";
    Environment["Development"] = "DEVELOPMENT";
    Environment["Staging"] = "STAGING";
    Environment["Production"] = "PRODUCTION";
})(Environment || (Environment = {}));
function runTests(env) {
    console.log("The tests are running in ".concat(env, " environment"));
}
runTests(Environment.Local);
runTests(Environment.Development);
runTests(Environment.Staging);
runTests(Environment.Production);
