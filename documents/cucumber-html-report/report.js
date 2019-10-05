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
formatter.match({
  "location": "MyStepdefs.userIsOnAlreadyOnArgosHomePage()"
});
formatter.result({
  "duration": 15631965100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userEntersCorrectUrl()"
});
formatter.result({
  "duration": 75613300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSearchesForXbox()"
});
formatter.result({
  "duration": 11251273600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectsXboxWhichDisplaysOnSearchPage()"
});
formatter.result({
  "duration": 6860410100,
  "status": "passed"
});
});