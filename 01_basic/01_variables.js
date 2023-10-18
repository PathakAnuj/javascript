const accountId     = 1234
let accountEmail    = "pathak@gmail.com"
var accountPassword = "1240"
accountCity         = "Ambedkar Nagar"  //we can assign memory without any type ,but not preferable.
let accountState; // undefined

//accountId= 2  not allowed to change constants.

accountEmail = "ram@gmail.com"
accountPassword = "1242"
accountCity = "Lucknow"
console.log(accountId);

/*
Prefer not use to use var
because of issue in block scope and fonctional scope.
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

