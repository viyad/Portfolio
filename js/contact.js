function ProcessEnquiry()
{
	var valid = false;
	clearAllErrorMessage();
	valid = ValidateName();
	valid = ValidteEmail();
	
	return valid;
}

function clearAllErrorMessage()
{
	document.getElementById("errName").innerHTML = "";
	document.getElementById("errEmail").innerHTML = "";
}

function ValidateName()
{
	document.getElementById("errName").innerHTML = "";
	
	var name = document.getElementById("name").value;
	var valid = true;
	/* Validate the name, it must contain at least two letters (uppercase and lowercase) */
	if (name == "")
	{
		document.getElementById("errName").innerHTML = "Name is required.";
		valid = false;
	}
	
	return valid;
}

function ValidteEmail()
{
	document.getElementById("errEmail").innerHTML = "";
	var email = document.getElementById("email").value;
	var valid = true;
	
	/* At least one contact field (email or phone) must be entered */
	if (email == "")
	{
		document.getElementById("errEmail").innerHTML = "Email is required.";
		valid = false;
	} else if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
	{ /* Validate email address, it must contain a valid email format */
		document.getElementById("errEmail").innerHTML = "Invalid email format.";
		valid = false;
	} 
	
	return valid;
}