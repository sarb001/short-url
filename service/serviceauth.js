
import jwt from 'jsonwebtoken' ; 

 function setUser(user) {
   console.log('secret key -',process.env.SECRET_KEY);
   return  jwt.sign({
       id : user._id,
       email : user?.email,
   },process.env.SECRET_KEY);
}

function getUser(token) {
  console.log('token user-',token);
  return jwt.verify(token,process.env.SECRET_KEY)
}

export {
  setUser,
  getUser,
};