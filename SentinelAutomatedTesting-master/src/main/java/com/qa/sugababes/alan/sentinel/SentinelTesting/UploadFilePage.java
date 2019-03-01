package com.qa.sugababes.alan.sentinel.SentinelTesting;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class UploadFilePage {
	
	@FindBy(xpath="//*[@id=\"ReportName\"]")
	WebElement reportTitle;
	
	@FindBy(xpath= "//*[@id=\"fileUpload\"]")
	WebElement chooseFile;
	
					
	@FindBy(xpath = "//*[@id=\"submitButton\"]")
	WebElement submitButton;
	
	@FindBy(xpath = "//*[@id=\"root\"]/div/div/nav/div/div/p[4]")
	WebElement submitMessage;
	
	
	@FindBy(xpath = "//*[@id=\"root\"]/div/div/nav/div/div/p[3]")
	WebElement reportNameError;
	
	@FindBy(xpath = "//*[@id=\"root\"]/div/div/nav/div/div/p[2]")
	WebElement fileTypeError;
	
	
	
	
	public void InputReportTitle() {
		reportTitle.click();
		reportTitle.sendKeys("First Report");
	}
	
	public void noReportName() {
		reportTitle.click();
	}
	
	public void ClickChooseFileButton() {
		chooseFile.click();
	}
	
	public String FileNameResult() {
		ClickChooseFileButton();
		return chooseFile.getText(); 
	}
	
	public void ClickSubmitButton() {
		submitButton.click();
	}
	
	public void robotUploadFile() {
		UploadFileRobot uploadFile = new UploadFileRobot();
		uploadFile.uploadFile();
	}
	
	public void robotUploadIncorrectFileType() {
		UploadFileRobot uploadFile = new UploadFileRobot();
		uploadFile.uploadIncorrectFileType();
	}
	
	public void robotUploadNoFile() {
		UploadFileRobot uploadFile = new UploadFileRobot();
		uploadFile.uploadNoFile();
	}



	public String SubmitMessageResult(WebDriver driver) {
		WebElement myWait = (new WebDriverWait(driver, 10)).until(ExpectedConditions.elementToBeClickable(submitButton));
		myWait.click();
		
		return submitMessage.getText(); 
	}

	public String errorMessage1(WebDriver driver) {
		WebElement myWait = (new WebDriverWait(driver, 10)).until(ExpectedConditions.elementToBeClickable(reportNameError));
		myWait.click();
		return reportNameError.getText();
		
	}

	public String errorMessage2(WebDriver driver) {
		WebElement myWait = (new WebDriverWait(driver, 10)).until(ExpectedConditions.elementToBeClickable(fileTypeError));
		myWait.click();
		return fileTypeError.getText();
	}

	public String noMessage(WebDriver driver) {
		
		return submitMessage.getText() ;
	}

	

	
	
	

	


	
}