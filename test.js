 /*let chosen = 1
 let myFriends = [
    {title:"seif",age:"19",available:true ,skills:["HTML","CSS"]},
    {title:"ahmed",age:"29",available:false,skills:["paython","php"]},
    {title:"zero",age:"22",available:true ,skills:["dart","go"]}
 ];


let {title:t,age:s,available, skills :[,two]} = myFriends[chosen - 1];
console.log(`${t}`);
console.log(s);
console.log(available ? "availble" : "not av");
console.log(two);

*/
class Person {
  #name; // Private property
  #age;  // Private property

  constructor(name, age) {
      this.#name = name;
      this.#age = age;
  }

  // Method to get name
  getName() {
      return this.#name;
  }

  // Method to get age
  getAge() {
      return this.#age;
  }
}
class Employee extends Person {
  #jobTitle;

  constructor(name, age, jobTitle) {
      super(name,age) //e constructor of the base class
      this.#jobTitle = jobTitle;
  }

  // Method to get job title
  getJobTitle() {
      return this.#jobTitle;
  }

  // Method to get full information
  getFullInfo() {
      return `${this.getName()}, Age: ${this.getAge()}, Job Title: ${this.getJobTitle()}`;
  }
}

// Example usage
let emp = new Employee("John Doe", 30, "Software Engineer");
console.log(emp.getFullInfo()); // Output: John Doe, Age: 30, Job Title: Software Engineer
