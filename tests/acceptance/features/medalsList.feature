Feature: Athletic medalists from the 2008 Beijing Olympics
	As Kitman Lab customer
	I want to be able to see the Athletic medalists from the 2008 Beijing Olympics
	Ordered by medals count

	Scenario: Medalist populated by total count
		Given I am a Kitman Lab customer on the medalists page
		Then I will see the first row populated with the best team 

	Scenario: Medalist populated with gold, silver and bronze medal
		Given I am a Kitman Lab customer on the medalists page
		Then I will see the first row populated with the best team
		And The medals total sum would be the count of silver + bronze + gold
