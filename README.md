# MoMo Says
Welcome to the MoMo README file.

This is a school project with the main focus to display my skills in HTML, css and javascript. This website's goal is for users and owners to play an animal themed simon says game with three interactive webpage themes.


## UX/UI

### User Stories (UX)
-   As a usertype, I want to play a fun game, to pass my time.

-	As a usertype, the instructions to be simple and easy to understand, so I can play the game easily.

-	As a usertype, to see my current score and my highest score, I that I can compare my own scores.

-	As a usertype, I want to have a restart button, so that I can restart if I want to.

-	As a usertype, I want to have a mute button, so that I can mute audio if I want to.

-	As a usertype, I want there to be a clear structure of the game, so that it does not confuse me.

### Owner Stories (UX)

-   As an ownertype, I want to create a simple yet exiting and responsive game, so that user will want to play more than once.

-   As a ownertype, I want the instructions to be simple and easy for the user to understand, so that they can play easily.

-	As an ownertype, I want to have creative, consistent and interactive features, to appeal to the user which in turn will use the website more.

### Wireframes (UI)

Wireframes for this project was made with [Balsamiq](https://balsamiq.com/).
Before I started programming the webpage the version 1 wireframe was the general interface design aim.
But a few hours into the development process I decided to make minor changes in the interface design to make the webpage more responsive and user friendly and thus created the version 2 wireframe.

Wireframe version 1
![Header](assets/wireframes/balsamiq-wireframe-v.1.png)

Wireframe version 2
![Header](assets/wireframes/balsamiq-wireframe-v.2.png)

## Features

### Existing Features
Feature 1 - index.html > (Homepage): allows users to access the full webpage including
the "How to play", MoMo game, highscore and theme buttons.
![Header](.png)

Feature 2 - index.html > Logo header: interactive MoMo logo that is consistent
throughout the webpage, despite viewport width and theme changes.
![Header](.png)

Feature 3 - index.html > "How to play": allows users to read clear instructions for
how to play the game.
![Header](.png)

Feature 4 - index.html > MoMo game: allows the user to play a interactive memory
game. 
![Header](.png)

Feature 5 - index.html > Mute and restart buttons: allows users to turn off and on the
audio and restart the game at any time.
![Header](.png)

Feature 6 - index.html > Highscore: allows users to see their own score, both
current and highest. The highest score is locally stored so when the webpage is closed
and reopened the highest score is still visible.
![Header](.png)

Feature 7 - index.html > Theme buttons: three separate buttons allows users to interact with the
interface design of the webpage by switching between three diffrent colored themes.
![Header](.png)


### Features Left to Implement

## Technologies Used

### Languages
- HTML
- CSS
- Javascript
    The project is built with on HTML and CSS to make the basic structure of the webpage and to style it.
    Javascript is used to create the interactive features like the game, highscore (current and highest)
    and theme buttons.


### Framework
- Bootstrap
    
    The project uses Bootstrap to simplify the structural development of HTML and CSS within the webpage.
https://getbootstrap.com/

### Library
- Fontawesome
    
    The project used fontawesome icons to make the webpage more intuitive and more visually appealing.
https://fontawesome.com/

- w3schools
    
    The project used w3shools online color picker to easily find and test diffrent colors for the pricing headings.
https://www.w3schools.com/colors/colors_picker.asp

### Languages
- HTML
- CSS
- Javascript
    The project is built up on HTML and CSS to make the basic structure of the webpage and to style it.
    Javascript is used to create interactive features like the game, mute button, restart button,
    highscores (current and highest) and three diffrent theme buttons.


### Framework
- Bootstrap
    
    The project uses Bootstrap to simplify the structural development of the webpages HTML and CSS.
https://getbootstrap.com/

### Library

- jQuery
    The project used the javaScript library jQuery to simplify the construction of the javascript files.
    [jquery.com](https://jquery.com/)

- Fontawesome
    The project used fontawesome icons to make the webpage more intuitive and more visually appealing.
    [fontawesome.com](https://fontawesome.com/)

- w3schools
    The project used w3shools online color picker to easily find and test diffrent colors for the pricing headings.
    [w3schools.com](https://www.w3schools.com/colors/colors_picker.asp)

#### Other Technologies

- Favicon
    The project uses a favicon made with the favicon.ico generator tool to make the page more visually appealing. The image is a cropped version of the company logo. https://www.favicon-generator.org/



## Testing



- Bugs:
Recived:
"NotAllowedError: The play method is not allowed by the user agent or the platform in the current context, possibly because the user denied permission."
When the site automatically played up the game flash sequence. To fix the problem I added a call to the automatic starting function of sequence to first
be played after one ofe the animal buttons have been clicked. After this was implemented there was no longer a error message.

https://stackoverflow.com/questions/57504122/browser-denying-javascript-play

- Wrong color of logo
When I uploaded the dark MoMo logo the background color was #25161b when swatched before I uploaded it to the page and
afterwards it became slightly lighter, making it visibly stand out from the background color that had the swatched hex color.
To get the later hex color of the logo I needed to do a printscreen of the webpage with the logo uploaded and swatch the color
to recive #2a1c21 and then use that color as my default dark themed hex color.

- NaN in Highest highscore


## Deployment


## Credits

### Content
Company Logo made with the online tool [hatchful](hatchful.shopify.com)

Grid responsiveness from [Bootstrap](https://getbootstrap.com/docs/4.5/layout/grid/)

Markdown styling from Github guides for [headings](https://guides.github.com/features/mastering-markdown/)

Code about playing audio onclick was adapted from [Arunkumar via stackoverflow](https://stackoverflow.com/questions/18826147/javascript-audio-play-on-click)

Code about cloning in javascript was adapted from [Luka Kvavilashvili via stackoverflow](https://stackoverflow.com/questions/40822531/jquery-audio-how-to-allow-overlapping-sounds)




### Media

#### Images: 

MoMo logo image and MoMo favicon made with [hatchful](https://hatchful.shopify.com)

Image of pig is created by Kimberly Lake and retrived via [unsplashed](https://unsplash.com/photos/VBmRbvMrb7A), thank you Kimberly!

Image of sealion is created by Duncan Sanchez and retrived via [unsplashed](https://unsplash.com/photos/l6aAMUH_oW8), thank you Duncan!

Image of rattlesnake is created by NOAA and retrived via [unsplashed](https://unsplash.com/photos/VrQRpV4c9jY), thank you NOAA!

Image of elephant is created by Maurits Bausenhart and retrived via [unsplashed](https://unsplash.com/photos/Ay67yB6vmF8), thank you Maurits!



### Acknowledgements

I received visual and structural inspiration for this project from:

[freesimon.org](http://www.freesimon.org/welcome/)