# MoMo says
Welcome to the MoMo README file.

This is a school project with the main focus to display my skills in HTML, css and javascript. This website's goal is for users and owners to play an animal themed simon says game with three interactive webpage themes.


## UX

### User stories
-   As a usertype, I want to play a fun game, to pass my time.

-	As a usertype, the instructions to be simple and easy to understand, so I can play the game easily.

-	As a usertype, to see my current score and my highest score, I that I can compare my own scores.

-	As a usertype, I want to have a restart button, so that I can restart if I want to.

-	As a usertype, I want to have a mute button, so that I can mute audio if I want to.

-	As a usertype, I want there to be a clear structure of the game, so that it does not confuse me.

### Ownerstories

-   As an ownertype, I want to create a simple yet exiting and responsive game, so that user will want to play more than once.

-   As a ownertype, I want the instructions to be simple and easy for the user to understand, so that they can play easily.

-	As an ownertype, I want to have creative and interactive features, to appeal to the user which in turn will use the website more.

### Wireframes

Wireframes for this project was made with [Balsamiq](https://balsamiq.com/).
![Header](assets/wireframes/balsamiq-wireframes-v.1.png)
![Header](assets/wireframes/balsamiq-wireframes-v.2.png)

## Features


### Existing Features


### Features Left to Implement


## Technologies Used

### Languages

- HTML
- CSS

The project is built up on HTML and CSS to make the basic structure of the webpage and to style it.

### Framework

Bootstrap

The project uses Bootstrap to simplify the structural development of the webpages HTML and CSS. https://getbootstrap.com/

Code copied (and afterwards altered) from bootstrap:
- Popover button [link to original code](https://www.w3schools.com/bootstrap/bootstrap_popover.asp)
- Collapsible button [link to original code](https://www.w3schools.com/bootstrap/bootstrap_collapse.asp)

### Library

- Fontawesome

    The project used fontawesome icons to make the webpage more intuitive and more visually appealing. https://fontawesome.com/

- w3schools

    The project used w3shools online color picker to easily find and test diffrent colors for the pricing headings. https://www.w3schools.com/colors/colors_picker.asp

Other Technologies
- Favicon.ico and app icon generator

The project uses a favicon made with the favicon.ico generator tool to make the page more visually appealing. The image is a cropped version of the company logo. https://www.favicon-generator.org/

### Youtube

- Cody Seibert

    The projects game section in scripts.js was originaly from Cody Seibert and has later on been slightly altered to fit the project
    
    [Web Dev Junkie](https://www.youtube.com/watch?v=W0MxUHlZo6U)



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