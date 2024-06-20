const {readFile,writeFile}=require('fs');

console.log('start');
readFile('./content/first.txt','utf8',(err,result)=>{
   console.log('0')
   if(err){
      console.log(err);
      return
   }
   const first=result;
   console.log('1')
   readFile('./content/second.txt','utf8',(err,result)=>{
      console.log('1.7');
      if(err){
         console.log(err);
         return
      }
      const second=result;
      console.log('2')
      writeFile('./content/result-async.txt',`combining: ${first},${second}`,(err,result)=>{
         if(err){
            console.log(err);
            return;
         }
         console.log('3');
      });
      console.log('2.5');
   })
   console.log('1.5');
})
console.log("4")