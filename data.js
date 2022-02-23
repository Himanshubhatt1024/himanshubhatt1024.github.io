
function hello(val)
{
	var strEmployees = "";
	var strEmployeeTable = "";
	
	strEmployeeTable = '<table class="table table-hover table-bordered">';
	strEmployeeTable = strEmployeeTable + '<thead class="thead-dark">';
	
	strEmployeeTable = strEmployeeTable + '<tr><th scope="col">#</th><th scope="col">Name</th><th scope="col">Place</th><th scope="col">State</th></tr>';
	strEmployeeTable = strEmployeeTable + '</thead>';
	
	strEmployeeTable = strEmployeeTable + '<tbody>';
	if(val == "odd")
	{
		for(i=0;i<employeeData.length;i+=2)
		{
			strEmployeeTable = strEmployeeTable + '<tr class="table-info"> <th scope="row">'+(i+101)+'</th> <td>'+employeeData[i].First+''+" "+''+employeeData[i].Last+'</td> <td>'+employeeData[i].Place+'</td> <td>'+employeeData[i].State+'</td> </tr>';
        }
	}
	else if(val == "even")
	{
		for(i=1;i<employeeData.length;i+=2) 
	    {
			strEmployeeTable = strEmployeeTable + '<tr class="table-info"> <th scope="row">'+(i+101)+'</th> <td>'+employeeData[i].First+''+" "+''+employeeData[i].Last+'</td> <td>'+employeeData[i].Place+'</td> <td>'+employeeData[i].State+'</td> </tr>';
        }
	}
	
	else
	{
		for(i=0;i<employeeData.length;i++) 
		{ 
			if(i%2==0)
			{
				strEmployeeTable = strEmployeeTable + '<tr class="table-light"> <th scope="row">'+(i+101)+'</th> <td>'+employeeData[i].First+''+" "+''+employeeData[i].Last+'</td> <td>'+employeeData[i].Place+'</td> <td>'+employeeData[i].State+'</td></tr>';
			}
			else
			{
				strEmployeeTable = strEmployeeTable + '<tr class="table-info"> <th scope="row">'+(i+101)+'</th> <td>'+employeeData[i].First+''+" "+''+employeeData[i].Last+'</td> <td>'+employeeData[i].Place+'</td> <td>'+employeeData[i].State+'</td> </tr>';
			}
		}
	}
	
	strEmployeeTable = strEmployeeTable + '</tbody>';
	strEmployeeTable = strEmployeeTable + '</table>';

	
for(var i=0;i<employeeData.length;i++)
{
  strEmployees = strEmployees + (i+1)+ "." +" " + employeeData[i].First +" "+ employeeData[i].Last+","+ employeeData[i].Place + '<br>';
}

document.getElementById("employeeData").innerHTML = strEmployeeTable;
}
function clear1() 
{
document.getElementById("employeeData").innerHTML = " ";
}

function clear1() 
{
document.getElementById("employeeData").innerHTML = " ";
}

function employeenumber(placeholder)
{
	var strEmployees = "";
	var strEmployeeTable = "";
	
	strEmployeeTable = '<table class="table table-hover table-bordered">';
	strEmployeeTable = strEmployeeTable + '<thead class="thead-dark">';
	
	strEmployeeTable = strEmployeeTable + '<tr><th scope="col">#</th><th scope="col">Name</th><th scope="col">Place</th><th scope="col">State</th></tr>';
	strEmployeeTable = strEmployeeTable + '</thead>';
	
	strEmployeeTable = strEmployeeTable + '<tbody>';
	for(var i=0;i<employeeData.length;i++)
	{
		if((i+101)==placeholder)
		{
		
			strEmployeeTable = strEmployeeTable + '<tr class="table-info"> <th scope="row">'+(i+101)+'</th> <td>'+employeeData[i].First+''+" "+''+employeeData[i].Last+'</td> <td>'+employeeData[i].Place+'</td> <td>'+employeeData[i].State+'</td></tr>';

		}
	}
	strEmployeeTable = strEmployeeTable + '</tbody>';
	strEmployeeTable = strEmployeeTable + '</table>';
	for(var i=0;i<employeeData.length;i++)
	{
		strEmployees = strEmployees + (i+1)+ "." +" " + employeeData[i].First +" "+ employeeData[i].Last+","+ employeeData[i].Place + '<br>';
	}
	document.getElementById("employeeData").innerHTML = strEmployeeTable;
}

 var employeeData = [{
  "First": "Ankit",
  "Last": "Gupta",
  "Place": "Firozabad",
  "State": "Uttar Pradesh"
},
{
  "First": "Jothilaxmi",
  "Last": "V",
  "Place": "Rajapalayam",
  "State": "Tamil Nadu"
},
{
  "First": "Himanshu",
  "Last": "Bhatt",
  "Place": "Nainital",
  "State": "Uttarakhand"
},
{
  "First": "Salman",
  "Last": "Khan",
  "Place": "Mumbai",
  "State": "Maharashtra"
},
{
  "First": "Sunny",
  "Last": "Deol",
  "Place": "Amritsar",
  "State": "Punjab"
},
{
  "First": "Ghanshyam",
  "Last": "Bhatt",
  "Place": "Lucknow",
  "State": "Uttar Pradesh"
},
{
  "First": "Udhay",
  "Last": "Kumar",
  "Place": "Banglore",
  "State": "Karnataka"
},
{
  "First": "Karan",
  "Last": "Adhikari",
  "Place": "Almora",
  "State": "Uttarakhand"
},
{
  "First": "Kamal",
  "Last": "Bhatt",
  "Place": "Haldwani",
  "State": "Uttarakhand"
},
{
  "First": "Narendra",
  "Last": "Modi",
  "Place": "Ahmedabad",
  "State": "Gujrat"
}]

