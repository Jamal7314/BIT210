
function printError(elemId, hintMsg){
	document.getElementById(elemId).innerHTML = hintMsg;
}


var testNo= 1;
function newTestFunction(){
   
	var username = document.getElementById("pUsername").value;
	var pass = document.getElementById("pPassword").value;
	var name = document.getElementById("pName").value;
	var type = document.getElementById("pType").value;
	var symptoms = document.getElementById("pSymptoms").value;
    //for error messages
	var usernameError = passwordError = nameError = typeError = symptomsError = false;

	if (username != "") {
		printError("usernameError", "");
		if (pass != "") {
			printError("passwordError", "");
			if (name != "") {
				printError("nameError", "");
				if (type != "") {
					printError("typeError", "");
					if (symptoms != "") {
						printError("symptomsError", "");

						var table = document.getElementById("testTable");
						var row = table.insertRow();
						var TestId = "T" + testNo ;
						var date = "10/11/2020";
						var Status = "Pending";

						var TestIdCell = row.insertCell(0);
						var DateCell = row.insertCell(1);
						var NameCell = row.insertCell(2);
						var TypeCell = row.insertCell(3);
						var SymptomsCell = row.insertCell(4);
						var StatusCell = row.insertCell(5);

						TestIdCell.innerHTML =TestId;
						DateCell.innerHTML =date;
					    NameCell.innerHTML = name;
					    TypeCell.innerHTML =type;
					    SymptomsCell.innerHTML = symptoms;
					    StatusCell.innerHTML =Status;
					    testNo++;
					    alert("New 'Patient' and New 'Test' Created Successfully.");
					    document.getElementById("newPatient").reset();   
				    }
	                else{
							printError("symptomsError", "Please Enter the Symptoms");
							symptomsError = true;
						}
                } 
	            else{
						printError("typeError", "Please Select a Patient Type");
						typeError = true;
					}
				}
	        else{
					printError("nameError", "Please Enter The Patient Name");
					nameError = true;
				}
	        }
		    else
		        {
			printError("passwordError", "Please Enter The Password");
			passwordError = true;
	            }
	      }
		else{
			printError("usernameError", "Please Enter The Username");
			usernameError = true;
		}
	if ((usernameError || passwordError || nameError || typeError || symptomserror) == true) {
		return false;
	}
	else
	{
		return true;	
	}
}
	
function printError2(elemId, hintMsg){
	document.getElementById(elemId).innerHTML = hintMsg;
}

function newTestFunction2(){

	var name = document.getElementById("PName").value;
	var type = document.getElementById("PType").value;
	var symptoms = document.getElementById("PSymptoms").value;
    //for error messages
	var NameError = TypeErrorr = SymptomsError = false;

	if (name != "") {
		printError2("NameError", "");
		if (type != "") {
			printError2("TypeErrorr", "");
			if (symptoms != "") {
				printError2("SymptomsError", "");
				var table = document.getElementById("testTable");
				var row = table.insertRow();
				var TestId = "T" + testNo ;
				var date = "10/11/2020";
				var Status = "Pending";

				var TestIdCell = row.insertCell(0);
				var DateCell = row.insertCell(1);
				var NameCell = row.insertCell(2);
				var TypeCell = row.insertCell(3);
				var SymptomsCell = row.insertCell(4);
				var StatusCell = row.insertCell(5);

				TestIdCell.innerHTML =TestId;
				DateCell.innerHTML =date;
			    NameCell.innerHTML = name;
			    TypeCell.innerHTML =type;
			    SymptomsCell.innerHTML = symptoms;
			    StatusCell.innerHTML =Status;
			    testNo++;
			    alert("New Test Created Successfully.");
			    document.getElementById("oldPatient").reset();

				 
		    }
            else{
					printError2("SymptomsError", "Please Enter the Symptoms");
					SymptomsError = true;
				}
        } 
        else{
				printError2("TypeErrorr", "Please Select a Patient Type");
				TypeErrorr = true;
			}
		}
    else{
			printError2("NameError", "Please Enter The Patient Name");
			NameError = true;
		}

	if ((NameError || TypeErrorr || SymptomsError) == true) {
		return false;
	}
	else
	{
		return true;	
	}	
}








var TestHistoryData = [{'Id':'T21','Date':'05/04/2020','Name':'David','Type':'Returnee','Symptoms':'Cough', 'Status':'Complete','Result':'Negative','RD':'08/04/2020'},
               {'Id':'T55','Date':'07/06/2020','Name':'David','Type':'Close Contact','Symptoms':'Cough, Fever', 'Status':'Complete','Result':'Negative','RD':'10/06/2020'},
               {'Id':'T95','Date':'23/10/2020','Name':'David','Type':'Suspected','Symptoms':'Shortness of breath, Fever, Cough', 'Status':'Pending','Result':'--','RD':'--'},
                   ]  ; 

function ViewHistory(data) {

	var table = document.getElementById("testHistory");

	for (var i = 0; i < data.length; i++) {
		 var row = `<tr> 
		            <td>${data[i].Id}</td> 
		            <td>${data[i].Date} </td> 
		            <td>${data[i].Name}</td> 
		            <td>${data[i].Type}</td> 
		            <td>${data[i].Symptoms}</td> 
		            <td>${data[i].Status}</td> 
		            <td>${data[i].Result}</td> 
		            <td>${data[i].RD}</td>
		            </tr>` 

            table.innerHTML += row

		           
	      }

  }

  function TestReport(data) {

	var table = document.getElementById("testReport");

	for (var i = 0; i < data.length; i++) {
		 var row = `<tr> 
		            <td>${data[i].Id}</td> 
		            <td>${data[i].Date} </td> 
		            <td>${data[i].Name}</td>
		            <td>${data[i].Type}</td> 
		            <td>${data[i].Symptoms}</td> 
		            <td>${data[i].Status}</td> 
		            <td>${data[i].Result}</td> 
		            <td>${data[i].RD}</td>
		            </tr>` 

            table.innerHTML += row

		           
	      }

  }




function retriveTable(){
	var Id =document.getElementById("testId").value;
	var idError = false;
	if (Id != "") {
		printError("idError", "");
		if (Id == "T1") {
			printError("idError", "");

            var date = "05/10/2020";
			var Name = "John";
			var Type = "Returnee";
			var Symptoms = "Cough, Fever";
			var Status = "Pending";
			var result = "--"
			var resultDate = "--";
           
 	        var y = document.getElementById("updateList");

			var table = document.getElementById("retriveList");
			var row = table.insertRow();


			var TestIdCell = row.insertCell(0);
			var DateCell = row.insertCell(1);
			var NameCell = row.insertCell(2);
			var TypeCell = row.insertCell(3);
			var SymptomsCell = row.insertCell(4);
			var StatusCell = row.insertCell(5);
			var ResultCell = row.insertCell(6);
			var ResultDateCell = row.insertCell(7);

			TestIdCell.innerHTML =Id;
			DateCell.innerHTML =date;
		    NameCell.innerHTML = Name;
		    TypeCell.innerHTML =Type;
		    SymptomsCell.innerHTML = Symptoms;
		    StatusCell.innerHTML =Status;
		    ResultCell.innerHTML = result;
		    ResultDateCell.innerHTML = resultDate;
		    document.getElementById("testId").value = ""; 
		    table.style.display = "block";
 		    y.style.display = "none";
		}
		else{
			printError("idError", "Test Not Found, Please Enter a valid ID");
			idError = true;
		    }
    }
    else
    {
    	printError("idError", "Enter The Test ID");
    	idError = true;
    }

    if (idError== true) {
    	return false;
    }
    else{
    	return true;
    }

}
    

function updateTest(){
	var result = document.getElementById("tResult").value;

	var resultError = false;
	if (result != "") {
		printError("resultError", "");

            var table = document.getElementById("updateList");
			var row = table.insertRow();
			var TestId = "T1" ;
			var date = "05/10/2020";
			var Name = "John";
			var Type = "Returnee";
			var Symptoms = "Cough, Fever";
			var Status = "Complete";
			
 	        var y = document.getElementById("retriveList");
 		
			
			var resultDate = "05/11/202";

			var TestIdCell = row.insertCell(0);
			var DateCell = row.insertCell(1);
			var NameCell = row.insertCell(2);
			var TypeCell = row.insertCell(3);
			var SymptomsCell = row.insertCell(4);
			var StatusCell = row.insertCell(5);
			var ResultCell = row.insertCell(6);
			var ResultDateCell = row.insertCell(7);

			TestIdCell.innerHTML =TestId;
			DateCell.innerHTML =date;
		    NameCell.innerHTML = Name;
		    TypeCell.innerHTML =Type;
		    SymptomsCell.innerHTML = Symptoms;
		    StatusCell.innerHTML =Status;
		    ResultCell.innerHTML = result;
		    ResultDateCell.innerHTML = resultDate;
		    alert("Test Result Updated Successfully.")
		    document.getElementById("tResult").value = "";
		   
 		    table.style.display = "block";
 		    y.style.display = "none";
        }
    else
    {
    	printError("resultError", "Enter The Test Result");
    	resultError = true;
    }

    if (resultError== true) {
    	return false;
    }
    else{
    	return true;
    }
 }

 function showTable1(){

 	var x = document.getElementById("table1");
 	var y = document.getElementById("table2");
 		x.style.display = "block";
 		y.style.display = "none";
 }



function SignUp(){
	let UserCreate=false;
	if(document.getElementById('username').value.length!=0){
		if(document.getElementById('password').value.length!=0){
			if(document.getElementById('fullname').value.length!=0){	
				if(document.getElementById('UserType').value !=""){
					var user = UserObj();
					alert("Create sucess");
					document.getElementById("signUp").setAttribute("action", "Login.html");
					UserCreate = true;
				}
				else
					alert("User Type cannot be empty");
			}
			else
				alert("Full name cannot be empty");
		}
		else
			alert("password cannot be empty");
	}
	else
		alert("User name cannot be empty");
	if(UserCreate == true){
		alert("Create Success");
		return true;
	}
	else
		return false;
}

function UserObj(){
	var UserArray = {};
	UserArray["UserName"] = document.getElementById('username').value;
	UserArray["Password"] = document.getElementById('password').value;
	UserArray["Name"] = document.getElementById('fullname').value;
	UserArray["UserType"] = document.getElementById('UserType').value;

	return UserArray;
}


var UserData = [{username:"12",password:"12",fullname:"12",UserType:"Manager"},{username:"23",password:"23",fullname:"23",UserType:"Tester"}
               ,{username:"34",password:"34",fullname:"34",UserType:"Patient"},{username:"45",password:"45",fullname:"45",UserType:"Officer"}];

function Login(){
	var hasUser = false;
	var LoginName = document.getElementById('LoginName').value;
	var LoginPassword = document.getElementById('LoginPassword').value;
	for(var i = 0;i<UserData.length;i++){
		if(LoginName == UserData[i]['username']){
			hasUser = true;
			var CorrectPassword = false;
			if(LoginPassword == UserData[i]['password']){
				CorrectPassword = true;
				if(UserData[i]['UserType'] == "Manager"){
					document.location = "ManagerPage.html";
				}
				else if(UserData[i]['UserType'] == "Tester"){
					document.location = "TesterPage.html";
				}
				else if(UserData[i]['UserType'] == "Patient"){
					document.location = "ViewTestingHistory.html";
				}
				else{
					document.location = "GenerateTestReport.html";
				}
			}
		}
	}
	if(hasUser == false){
		alert("username is wrong")
	}
	else if(CorrectPassword == false){
		alert("Password is wrong")
	}
}

function showPassword(){
	var password = document.getElementById('password');
	if(password.type === "password"){
		password.type = "text";
	}
	else{
		password.type = "password";
	}
}

var TCnum = 0;
function createList(){
	var table = document.getElementById("TCList");
	var tbody = table.getElementsByTagName("tbody")[0];
	var row = tbody.insertRow(tbody.length);
	var TestCentre = TestCentreObj();
 	var Numcell = row.insertCell(0);
 	Numcell.style.scope = 'row';
 	Numcell.innerHTML = TestCentre.TCnum;
  	var IDcell = row.insertCell(1);
  	IDcell.style.scope = 'col';
  	IDcell.innerHTML = TestCentre.TestCentreID;
  	var Namecell = row.insertCell(2);
  	Namecell.style.scope = 'col';
  	Namecell.innerHTML = TestCentre.TestCentreName;
  	document.getElementById('TestCentreName').value = "";
}

function TestCentreObj(){
	var TestCentreArray = {};
	TestCentreArray["TCnum"] = ++TCnum;
	TestCentreArray["TestCentreID"] = "T" + TCnum;
	TestCentreArray["TestCentreName"] = document.getElementById('TestCentreName').value;

	return TestCentreArray;
}

var TKnum = 0;
function createList2(){
	if(document.getElementById("TestKitName").value.length == 0)
		alert("Test Kit Name cannot be empty");
	else if(document.getElementById("FirstStock").value.length == 0)
		alert("Stock cannot be empty");
	else{
		var table = document.getElementById("TKList");
		var tbody = table.getElementsByTagName("tbody")[0];
		var row = tbody.insertRow(tbody.length);
		var TestKit = TestKitObj();
		var Numcell = row.insertCell(0);
	 	Numcell.style.scope = 'row';
	 	Numcell.innerHTML = TestKit.TKnum;
	 	var IDcell = row.insertCell(1);
	 	IDcell.className = "TKID";
	 	IDcell.style.scope = 'col';
	 	IDcell.innerHTML = TestKit.TestKitID;
	  	var Namecell = row.insertCell(2);
	  	Namecell.style.scope = 'col';
	  	Namecell.innerHTML = TestKit.TestKitName;
	  	var Stockcell = row.insertCell(3);
	  	Stockcell.className = "TKStock";
	  	Stockcell.innerHTML = TestKit.AvailableStock;
	  	document.getElementById("TestKitName").value = "";
	  	document.getElementById("FirstStock").value = "";
	  }
}

function TestKitObj(){
	var TestKitArray = {};
	TestKitArray["TKnum"] = ++TKnum;
	TestKitArray["TestKitID"] = "T" + TKnum;
	TestKitArray["TestKitName"] = document.getElementById('TestKitName').value;
	TestKitArray["AvailableStock"] = document.getElementById('FirstStock').value;

	return TestKitArray;
}

function ManageList2(){
	var id = document.getElementById('TestKitID').value;
 	var newStock = document.getElementById('NewStock').value;
	var tkid = document.getElementsByClassName("TKID");
	var tkstock = document.getElementsByClassName("TKStock")
  	var haveid = false;
	if(id.length <1){
	  	alert("Test kit id cannot be empty");
	}
	else if(newStock.length <1)
		alert("Available stock cannot be empty")
	else{
		for(var i =1;i< tkid.length;i++){
	  		if(id ==tkid[i].innerHTML){
	  			haveid = true;
	  			tkstock[i].innerHTML = newStock;
	  			document.getElementById("TestKitID").value = "";
	  			document.getElementById("NewStock").value = "";
	  		}
	  	}
	  	if(haveid == false)
	  		alert("The test kit id is not exist")
	}
}

function CreateTester(){
	let TesterCreate = false;
	if(document.getElementById('TesterName').value.length!=0){
		if(document.getElementById('TesterPassword').value.length!=0){
			if(document.getElementById('TesterFullName').value.length!=0){
				var tester = TesterObj();
				TesterCreate = true;
			}
			else
				alert("Full name cannot be empty");
		}
		else
			alert("password cannot be empty");
	}
	else
		alert("User name cannot be empty");
	if(TesterCreate == true){
		alert("Create Success");
		return true;
	}
	else
		return false;
}

function showTesterPassword(){
	var TesterPassword = document.getElementById('TesterPassword');
	if(TesterPassword.type === "password"){
		TesterPassword.type = "text";
	}
	else{
		TesterPassword.type = "password";
	}
}

function TesterObj(){
	var TesterArray = {};
	TesterArray["UserName"] = document.getElementById('TesterName').value;
	TesterArray["Password"] = document.getElementById('TesterPassword').value;
	TesterArray["Name"] = document.getElementById('TesterFullName').value;
	TesterArray["UserType"] = "Tester";

	return TesterArray;
}

function showRegister(){
	document.getElementById('RegisterTK').style.display ='block';
	document.getElementById('ManageTK').style.display ='none';
}

function showManage(){
	document.getElementById('RegisterTK').style.display ='none';
	document.getElementById('ManageTK').style.display ='block';
}