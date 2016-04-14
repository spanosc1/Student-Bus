function Student(name, gender, grade, GPA, detentions, sleepingInClass, catchPhrase)
{
	this.name = name;
	this.gender = gender;
	this.GPA = GPA;
	this.detentions = detentions;
	this.sleepingInClass = sleepingInClass;
	this.catchPhrase = catchPhrase;
	this.canStudentHaveFun = function()
	{
		if(this.detentions < 10 && this.GPA > 2)
		{
			console.log(this.name + " can have fun!");
		}
		else
		{
			console.log("No fun!");
		}
	}
}
module.exports = Student;