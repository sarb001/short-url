const sessionIdToUserMap = new Map();
import jwt from 'jsonwebtoken' ; 


 function setUser(user) {
   console.log('secret key -',process.env.SECRET_KEY);
   return  jwt.sign({
      email : user?.email,
   },secret);
}

function getUser(id) {
  return sessionIdToUserMap.get(id);
}

export {
  setUser,
  getUser,
};