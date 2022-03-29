var raman = [];

// tripGroup is function which used to create a group
function tripGroup() {
  console.log(`Hey! group is created ,group name is raman`);
}

// validName is function which checks the entered users is valid or not
// it will return the true if its valid  or else it will return false

function validateName(userName) {
  var regex = /^[a-zA-Z ]{2,30}$/;
  return regex.test(userName);
}

// addMember function is function which takes a set of usernames and adds to the group
function addMember(...members) {
  for (let i = 0; i < members.length; i++) {
    if (validateName(members[i])) {
      let obj = {
        name: members[i],
        expenses: 0,
      };
      raman.push(obj);
      console.log(`=> ${obj.name} has added to group => `, obj);
    } else {
      throw new Error("Please provide a valid name");
    }
  }
}

// addExpenses is function which takes member and expenses to add to specific users group
// if users / members are not provided then it will add the provided expenses to all the members in a group.

function addExpenses(member, expense) {
  if (member.length > 0 && expense > 0) {
    for (let i = 0; i < raman.length; i++) {
      if (raman[i].name == member) {
        raman[i].expenses += Number(expense);
        console.log(`=> $ ${expense} has added to ${member}`);
      }
    }
  } else {
    let amount = member;
    for (let i = 0; i < raman.length; i++) {
      raman[i].expenses += +Number(amount);
      console.log(`=> $ ${amount} has added to ${raman[i].name}`);
    }
  }
}

// showExpenses is function which shows expenses for each member in a group

function showExpenses() {
  console.log("====================");
  console.log("Name" + "   -   " + "Expenses");
  console.log("====================");
  for (let i = 0; i < raman.length; i++) {
    console.log(raman[i].name + "   -   " + raman[i].expenses);
  }
  console.log("====================");
}

// main function is a function where we can call other function and create a group and manage them , view their expenses .

function main() {
  tripGroup();
  addMember("pandu", "sevitha", "naresh");
  addExpenses(30);
  addExpenses("naresh", 500);
  addExpenses("pandu", 400);
  addExpenses("sevitha", 300);
  addExpenses(100);
  showExpenses();
}
main();

// optionalFunction is function which create a group with 10 members and add random expenses to random members and at end it will show the details of group
/// it will also shows you time took to complete that function

function optionalFunction() {
  const start = new Date();
  tripGroup();
  const members = [
    "raman",
    "pandu",
    "sevitha",
    "naresh",
    "surya",
    "dheeraj",
    "pavan",
    "krishna",
    "bhanu",
    "baabu",
  ];
  addMember(...members);
  for (let i = 0; i < 300; i++) {
    addExpenses(
      members[Math.floor(Math.random() * 10)],
      Math.floor(Math.random() * 1000)
    );
  }
  showExpenses();
  const end = new Date();
  console.log("duration [ms] = " + (end - start));
}

optionalFunction();
