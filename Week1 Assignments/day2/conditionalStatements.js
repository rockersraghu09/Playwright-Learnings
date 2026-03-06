function launchBrowser(browserName) {
    if (browserName == 'chrome'){
        console.log("This is a Chrome Browser");
    } else {
        console.log("It is a " , browserName , " browser");
    }
}

function runTests(testType){
    switch (testType) {
        case "smoke":
            console.log("This is a smoke test");
            break;
        case "sanity":
            console.log("This is a sanity test");
            break;
        case "regression":
            console.log("This is a regression test");
            break;
        default:
            console.log("This is a default smoke test")
            break;
    }

}

launchBrowser("chrome");
launchBrowser("Firefox");
launchBrowser("Safari");

runTests("smoke");
runTests("sanity");
runTests("regression");
runTests("functional");