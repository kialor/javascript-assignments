class Job {
    constructor(name, industry, requiresDegree, field, salary, employmentType) {
    this.name = name;
    this.industry = industry;
    this.requiresDegree = requiresDegree;
    this.field = field;
    this.salary = salary;
    this.employmentType = employmentType;
    }
    getName ( ) {
        return "The title of this job is " + this.name
    }

    getFieldAndIndustry ( ) {
        return this.name + " works in " + this.field + " for the " + this.industry + " industry"
    }
};

//Three different instances of the Job class
let firstJob = new Job("Police Officer", "local government", "no degree required", "criminal justice", "55,000", "full-time");
let secondJob = new Job("Makeup Artist", "beauty", "no degree required", "cosmetology", "40,000", "contract");
let thirdJob = new Job("Attorney", "legal services", "J.D. degree required", "law", "130,000", "full-time");

//log 2 methods for each instance of the class
console.log(firstJob.getName());
console.log(firstJob.getFieldAndIndustry());
console.log(secondJob.getName());
console.log(secondJob.getFieldAndIndustry());
console.log(thirdJob.getName());
console.log(thirdJob.getFieldAndIndustry());

//New extended Subclass
class Internship extends Job {
    constructor(name, requiresDegree, field, length, salary, employmentType) {
        super(name, null, requiresDegree, field, salary, employmentType);
        this.length = length;
    }
    getNameAndField(){
        return this.name + " gains experience in the " + this.field + " field"
    }

    getLength(){
        return this.name + " position usually lasts for " + this.length
    };
}

//instance of extended class
let firstInternship = new Internship ("Accounting Intern", "Bachelor in Accouting", "finance", "6 months", "15,000", "part-time")

//log two new method from extended class
console.log(firstInternship.getNameAndField());
console.log(firstInternship.getLength());

