const fs = require("fs");
const fsPromise = require("fs/promises");

// fs.mkdir('FsModule/new', (err)=> {
//     console.log(err)
// })
// fs.mkdir('FsModule/myDir/Faizz',{recursive: true}, (err)=> {  // if myDir is not maid and is nested then we use recursive
//     if(err){
//         console.log(err)

//     }
//     else{
//         console.log("created succesfully")
//     }
// })

// fs.readdir('OsModule/neew', (e,file)=> {
//     if(e){
//         console.log(`error occured ${e.message}`)
//     }else{
//         console.log(file)
//     }
// })


//recursive is for doing nesting
// fs.rm('FsModule/new/Faisal',{recursive: true}, (e)=> {    //for deleting directory
//     if(e){
//         console.log(`error occured ${e.message}`)
//     }else{
//         console.log("deleted succesfully")
//     }
// })

//CRUD on files
//if file is not there it will create
// if file is there already then it will override the content in file
// fs.writeFile('FsModule/myfile.txt', 'hi this side Faisal', (err)=> {
//     if(err){
//         console.log(`error occured ${err.message}`)

//     }else{
//         console.log("done succesful")
//     }
// } )

// if file is not there it will create
// if file is there it will add the content
//means it will add how many times the file runs
fs.appendFile("file.txt", "\nhey this me", (err) => {
  if (err) {
    console.log(`error occured ${err.message}`);
  } else {
    console.log("done succesful");
  }
});

// for opening  read or wrting purpose rarely use
// fs.open('FsModule/file.txt', 'r+', (err)=> {
//     if(err){
//                 console.log(`error occured ${err.message}`)

//             }else{
//                 console.log("done succesful")
//             }
// })


//For reading utf-8 is for converting buffer data into human readable data

// fs.readFile("new/demo.js",'utf-8', (err,file) => {
//   if (err) {
//     console.log(`error occured ${err.message}`);
//   } else {
//     console.log(file)
//     console.log("file reading succesful");
//   }
// });


//For deleting

// fs.unlink("FsModule/file.txt", (err) => {
//   if (err){
//     console.log(`error occured ${err.message}`);
//   } else {

//     console.log("file delete succesful");
//   }
// });

// async function deleted(){
//    const fl = await fsPromise.readFile('FsModule/new/demo.js')
// //    console.log(fl + " ")
//    return fl.toString()
// }

// deleted()