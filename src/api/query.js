export default {
  login: `
    query getUser($uername:String, $password: String) {
        getUser(username:$username, password:$password)
    } 
  `
}
