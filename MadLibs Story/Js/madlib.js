console.log("It's working!");


function write(){
    console.log("Inside the write function");

//This is the start for the Written Questions//

var username = document.getElementById('name').value;
console.log(username);

var col = document.getElementById('color').value;
console.log(col);
 
var noise = document.getElementById('sound').value;
console.log(noise);

var fru = document.getElementById('fruit').value;
console.log(fru);

var FlyA = document.getElementById('flying animal').value;
console.log(FlyA);

//This is the start of the Option Questions//

var build= document.querySelector('input[name="building"]:checked').value;
console.log(build);

var obj= document.querySelector('input[name="object"]:checked').value;
console.log(obj);

var chr= document.querySelector('input[name="chair"]:checked').value;
console.log(chr);

var ani= document.querySelector('input[name="animal"]:checked').value;
console.log(ani);

var han= document.querySelector('input[name="hand"]:checked').value;
console.log(han);
//ends written questions

document.getElementById('output').innerHTML += "<img class='img-fluid' src='images/OutsideHouse.jpg' alt='stories'>";

document.getElementById('output').innerHTML += "<h3> The full moon was high in the sky, for Barry and his friends, however this was going to be a night to remember, they had decided to sneak into an abandoned " +build+ " .The boys had everything they needed flashlights, food, cameras, they even brought " +obj+ " .The final preparations were made. They were going into the building tonight Barry pushed the doors and with a loud screech they opened, in a flash a bunch of " +ani+ " ran out. The boys got spooked but that didn't stop them from their mission, to see the ghost of Miss " +username+ " a legend in the town, always looking through the windows and screeching in the cold decaled building. Barry was looking around with his flashlight until he spotted something ahead it looked to be a " +col+ " dress shredded and placed gently on a chair. “Hey guys” said Barry “Take a look at this” the boys rushed over examining the dress but when one of them went to touch it a bat flew down and went to attack them. The boys ran up the many flights of stairs until making it to the top and shutting the door. The boys were out of breath thinking they were safe until they heard " +noise+ " behind the door, “Look” said one of the boys shinning their flashlight ahead there they saw Miss " +username+ " her rotten skeleton hunched over on a " +chr+ " looking out the window. “We found her” they all chanted celebrating Barry fumbled to try and pull out his camera to finally take a picture but when he lifted it up that's when he saw, she was facing him holding out a " +fru+ " .“Eat” She whispered as dust came out her mouth Barry started to step back “Guys.” She screeched “Eat” again but this time hundreds of " +FlyA+ " flew at them they screamed and ran out not looking back until they made it outside, panting one of the boys finally spoke “good thing we made it out safely isn't that right Barry” but the hand he was holding wasn't Barry's but a " +han+ ".The boys looked up in fear at the window where they could see Barry's face plastered with fear as he was banging the glass and shouting for help, but she was behind him lifting her hand when a crack of lighting struck the building the boys covered their eyes, when they finally looked up all they could see was her a crooked smile and the fruit she was holding in her hand.</h3>"


document.getElementById('output').innerHTML += "<h2> The end..... </h2>"; 

document.getElementById('output').innerHTML += "<h2> Or is it? </h2>"; 

}