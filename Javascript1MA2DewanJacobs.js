//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance

var catchPhrase = function (somethingSomething) {
    console.log(somethingSomething)
}

var HonarableMember = function (){
    var name, politcalParty;
}

HonarableMember.prototype.catchPhrase = catchPhrase;

firstHonarableMember = new HonarableMember;
firstHonarableMember.name = "Julias Malema";
firstHonarableMember.politicalParty = "EFF";
firstHonarableMember.catchPhrase('Pay back da money'); 

// Notes: This example was directly taken from Lynda.com JavaScript: Functions with the main content changed slightly 

//2. Create an array of numbers from 1 - 10; slice the 5th number in the array

var myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var myNumber5 = myNumbers.slice(5);

//3. Delete the last number in the array that you created above.

myNumbers.pop();

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas:
 
   function strawberryReplacement (){ 
       var myStr = "Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.";

     var newstr = str
     .replace(/Strawberries/g, "Bananas")
     .replace(/strawberries/g, "bananas")
     .replace(/Strawberry/g, "Banana")
     .replace(/strawberry/g, "banana" );   

    console.log(newstr ); 
    }
reStrawberry()

// Notes: i know that i could have shortened the code using the '/gi' flag but how would i have made the banana replacement with a capital?



//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.


var thingsThatAreShit = ["Manchester Shity", " Chelski", " Tottenham Shitspurs", " WankChester United"];


document.getElementById("footballTeams").innerHTML = "The current array contains football teams:<br> " + thingsThatAreShit;

function question5Function() {
  var removed = thingsThatAreShit.splice(0, 4, "VW"," Toyota", " Opel", " Tata"); 
  document.getElementById("cars").innerHTML = "Now the array contains cars:<br>" + thingsThatAreShit; 
}

console.log(thingsThatAreShit)

//Notes: This example was directly taken from 'https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_splice_return' with the main content changed slightly 

//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.

var people = [
    { name: 'Julias Malema', nickname: 'Idiot'},
    { name: 'Helen Zille', nickname: 'GodZille'},
    { name: 'Jacob Zuma', nickname: 'Butternut'},
]

var names = people.map(function(people) {
    return people.name
})

console.log(names)

//7. Create a simple function that logs the date.


function whatIsTheDate (d) {
    var d = new Date();
        console.log(d);
}
whatIsTheDate();