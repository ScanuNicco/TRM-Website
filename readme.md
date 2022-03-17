# The Scotbotics Website
The newest and most up-to-date Scotbotics website. Compared to the old website, this one is better organized and has more consistent styling across the site

## Styling Guide
* Consistent styles are key to having a good-looking website.
* Use what's already there. Whenever possible, use existing classes and structures to style new content so that it appears in a style consistant with the existing pages
    + Find a page with the stying you want, then just copy it and change the text/images
	+ Pages with only text need no additional styles. Just put the paragraphs in `<p>` elements
	+ Pages with text and images should use the `waterfall` or `twocolumn` classes, or embed the image in the text with a caption. 
	    - See `about/history.html` for an example of how to use the `waterfall` class and an image with a caption
		- See `robots/quixote.html` for an example of how to use the `twocolumn` class
* Use "Age-resistent text"
* Border-radius is 5px
* Add new classes to `styles.css` so they can be used in multiple pages
    + Be sure to document how they should be used with comments!

## Age-resistant text
It's no secret that this website will likely not be updated as often as it should be. Being thoughtful about what you type can make older pages seem far less outdated
* Avoid saying how old something is, as that requires updating every year
    + Instead of saying "Scotbotics is 13 years old", say "Scotbotics was founded in 2009"
* Do not put the year of the robot in the nav-bar, as it will make the website look old if new pages aren't added anually
    + Instead of "Our Robot 2019 - 2020", say "Johh Quixote"
* Do not say "this year", it will make the site look old if it's not updated every year
    + Say "in 2022" instead of "this year"
* When possible, avoid future-tense

## Updating the website
Certain things on the website should be updated yearly. Each year, be sure to update...
* The list of team members on `about/team.html`
* The google form / email on `apply.html`
* The image of the team on the home page
* The waterfall on `about/history.html` (add the newest team image to the bottom)
* Also, make a new page under Our Robots with the current year's robot
   + I recommend copying `robots/oppurtunity.html` and just changing the images and text.
   + If you want to add more than a few images, maybe consider copying `about/history.html` instead and using the waterfall structure.
