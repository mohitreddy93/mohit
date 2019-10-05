$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/mohitreddy/IdeaProjects/argos/src/main/java/Features/Search.f");
formatter.feature({
  "line": 1,
  "name": "Argos Search function",
  "description": "",
  "id": "argos-search-function",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Search Function",
  "description": "",
  "id": "argos-search-function;search-function",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "user is on already on argos home page",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user enters correct url",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user searches for xbox",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "user selects xbox which displays on search page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user add in to basket",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnAlreadyOnArgosHomePage()"
});
formatter.result({
  "duration": 49396694400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userEntersCorrectUrl()"
});
formatter.result({
  "duration": 8636320800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSearchesForXbox()"
});
formatter.result({
  "duration": 37208815700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectsXboxWhichDisplaysOnSearchPage()"
});
formatter.result({
  "duration": 1840163200,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cimg src\u003d\"//media.4rgos.it/s/Argos/8637712_R_SET?w\u003d270\u0026amp;h\u003d270\u0026amp;qlt\u003d75\u0026amp;fmt.jpeg.interlaced\u003dtrue\" width\u003d\"100%\" height\u003d\"100%\" alt\u003d\"Xbox One S 1TB Console with 2 Controllers\" loading\u003d\"lazy\" data-test\u003d\"component-image\"\u003e is not clickable at point (480, 482). Other element would receive the click: \u003cdiv class\u003d\"privacy-prompt\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d77.0.3865.90)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-SCBDBPF\u0027, ip: \u0027192.168.1.101\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 77.0.3865.90, chrome: {chromedriverVersion: 76.0.3809.126 (d80a294506b4..., userDataDir: C:\\Users\\MOHITR~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:53364}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 426d67698342b4bb9ef9365ce484d8fe\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat Stepdef.MyStepdefs.userSelectsXboxWhichDisplaysOnSearchPage(MyStepdefs.java:49)\r\n\tat ✽.And user selects xbox which displays on search page(C:/Users/mohitreddy/IdeaProjects/argos/src/main/java/Features/Search.f:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepdefs.userAddInToBasket()"
});
formatter.result({
  "status": "skipped"
});
});