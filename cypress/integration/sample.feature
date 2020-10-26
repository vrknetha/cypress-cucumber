Feature: As a user, i should able to select items as per price range

  Scenario: Select grapes in price range
  Given I am on Asda groceries home page
  And I navigate to fruit "Grapes"
  When I filter by "price" and "high to low"
  And I select grapes price range £"1.25" to £"1.50"
  Then I see below grapes items selected
  |item| 
  |ASDA Extra Special Sable Seedless Grapes|
  |ASDA Apple Grapes & Cheese|
  |ASDA Grower's Selection Seedless Mixed Grapes (Colours may vary)|

