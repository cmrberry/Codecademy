//This is from the Codecademy Choose Your Own Adventure 2 Exercise in the JS Lessons
//This will determine if the user should say tachnun that day.
//Tachnun is a certain type of Jewish prayer that is only said on days when there is nothing
//particularly special or joyous about that day.


//Ask the user if they think they need to say tachnun:

var user = prompt("Do we have to say tachnun today?").toUpperCase();

//Based on answer, respond:

switch(user) {
    case "NO":  //If they answer no, believe them.
        confirm("Awesome, enjoy the break!");
        break;
    case "YES":  //If they answer yes, double check.
        var check = prompt("Are you sure?").toUpperCase();
        if (check === "YES" && user === "YES") {  //If they're still sure, believe them
            confirm("Okay, go say tachnun then...");
            break;
        } else {  //If they answer anything else, pretend they're not sure at all and skip to dunno/default
        }
    case "DUNNO":
    default:  //Ask them questions to figure out whether or not they should really say tachnun
        confirm("Sounds like you're confused, let's figure it out together.");
        var holiday = prompt("Is today a holiday, Chol haMoed, or Rosh Chodesh?").toUpperCase();
        var prison = prompt("Did a Rebbe get out of prison today?").toUpperCase();
        
        if (holiday === "YES" || prison === "YES") {  //Check if they have any good reason not to
            confirm("Hmmm... sounds like no tachnun to me!!");
        } else {
            confirm("Unless there is a newlywed nearby, you should probably say tachnun... Sorry!");
        }
}
