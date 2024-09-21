import express from 'express';
import bodyParser from "body-parser";
const app = express()
const port = 3000


const octokit = new Octokit()
  
  await octokit.request('GET /users/{username}', {
    username: 'USERNAME',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })


app.get("users/:username", (req, res) => {
    let username = req.params;
    
    

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})