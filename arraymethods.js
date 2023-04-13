const users = [
    {id: 1232, firstName: 'Cam', lastName: 'Danvers', logins: 35, isPremiumMember: false},
    {id: 3283, firstName: 'Elijah', lastName: 'Hawkings', logins: 3, isPremiumMember: true},
    {id: 9283, firstName: 'Ragupathy', lastName: 'Bodem', logins: 12, isPremiumMember: false},
    {id: 6972, firstName: 'Jamilla', lastName: 'Johnson', logins: 5, isPremiumMember: true},
    {id: 3998, firstName: 'Jose', lastName: 'Rivera', logins: 16, isPremiumMember: false},
    {id: 4982, firstName: 'Ted', lastName: 'Witherspoon', logins: 53, isPremiumMember: true},
    {id: 6929, firstName: 'Igor', lastName: 'Silenski', logins: 23, isPremiumMember: false},
    {id: 3879, firstName: 'Ira', lastName: 'Bolislovitz', logins: 9, isPremiumMember: false}
];

//Find user named Jose
const userJose = users.find(user => user.firstName == 'Jose');
console.log(userJose);

//Get an array of all premium members
const premiumMembers = users.filter(user => user.isPremiumMember);
console.log(premiumMembers);

//Get an array of all the user last names
const lastName = users.map(user => user.lastName)
console.log(lastName);

//Get an array of full names who have logged in more than 10 times
const loginsOver10 = users.filter(user => user.logins > 10).map(user => user.firstName +' '+ user.lastName);
console.log(loginsOver10);


//Get total number of logins for list of users
const totalLogins = users.reduce((logins, user) => logins + user.logins, 
    0,
);
console.log(totalLogins);