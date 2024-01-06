import { Before, Given, Then, When  } from "cypress-cucumber-preprocessor/steps";
import addCampaignsActions from "../../../../../pageObjects/addCampaignsPage/actions.cy";
import addCampaignsAssertions from "../../../../../pageObjects/addCampaignsPage/assertions.cy";


const value1 = " Campaigns";
const name = "sarah";
const sub = "new";
const message = "The new campaign has been added successfully.";

const addCampaignsAction = new addCampaignsActions;
const addCampaignsAssertion = new addCampaignsAssertions;

Given("The user clicks on Campaigns option",()=>{
    addCampaignsAction.clickedOnCampaignsOption(value1);
});
When("Clicks on add a new Campaigns button",()=>{
    addCampaignsAction.clickedOnCampaignsButton();
});
When("Types in the name field",()=>{
    addCampaignsAction.typedInNameField(name);
});
When("Types in the subject field",()=>{
    addCampaignsAction.typedInSubField(sub);
});
When("Types in the body field",()=>{
    addCampaignsAction.typedInBodyField();
});
When("Clicks on save button",()=>{
    addCampaignsAction.clickedOnSaveButton();
});
Then("The Campaigns should be added successfully",()=>{
    addCampaignsAssertion.checkCampaignsAdded(message);
});
Then("Checked campaigns",()=>{
    addCampaignsAssertion.checkedAddedProduct(name);
});