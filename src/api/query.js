export default {
  login: `
    query getUser($username:String, $password: String) {
      getUser(username:$username, password:$password)
    } 
  `.replace(/[\t\n]/g, '').trim()
}
