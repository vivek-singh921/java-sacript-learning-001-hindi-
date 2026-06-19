const accountId = 144553
let accountEmail = "Singh123@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 2

accountEmail = "Vivek321@gmail.com"
accountPassword = "567890"
accountCity = "Bengaluru"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])