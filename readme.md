# The TRM Website
The newest and most up-to-date TRM website. This site is based on the Scotbotics website, which I developed for my robotics team in high school.

## Styling Guide
* Consistent styles are key to having a good-looking website.
* Use what's already there. Whenever possible, use existing classes and structures to style new content so that it appears in a style consistant with the existing pages
    + Find a page with the styling you want, then just copy it and change the text/images
	+ Pages with only text need no additional styles. Just put the paragraphs in `<p>` elements
	+ Pages with text and images should use the `waterfall` or `twocolumn` classes, or embed the image in the text with a caption. 
	    - See `about/history.html` for an example of how to use the `waterfall` class and an image with a caption
		- See `cars/regal.html` for an example of how to use the `twocolumn` class
* Use "Age-resistant text"
* Border-radius is 5px
* Add new classes to `styles.css` so they can be used in multiple pages
    + Be sure to document how they should be used with comments!

## Age-resistant text
It's no secret that this website will likely not be updated as often as it should be. Being thoughtful about what you type can make older pages seem far less outdated
* Avoid saying how old something is, as that requires updating every year
    + Instead of saying "TRM is 50 years old", say "TRM was founded in 1978"
* Do not say "this year", it will make the site remain correct if it's not updated every year
    + Say "in 2022" instead of "this year"
* When possible, avoid future-tense

## Updating the website
Certain things on the website should be updated yearly. Each year, be sure to update...
* The list of team members on `about/team.html`
* The google form / email on `apply.html`
* The image of the team on the home page
* The waterfall on `about/history.html` (add the newest team image to the bottom)
