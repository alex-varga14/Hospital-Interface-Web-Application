export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accessToken) {
      return { 'x-access-token': user.accessToken }; //NodeJS backend
      // return { Authorization: 'Bearer: ' + user.accessToken}; // Spring Boot Backend
    } else {
      return {};
    }
  }