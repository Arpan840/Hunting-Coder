//http://localhost:3000/api/addBlogs
import fs from 'fs';

const handler = (req, res) => {
  try {
    const data = fs.readdirSync('blogdata');
    const slug = req.body.title.replace(/\s+/g, '-'); // Generate slug from title
    const key=req.body.title.replace()
    const addBlog = fs.writeFileSync(`blogdata/${slug}.json`, JSON.stringify({...req.body, slug,key}));
    
    res.send({
      addBlog,
      success: true
    });
  } catch (error) {
    res.send({
      success:false,
      error:error
    })
    console.log(error);
  }
};

export default handler;
