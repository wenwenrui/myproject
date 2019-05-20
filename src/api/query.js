export default {
  login: `
    query getUser($username:String, $password: String) {
      getUser(username:$username, password:$password)
    } 
  `
}
