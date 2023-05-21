// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//http://localhost:3000/api/hello?slug=blog1
import { error } from 'console'
import * as fs from 'fs'
export default function handler(req, res) {
 const slugData=fs.readFileSync(`blogdata/${req.query.slug}.json`)
 res.status(200).json(JSON.parse(slugData))
 
}
// fs.readFile(`blogdata/${req.query.slug}.json`,'utf-8',(error,data)=>{
//   try {
//    res.status(200).json(JSON.parse(data))
//   } catch (error) {
//      res.status(500).send({error:"no such blog found"})
//   }
//  })
