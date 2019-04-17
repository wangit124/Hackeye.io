# Hackeye.io
An extension for [Hackaday.io](https://hackaday.io) that allows you to view existing projects and user profiles!

### Noteworthy Features: 

  1. Custom SVG animations for landing and loading page logo and titles
  2. No-reload pagination of project items with custom URLs for each page
  3. User tooltip displaying profile name, rank and motivations on hover
  4. Highly streamline UI platform, adaptable to any portfolio/project type data
  
### Frameworks and tools (Hackaday.io API as main): 

  1. SVG animations with Tweenmax, Timeline, Greensock js
  2. Node/Express for backend routes and API calls
  3. EJS and Vanilla JS for client side API calls and front end rendering
  4. Testing using NightWatch JS and NPM debugging tools
  5. Hosted on Heroku server
  
### Works best on Chrome browser! [LAUNCH HERE!](https://hackeye-io.herokuapp.com)

![alt_text](https://github.com/hwanggit/Hackeye.io/blob/master/screenshots/Screen%20Shot%202019-04-16%20at%2010.31.20%20PM.png)

![alt_text](https://github.com/hwanggit/Hackeye.io/blob/master/screenshots/Screen%20Shot%202019-04-16%20at%2010.29.20%20PM.png)

## ACHIEVEMENTS

In summary, I found the task both exhilarating AND challenging. What I am most proud to showcase 
are the following which I was able to implement with my own ability in a limited time setting:

         1. UNIQUE CONCEPT: My project is HackEye.io, and it's a unique concept for viewing user 
         projects and profiles normally available on Hackaday.io. This website is specifically made 
         to showcase these projects in a highly appealing fashion, with a different style compared 
         to the original project page at Hackaday.io/projects. 
     
         2. INTERACTIVE: I designed a custom logo and animated its Landing/Loading pages using JS SVG 
         animation frameworks Tweenmax, Timeline and Greensock. Moreover, I implemented on-hover user 
         profile tooltips as well as project UI block modules that look very clean, modern and 
         contributes significantly to the user experience. 

         3. FUNCTIONAL: Using Express, EJS, and Vanilla JS as the main frameworks of communication 
         between the client and server, I was able to send mass project data from server side Hackaday 
         API calls to the client view in an efficient and scalable fashion. Furthermore, by integrating 
         Vanilla JS HTTP methods and EJS templating for client requests, I was able to implement a 
         secondary way of achieving pagination by dynamically loading content without refreshing the 
         page. It does not rely on custom url GET requests to the node server and thus the document 
         does not have to re-render every time. Overall, this couldn't have worked without a combination 
         of backend Express-to-EJS, as well as front end Javascript/EJS rendering methods. 

         4. DEPLOYABILITY: Currently, HackEye.io is hosted on Heroku web server, and can be accessed 
          by anyone with the URL. This project is highly applicable to the overall Hackaday.io experience, 
          and can easily be integrated as either a separate website to showcase user projects, or as 
          the main website to really inspire users to create their own awesome projects! These are only 
          possibilities, but it is highly unlikely that users wouldn't want to garner even more attention 
          to their already amazing projects!

## CHALLENGES

Perhaps the most DIFFICULT aspects of my exploration (required the most debugging, google 
searches, and head-banging) were: 

A. Implementing methods of client-server data-sharing using Node --> EJS --> Vanilla JS

B. Rendering dynamic client-side content from HTTP requests using ONLY Vanilla JS and EJS

C. Learning syntax and documentation for new test framework NightWatch JS and running tests 
   using Chrome Webdriver.

Out of all the bonus tasks for this assignment, the one I found the most enjoyable was creating 
the custom tooltip for user because I have always wanted to implement this on my personal projects 
and never got around to it. What I implemented is based on what I thought was the best way to convey 
a user's personality in a minimalist setting. Overall, it was very fun to code and probably my favourite 
feature of this project!

## WORKFLOW/TIMELINE

Task 1: Decide on frameworks to use (Hackaday, Express/Node, EJS, Greensock, and Nightwatch).

Task 2: Read documentation of each, install if necessary, set up service accounts for API calls 
and figure out how to feasibly integrate each one. 

Task 3: Set up main url routes for landing page, loading page and projects page using Node and 
try to set up successful tester API calls to main web databases, then render content into client EJS template.

Task 4: Try out main testing frameworks AKA Nightwatch, and make a dummy tester for a simple page 
content load validation. 

Task 5: Once frameworks are working, attempt to render more sophisticated data into EJS template and 
create basic UI modules to store data. Consistently use Nightwatch tester in background to check if 
page rendering behaviour is correct. 

Task 6: Design main logo, website name for landing and loading pages in online logo design web app, 
convert to SVG and animate using front-end JS framework. Also design UI/UX and background for these pages. 

![alt_text](https://github.com/hwanggit/Hackeye.io/blob/master/screenshots/Screen%20Shot%202019-04-14%20at%201.56.47%20PM.png)

![alt_text](https://github.com/hwanggit/Hackeye.io/blob/master/screenshots/Screen%20Shot%202019-04-14%20at%201.56.57%20PM.png)

Task 7: Begin working on UI aspects of the project page. First decide what metadata to show per project 
module, and then style the modules in a minimalist, modern and scalable fashion. Filter the data from 
the API call to achieve this. 

![alt_text](https://github.com/hwanggit/Hackeye.io/blob/master/screenshots/Screen%20Shot%202019-04-14%20at%203.22.40%20PM.png)

![alt_text](https://github.com/hwanggit/Hackeye.io/blob/master/screenshots/Screen%20Shot%202019-04-14%20at%201.56.20%20PM.png)

![alt_text](https://github.com/hwanggit/Hackeye.io/blob/master/screenshots/Screen%20Shot%202019-04-14%20at%202.09.13%20PM.png)

![alt_text](https://github.com/hwanggit/Hackeye.io/blob/master/screenshots/Screen%20Shot%202019-04-14%20at%209.41.55%20PM.png)

Task 8: Once there are little to no stylistic errors, retrieve max number of modules from API call, 
and test if it can handle all the data efficiently and display it.

![alt_text](https://github.com/hwanggit/Hackeye.io/blob/master/screenshots/Screen%20Shot%202019-04-16%20at%2010.03.59%20PM.png)

Task 9: For each module, add hover and click events to display user tool tip and to visit original 
Hackaday.io links. For interactive tool-tip, make necessary API calls using user Id's retrieved from 
backend project /GET requests. Store data locally and display it on hover.

![alt_text](https://github.com/hwanggit/Hackeye.io/blob/master/screenshots/Screen%20Shot%202019-04-14%20at%2011.10.49%20PM.png)

![alt_text](https://github.com/hwanggit/Hackeye.io/blob/master/screenshots/Screen%20Shot%202019-04-15%20at%207.35.11%20PM.png)

Task 10: Test again using Nightwatch to see if browser can transition from landing page to project page, 
and display all necessary data from first of many projects page. Also test if changing the URL to certain
pages renders that specific page from the list of projects. 

Task 11: Design and implement previous and next buttons that change the URL of the window on click, 
but does not reload the page. 

Task 12: Upon click of previous/next buttons, write function that achieves no-reload pagination via 
GET requests from client-side Javascript that dynamically updates page content. Also handle errors 
if next surpasses last page, or previous is clicked at start page. 

Task 13: Run Nightwatch tests to check URL changes if Next/Prev is clicked more than once. In addition, 
check overall behaviour of web app from landing page to flipping through project pages, AKA total possible 
paths of user interaction. 

Task 14: Once completed, host app on Heroku web server and test on different platforms 
(most likely does not work on mobile).
