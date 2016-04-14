function Bus(driverName, color, gas)
{
	var studentsOnTheBus = [];
	this.driverName = driverName;
	this.color = color;
	this.gas = gas;
	this.studentEntersBus = function(student)
	{
		studentsOnTheBus.push(student);
		console.log(student.name + " entered " + this.driverName + "'s bus!")
	}
	this.busChatter = function()
	{
		for(var i = 0; i < studentsOnTheBus.length; i++)
		{
			studentsOnTheBus[i].canStudentHaveFun();
		}
	}
}
module.exports = Bus;