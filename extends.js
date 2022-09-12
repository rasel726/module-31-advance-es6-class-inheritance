class TeamMember {
    name;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    provideFeedback() {
        console.log(`${this.name} thank you for your feedback.`);
    }
}

class Instructor extends TeamMember{
    designation = 'Web Course Instructor'
    team = 'Web Team'
    constructor(name, location) {
        super(name, location);
    }
    startSupportSession() {
        console.log(`Start the support session at ${time}`);
    }
    createQuiz(module) {
        console.log(`Please create quiz for module ${module}`);
    }
}

class Developer extends TeamMember{
    designation = 'Web Course Instructor'
    team = 'Web Team'
    tech;
    constructor(name, location, tech) {
        super(name, location);
        this.tech = tech;
    }
    developFeature(feature) {
        console.log(`Please develop the ${feature}`);
    }
    release(version) {
        console.log(`Please release the version ${version}`);
    }
}

class JobPlacement extends TeamMember{
    designation = 'Job placement comandos'
    team = 'Job Placement'
    region;
    constructor(name, location, region) {
        super(name, location);
        this.region = region;
    }
    provideResume(feature) {
        console.log(`Please develop the ${feature}`);
    }
    prepareStudent(version) {
        console.log(`Please release the version ${version}`);
    }
}

const alia = new Developer('Alia Bhatt', 'Dhaka', 'React');
console.log(alia);
alia.provideFeedback();

const bipasha = new JobPlacement('Bipasha', 'kolkata', 'India');
console.log(bipasha);