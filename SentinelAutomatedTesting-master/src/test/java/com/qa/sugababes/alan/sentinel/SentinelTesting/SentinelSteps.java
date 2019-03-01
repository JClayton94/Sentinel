package com.qa.sugababes.alan.sentinel.SentinelTesting;

import static org.junit.Assert.assertEquals;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.mongodb.annotations.ThreadSafe;
import com.relevantcodes.extentreports.LogStatus;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SentinelSteps {

	WebDriver driver;
	WebDriverWait wait;
	UploadFilePage uploadPage;

	@Before
	public void setup() {
		System.setProperty("webdriver.chrome.driver", Constants.DRIVERLOCATION);
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		wait = new WebDriverWait(driver, 10);

	}

	@Given("^I have the correct web address$")
	public void i_have_the_correct_web_address() throws InterruptedException {
		driver.get(Constants.URLHOME);

	}

	@Given("^Have entered a report name$")
	public void have_entered_a_report_name() {
		uploadPage = PageFactory.initElements(driver, UploadFilePage.class);
		uploadPage.InputReportTitle();
	}

	@Given("^Have not entered a report name$")
	public void have_not_entered_a_report_name() throws Throwable {
		uploadPage = PageFactory.initElements(driver, UploadFilePage.class);
		uploadPage.noReportName();
	}

	@When("^I click Choose File button$")
	public void i_click_Choose_File_button() {
		uploadPage.ClickChooseFileButton();
	}

	@When("^Click on a file pressing enter$")
	public void click_on_a_file_pressing_enter() {
		UploadFileRobot uploadPage = PageFactory.initElements(driver, UploadFileRobot.class);
		UploadFileRobot.setClipboardData(toString());
		uploadPage.uploadFile();
	}

	@When("^I click submit$")
	public void i_click_submit() throws InterruptedException {
		uploadPage = PageFactory.initElements(driver, UploadFilePage.class);
		uploadPage.ClickSubmitButton();
	}

	@When("^Click on a file of the wrong type pressing enter$")
	public void click_on_a_file_of_the_wrong_type_pressing_enter() throws Throwable {
		uploadPage = PageFactory.initElements(driver, UploadFilePage.class);
		uploadPage.robotUploadIncorrectFileType();
	}

	@When("^I do dont selct a file$")
	public void i_do_dont_selct_a_file() throws Throwable {
		uploadPage = PageFactory.initElements(driver, UploadFilePage.class);
		uploadPage.robotUploadNoFile();
	}

	@Then("^a submission message is displayed$")
	public void a_submission_message_is_displayed() throws InterruptedException {

		uploadPage = PageFactory.initElements(driver, UploadFilePage.class);
		assertEquals("File Has Been Submitted", uploadPage.SubmitMessageResult(driver));

	}

	@Then("^an error should appear$")
	public void an_error_should_appear() {
		uploadPage = PageFactory.initElements(driver, UploadFilePage.class);
		assertEquals("Please enter a report name", uploadPage.errorMessage1(driver));
	}

	@Then("^an error message appears$")
	public void an_error_message_appears() throws Throwable {
		uploadPage = PageFactory.initElements(driver, UploadFilePage.class);
		assertEquals("Please choose a PDF", uploadPage.errorMessage2(driver));

	}

	@Then("^no error message appears and nothing happens$")
	public void no_error_message_appears_and_nothing_happens() throws Throwable {
		uploadPage = PageFactory.initElements(driver, UploadFilePage.class);
		assertEquals("", uploadPage.noMessage(driver));
	}

	@After
	public void teardown() {
		driver.quit();
	}

}
