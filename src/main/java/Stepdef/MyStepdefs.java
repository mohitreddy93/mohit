package Stepdef;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import java.util.Iterator;
import java.util.Set;
import java.util.concurrent.TimeUnit;


public class MyStepdefs {
    WebDriver driver;

    @Given("^user is on already on argos home page$")
    public void userIsOnAlreadyOnArgosHomePage() {
        System.setProperty("webdriver.chrome.driver", "C://chromedriver.exe");
         driver=new ChromeDriver();
         driver.get("https://www.argos.co.uk");
         driver.manage().window().maximize();
         driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

    }

    @When("^user enters correct url$")
    public void userEntersCorrectUrl() {
        String m=driver.getCurrentUrl();
        System.out.println(m);
        Assert.assertEquals(m,"https://www.argos.co.uk/");
    }


    @Then("^user searches for xbox$")
    public void userSearchesForXbox() {
        driver.findElement(By.id("searchTerm")).sendKeys("Xbox");
        driver.findElement(By.xpath("//*[@id=\"haas-v2\"]/div[2]/div/div[3]/div/form/button[2]")).click();
    }

    @And("^user selects xbox which displays on search page$")
    public void userSelectsXboxWhichDisplaysOnSearchPage() throws InterruptedException {
        driver.findElement(By.xpath("//*[@id=\"findability\"]/div/div[3]/div[1]/div[2]/div[3]/div[1]/div[1]/a/div/div[2]/picture/img")).click();
Thread.sleep(5000);
    }

    @Then("^user add in to basket$")
    public void userAddInToBasket() {
        driver.findElement(By.xpath("//div[@class='Drawerstyles__Container-mvyw7g-1 bmyxXh add-to-trolley-modal__content']/footer/div/div[2]/button")).click();

    }










}
