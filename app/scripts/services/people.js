angular.module('angularApp').service("peoples", function () {
    var peoples = [];
    
    return {
        getPerson: function (index) {
            return peoples[index];
        },
        
        getAllPeople: function () {
            return peoples;
        },
        
        addPerson: function (person) {
            console.info("adding a new person", person);
            peoples.push(person);
            console.info("After add it looks like: ", peoples);
        }
    }
});