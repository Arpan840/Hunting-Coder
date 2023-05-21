//http://localhost:3000/api/blogs
import fs from 'fs'
const handler=(req,res)=>{
    try {
        const data=fs.readdirSync('blogdata')
        const allBlogs=[]
        data.forEach((i)=>{
            const filePath=`blogdata/${i}`
            const readFile=fs.readFileSync(filePath,'utf-8')
            const jsondata=JSON.parse(readFile)
            allBlogs.push(jsondata)
        })
        res.send(allBlogs)
    } catch (error) {
        res.send(error)
        
    }
   
}
export default handler