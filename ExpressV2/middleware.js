const checkLoginStatus = (req, res, next)=> {
    console.log("running check")
    console.log("path", req.path)
     next(); //next function will send you forward or verify the details sebd tby the client and pass him to the next page

    // if(req.path === '/product'){
    //     next();
    // }
    // else{
    //     res.send("you are not are valid user")
    // }
}


const mid2 = (req, res, next)=> {
  console.log("mid 2 is running")
  next();
}

module.exports= { checkLoginStatus,mid2}