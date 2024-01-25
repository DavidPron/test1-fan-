"use strict";

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function() {
        console.log(`Мне ${this.age} и я владею языками: ${this.skills.languages}`)
    }

};

function showExperience(plan) {
    let obj = personalPlanPeter;
    obj.skills.exp = '3 month';
    return obj.skills.exp;
}

function showProgrammingLangs(plan) {
    let obj1 = {
        ruby: '30%'
    }
    let obj = {
        a: personalPlanPeter.skills.programmingLangs, ...obj1,
    }

    return (` Язык js изучен на: ${obj.a.js} \n Язык php изучен на: ${obj.a.php} \n Язык ruby изучен на: ${obj1.ruby}`);
}

showExperience(personalPlanPeter);
showProgrammingLangs()

console.log(showExperience())
console.log(showProgrammingLangs(personalPlanPeter));
console.log(personalPlanPeter.showAgeAndLangs());
