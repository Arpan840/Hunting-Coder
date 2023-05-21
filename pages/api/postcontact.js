import fs from 'fs'
export default function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
    const userData=fs.readdirSync('Contact')
    
    const contactdata= fs.writeFileSync(`Contact/${"user"+userData.length}.json`,JSON.stringify(req.body))
    res.send({contactdata,
    success:true})

  } else {
    // Handle any other HTTP method
   
  }
}