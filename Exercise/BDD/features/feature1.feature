
Feature: exercise1


  Scenario: Assert the url , verify the text value based on ids
    Given webpage url is "https://www.exercise1.com/values"
    Then page url should match with "https://www.exercise1.com/values"
    And the Id "lbl_val_1" should have the text value of "Value 1"
    And the value of Id "txt_val_1" should be greater than 0
    And the value of id "text_val_1" should be displayed

  Scenario: Add all the values
    Given start with 0
    When input text values "txt_val_1", "txt_val_2" ,"txt_val_4", "txt_val_5", "txt_val_6"  are added
    Then the final value should match with value of id 'txt_ttl_val'

  Scenario: Verify format of input field
    Given the field is "txt_val_1"
    When the currency is $
    Then the result should contain