package TestRun;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
features="C:\\Users\\mohitreddy\\IdeaProjects\\argos\\src\\main\\java\\Features\\Search.f",
        glue= {"Stepdef"}
        ,plugin={"html:documents/cucumber-report-html"}
        //,dryRun = true
)
public class TestRunner {
}
