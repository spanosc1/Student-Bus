var prompt = require('prompt');
var Bus = require('./bus.js');
var Student = require('./student.js');
var studentsNames = ['Chris', 'Mike', 'Kevin', 'Alex', 'Nico'
					, 'Johnny', 'James', 'Darlene', 'Tommy', 'Jack'
					, 'Jake', 'Rachel', 'Nina', 'Adam', 'Bryant'
					, 'Danny', 'Greg', 'Michael', 'Russ', 'Rich'];
var studentGenders = ['Male', 'Male', 'Male', 'Male', 'Male'
					 , 'Male', 'Male', 'Female', 'Male', 'Male'
					 , 'Male', 'Female', 'Female', 'Male', 'Male'
					 , 'Male', 'Male', 'Male', 'Male', 'Male'];
var studentGrade = ['senior', 'junior', 'senior', 'senior', 'junior'
				   , 'sophomore', 'freshman', 'senior', 'senior', 'freshman'
				   , 'junior', 'junior', 'junior', 'senior', 'sophomore'
				   , 'sophomore', 'senior', 'junior', 'senior', 'freshman'];
var studentGPA = ['4', '3', '4', '3', '3', '3', '4', '3', '4', '2'
				 , '2', '3', '4', '3', '4', '4', '4', '3', '4', '2'];
var studentDetentions = [0, 1, 2, 4, 2, 1, 0, 2, 0, 0, 0, 11, 12, 7, 4, 13, 2, 7, 9, 10];
var sleeping = ['no', 'no', 'yes', 'yes', 'no', 'no', 'no', 'no', 'no', 'no'
			   , 'no', 'yes', 'no', 'yes', 'no', 'yes', 'no', 'no', 'no', 'no'];
var phrase = ['Wait for a jam in the dishes!', 'Google their exploding tail pipe.', 'Hack his talking experience, big style.', 'We should ask for a break in the skates.'
			 , 'Now back to the lady!', 'Baby allowed!', 'Where\'s the wicked mentor?', 'It\'s an image by the way.'
			 , 'Over to mama!', 'Fire the volume of the floor!', 'Buck the lamp post!', 'Cupcake not cubed.'
			 , 'Clip the wand!', 'She got to click their back roads.', 'Break the munchy can!', 'She should picture the wrath!'
			 , 'Harpoon the broken bike!', 'Unknown smell glitch.', 'Let the tomato see the drainpipe.', 'He will fly their surprise magic.'];
prompt.start();
prompt.get(['name', 'gender', 'grade', 'GPA', 'detentions', 'sleepingInClass', 'catchPhrase'], function(err, result)
{
	var student = new Student(result.name, result.gender, result.grade, result.GPA, result.detentions, result.sleepingInClass, result.catchPhrase)
	student.canStudentHaveFun();
	prompt.get(['driverName', 'color', 'gas'], function(err, result)
	{
		var bus = new Bus(result.driverName, result.color, result.gas);
		console.log(result.driverName + " is driving the " + result.color + " bus with gas: " + result.gas);
		bus.studentEntersBus(student);
		var newStudent;
		for(var i = 0; i < 20; i++)
		{
			newStudent = new Student(studentsNames[i], studentGenders[i], studentGrade[i], studentGPA[i], studentDetentions[i], sleeping[i], phrase[i]);
			bus.studentEntersBus(newStudent);
		}
		bus.busChatter();
	});
});