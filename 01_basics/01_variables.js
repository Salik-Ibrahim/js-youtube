const accountId = 12345
let accountEmail = "abc@google.com"
var accountPassword = "23456"
accountCity = "Delhi"
// accountId = 2 // cant change
accountEmail = "hc@hc.com"
accountPassword = "6732374747"
accountCity = "Kolkata"
let accountState
console.log(accountId);
/*
var should not be used because of issue in block scope 
and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])