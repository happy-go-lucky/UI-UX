// would be nice to have it loaded from database
const USER_MESSAGE = "This activity to help students learn about the priorities " +
					"and concerns work team members will have during a worker's injury/illness." +
					"<br><br>Please choose from the one of the options below to learn about them";
var tempData = null;

function onMemberTypeSelect(event)
{
	if ( tempData != null )
	{
		document.getElementById("instructions").innerHTML = "";
		document.getElementById("descriptionColumn").innerHTML = tempData;
		tempData = null;
	}
	var selectedOption = document.getElementById("teamMemberType").value;
	updatePriorities( selectedOption );
	updateChallenges( selectedOption );
	updatePicture( selectedOption );
}

function updatePriorities( selectedOption )
{
	var data = TEAM_DATA.members[selectedOption].Priorities;
	var dataLength = data.length;
	var objectMembers;
	var output = "<ul>";
	var ii = 0;
	while ( ii < dataLength )
	{
		output += "<li>" + data[ii] + "</li>";
		ii++;
	}
	output += "</ul>";
	document.getElementById("priorities").innerHTML = output;
}

function updateChallenges( selectedOption )
{
	var data = TEAM_DATA.members[selectedOption]['Concerns and Challenges'];
	var dataLength = data.length;
	var objectMembers;
	var output = "<ul>";
	var ii = 0;
	while ( ii < dataLength )
	{
		output += "<li>" + data[ii] + "</li>";
		ii++;
	}
	output += "</ul>";
	document.getElementById("concernsAndChallenges").innerHTML = output;
}

function updatePicture( selectedOption )
{
	var data = TEAM_DATA.members[selectedOption].Picture;
	document.getElementById("picture").innerHTML = "<img src=\"images\/" + data + "\" alt=\"team memeber\">";
}

function updateList()
{
	userInstructions();
	
	var data = TEAM_DATA.members;
	var dataLength = data.length;
	var objectMembers;
	var output = "<option selected disabled>Choose an option</option>";
	var ii = 0;
	while ( ii < dataLength )
	{
		output += "<option value=" + "\"" + ii + "\">" + data[ii].teamMember + "</option>";
		ii++;
	}
	//console.log( output );
	document.getElementById("teamMemberType").innerHTML = output;
}

function userInstructions()
{
	tempData = document.getElementById("descriptionColumn").innerHTML;
	document.getElementById("descriptionColumn").innerHTML = "<p id=\"instructions\">" + USER_MESSAGE + "</p>";
}
