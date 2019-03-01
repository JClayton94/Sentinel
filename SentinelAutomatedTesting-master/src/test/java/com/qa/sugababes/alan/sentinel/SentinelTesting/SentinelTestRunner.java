package com.qa.sugababes.alan.sentinel.SentinelTesting;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;


import com.relevantcodes.extentreports.ExtentReports;
import com.relevantcodes.extentreports.ExtentTest;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "classpath:")
public class SentinelTestRunner {
	public static ExtentReports report;
	public static ExtentTest test;
	
	@BeforeClass 
	public static void beforeClass() {
		report = new ExtentReports(Constants.REPORTLOCATION + Constants.REPORTFILENAME, false);
	}
	
	
	
	@AfterClass 
	public static void afterClass() {
		report.endTest(test);
		report.flush();
	}


}
