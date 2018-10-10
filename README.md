# New York Times Article Find and Save

[Test it here](https://agile-tor-19181.herokuapp.com/) 
This is a MERN (Mongo, Express, React and Node) project that searches The New York Times Search API for articles that meet the search criteria. It also allows the user to save selected articles to a MongoDB database. 

Below are step by step instructions to help you recreate the project yourself. If you have questions, please do not hesitate to reach out. 

### Getting Started ###
I believe the best way to approach this full stack development project is to start with the client-side development. This means starting with react. React is a JavaScript library for building userinterfaces developed by Facebook. Since it is created in JavaScript, you can pass data rich objects throughout your application without slowing down the user experience and the components effortlessly adjust to the screenwidth of the user allowing for a wonderful experience. For more information on React, visit their site [here](https://reactjs.org/).

From terminal create your folder where your project will live. Your file structure is extremely important for this application to work correctly. I like to cd (change directory) into my Desktop for every new project. `cd Destop` is the command I use. 
Once there, you can make a folder/director with the `mkdir <foldername>` command. I've chosen nyt-scrubber for this application, so my command looks like this, `mkdir nyt-scrubber`. 

Next it's time to launch your React application. First cd into the new folder. Use the command `npx create-react-app my-app` to launch the react site. You know you have been successful when you see notes from react on the next steps and you'll see "successfully compiled!" written in green. 

Then cd into my-app folder and run the command yarn start. Within a few moments you will see the React started site up and running. It will look like this: ![react website](react.png)

It's important to notice that React runs on localhost:3000. This is important to realize because your full stack website will run on two ports. Thus, you have to specify which ports you are using otherwise you will receive errors and your application will not launch. 

Let's take a moment to review the files and folders React install for you and your development experience. ![react files](foldersReact.png). The node_modules are the npm packages react install to give you an effortless development experience. It gives the appearence that your website is already being hosted on a server and it also gives you instantaneous code compiling that allows you to instantly see the changes your code is making to the user experience. If you are planning on adding this project to github, now is the time to create a git ignore folder with the command `touch .gitignore` and add `node_modules` to it. This way, your github won't be bogged down with files. Your package.json has all the information you need to download the files and re-create this project again. 

Next, use the command `git init` to start a repository on github for this project. If you notice, the file structure, you'll see there is already a readme created for you from React. Use this Readme because it has tons of information to help you further develop this website. 

I used bootstrap's form to quickly create my questions with a correspondng numeric scale(from 1-5), and a submit button on my survey.html file.

Prerequisites
This project utilizes Node.js, Express, and Body-Parser. You need to have Node.js installed on your computer before building this application. If you do not have Node.js already installed on your machine, you can use this link. Once you have node.js you'll be able to start building your own friend finding application.

Installing
Once you're in your file that will hold your application, install your npm packages. You can build your folder from command line with mkdir function followed by the name of your folder. For example: mkdir friendFinder will create a folder called, "friendFinder". Next from terminal, move into the file with this command from terminal: cd friendFinder.

Now that your are in your file. create the files you new to run this application. The touch command will create your file. Next, create your server.js file. This is file that will run and connect all of the pieces of this project to create a working application. You will have all of your routes and corresponding files and logic connected to this page to create this program.

After you touch server.js make your app directory with the command mkdir app. Enter this fold with cd app. Now that you are in this file, repeat the earlier commands until you have a file/folder system that looks like the image below. all of your other files will be in your app directory. To move out of a file use the command cd ../, and to move out of two folders try cd ../../.

file structure

At this point, you should create your package.json file with the command npm init. This will give you create for creating this project and it will also continuously add your npm packages to it. This will help anyone looking to fork your project and recreate it. When you run the npm init command from command line, you will be ask a series of questions such as Project Name, the version of it, the repo, and the author. It's pretty self explanatory and easy to follow.

Now you'll want to install your npm packages and finish setting up your environment. The two packages are express, and body-parser. User the commands npm install express and npm install body-parser respectively to add these packages to your folder.

What do these do? Express allows you to build routes for your website. So any file you want to host on your server and whatever route you specify like "/", or "/api", that hang off the domain are created by express. For more information on express.js, see the npm information here.

Body-parser allows us to send and recieve JSON objects to and from the server. For more information on this package, look here.

Building the application
Your environment is all set and ready to go! If you have not, build out your home.html and survey.html pages. I used Bootstrap 4 to build my site. Remember to use the jQuery and other links from Bootstrap so that all button presses or animated function will work appropriately.

Next in your friend.js file, you will want to build out 3 friends with their names, a link to a photo of them, and an array of scores (all different). This dummy text is to test whether or not your logic is working correctly.

I created an array name users and in it I have 3 objects. The array in each object has the same number of questions as in the survey. Remember to module.exports = users; at the bottom of this file so that you can use this information in another file on your site.

Now the fun begins! Next, you'll want to go back to your survey.html file. Here we are going to create an "on click" event that will take the users data, turn it into an object and compare it against the other users in our array. I used jQuery to run my on click function. Remember to have a link to jQuery's CDN.

Below your HTML and CSS for the page include <script> logic goes here </script> tags. This is your 'on click' event and it will turn the information from the user into an object. The object is the newUser. The $("#submit") ties the function to the submit button by using jQuery to connect to the button via the button's id. The newUser object has 3 key value pairs. The name of the user, the user's picture and an array of scores from the survey. Here is the code below:

$("#submit").on("click", function (event) { event.preventDefault(); var newUser = { name: $("#name").val().trim(), photo: $("#pic").val().trim(), scores: [ parseInt($("#Q1").val()), parseInt($("#Q2").val()), parseInt($("#Q3").val()), parseInt($("#Q4").val()), parseInt($("#Q5").val()), parseInt($("#Q6").val()), parseInt($("#Q7").val()), parseInt($("#Q8").val()), parseInt($("#Q9").val()), parseInt($("#Q10").val()) ] }

The next step is to send that information to be compared against the other users in the array. beneath that code use this function:

` $.post("/survey", newUser) .done(function (winner) { $("#title").text("You matched with " + winner.name); $("#photo").attr("src", winner.photo); $("#photo").html("") $("#myModal").modal("toggle");

                //alert("you matched with " + winner.name + winner.photo);
            });`
` This code sends the infomration to the /survey route as an object named, "newUser".

Disregard the .done promise right now. It's not being used yet. Now, look at htmlRoutes.js. Look at this route: ` app.post("/survey", function (req, res) { newUser = req.body; theBigCompare(newUser); //res.json(winner);

return res.json(winner);
});`

This post takes the newUser object and passes it into a function called, "theBigCompare". The res (result) from that function is shared on the /survey page.

If you look towards the top of the htmlRoutes.js file you will see the bigCompare function and the global variables associated with it. Here is the code below: `var users = require("../data/friends.js") var newUser = null; var result = null; var winner = null; var winnerImg = null;

function theBigCompare(newUser) { for (i = 0; i < users.length; i++) { var newarray = newUser.scores.map(function (item, index) {

  if (item > users[i].scores[index]) {

    return item - users[i].scores[index];

  } else {
    return users[i].scores[index] - item;
  }
})
console.log(newarray);

var sum = null;

const reducer = (accumulator, currentValue) => accumulator + currentValue;
sum = newarray.reduce(reducer);
console.log("sum = " + sum);

if (result === null) {
  result = sum;
  winner = users[i];
  console.log("first match is " + users[i].name + " with a sum of " + sum);

} else if (result > sum) {
  result = sum;
  winner = users[i];
  winnerImg = users[i].photo
  console.log("new match" + users[i].name + "with a sum of " + sum);

} else if (result < sum) {

  console.log("do nothing");

} else {
  console.log("not a better match, " + users[i].name + "is still the better match " + result);
}
}`

The first step I did was require the array of users already in the system by connecting the data in the variable users. Next, I set some global variables I need for my logic. Those are the newUser, result, and winner. Next the function begins. By passing in the newUser, I'm going to compare the scores from all of the users against the score of the newUser. By using the map function, I'm comparing each score from the survey between the users. My if/else statement allows me to compare each score without getting negative numbers.

Next I push this newarray variable(which is an array of numbers that is the difference between the newUser and the current user) and use the reduce function to get the sum total of the new array.

Finally, I use if else statements to compare all of the new reduced numbers to find the smallest number. The smallest number is the user that answer the most like the newUser and thus is the match.

Versioning This is the first version of this project.

Author Megan Anthony

License This project is unlicensed .

Acknowledgments Thank you to Ed Brennan for walking me through the logic to build this application.
