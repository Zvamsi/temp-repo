const http=require ('node:http');
const server=http.createServer((req,resp)=>{
   if(req.url==='/'){
       resp.end("Hearty welcome");
   }
   if(req.url==='/about'){
      resp.end('Again still you are welcome !! ha ha')
   }
   resp.end(`
      <h1>Oops!</h1>
      <p>we can't seem to find your page my deep appologise</p>
      <a href='/'>back home</a>
      `)
resp.end();
})

server.listen(5000);