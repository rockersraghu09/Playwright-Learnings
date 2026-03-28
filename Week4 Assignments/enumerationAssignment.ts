
enum Environment {
  Local = "LOCAL",
  Development = "DEVELOPMENT",
  Staging = "STAGING",
  Production = "PRODUCTION"
}

function runTests(env: Environment) : void {
  console.log(`The tests are running in ${env} environment`);
}

runTests(Environment.Local);
runTests(Environment.Development);
runTests(Environment.Staging);
runTests(Environment.Production);
