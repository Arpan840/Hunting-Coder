import { useRouter } from 'next/router'
import style from '../../styles/blogpost.module.css'
import { useEffect, useState } from 'react';

const blogs = () => {
  const router = useRouter();
  const { slug } = router.query
  const [blog,setBlog]=useState()
  const blogdata=async()=>{
    const fetchdata=await fetch(`http://localhost:3000/api/hello?slug=${slug}`)
    setBlog(await fetchdata.json())
  }
  useEffect(()=>{
    if(!router.isReady)
    {
      return
    }
    blogdata()
  },[router.isReady])
  return (
    <div className={style.container}>
      <div style={{borderBottom:"2px solid royalblue"}}>
      <h1>{blog && blog.title}</h1>
      </div>
      <div className={style.data}>
        <p>
          {blog && blog.description}
        </p>
      </div>

    </div>
  )
}

export default blogs