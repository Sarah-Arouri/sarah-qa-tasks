import { Before, Given, Then, When  } from "cypress-cucumber-preprocessor/steps";
import addDiscountsActions from "../../../../../pageObjects/addDiscountsPage/actions.cy";
import addDiscountsAssertions from "../../../../../pageObjects/addDiscountsPage/assertions.cy";

const name = "Sarah's Discount";
const message = "The new discount has been added successfully.";

const addDiscountsAction = new addDiscountsActions;
const addDiscountsAssertion = new addDiscountsAssertions;

Given("The user click on discounts option",()=>{
    addDiscountsAction.clickedOnDiscounts();
    
});

When("Click on add a new discount button",()=>{
    addDiscountsAction.clickedOnDiscountButton();
});

When("Typed on name field",()=>{
   addDiscountsAction.typedOnNameField(name);
});

When ("Typed on Discount type",()=>{
    addDiscountsAction.typedOnDiscountType();
})

When("Checks on use percentage",()=>{
    addDiscountsAction.typedOnPercentageField();
   
})

When("Typed on Discount percentage",()=>{
    addDiscountsAction.typedOnDiscountPercentage();
})

When("Click on save button",()=>{
   addDiscountsAction.clickedOnSaveButton();
});

Then("The discounts should be added successfully",()=>{
    addDiscountsAssertion.discountsMessage(message);
})

When("Typed on Discounts name",()=>{
    cy.get("#SearchDiscountName").type(name);
})

When("Selects Discount type",()=>{
    addDiscountsAction.selectDiscountsType();
})

When("Clicked on Search button",()=>{
    addDiscountsAction.clickedOnSaveButton();
})

Then("Checked if the discount is exist",()=>{
    addDiscountsAssertion.checkedExistingDiscounts(name);
})