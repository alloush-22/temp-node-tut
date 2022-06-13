const os = require('os')

//info about user 
const user = os.userInfo()

console.log(user)

//method for setting uptime

console.log(`the system uptime is ${os.uptime()} seconds`)