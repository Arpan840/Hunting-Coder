import React,{useState} from 'react'
import contact from '../styles/contact.module.css';
import toast, { Toaster } from 'react-hot-toast';
const AddBlogs = () => {
  
    const [blogs, setBlogs] = useState({ title: '', description: '', imgUrl: '',name:'' });

  const onChange = (e) => {
    e.preventDefault();
    setBlogs({ ...blogs, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(blogs);
    const { title, description,imgUrl,name} = blogs;
    const res = await fetch(`http://localhost:3000/api/addBlogs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
        imgUrl,
        name,
        
        
      }),
    });
    const data = await res.json();
    if (data.success === true) {
      setBlogs({ title: '', description: '', imgUrl: '',name:'' })
      toast.success('Your response has been sent successfully. Soon we will resolve your issue');
      
    } 
    else if(data.success===false)
     { toast.error('Do not use any special character at the end of title like ?,*,/etc');
          }
    
  };

  return (
    <div className={contact.container}>
      <form className={contact.form} method="POST" onSubmit={onSubmit}>
        <h1>Write your own blogs</h1>
        <label>Author *</label>
        <input type="text" name="name" value={blogs.name} placeholder="Author" required onChange={onChange} />
        <label>Title *</label>
        <input type="text" name="title" value={blogs.title} placeholder="Blog Title" required onChange={onChange} />
       
        <label htmlFor="desc">Enter Description *</label>
        <textarea name="description" value={blogs.description} id="desc" cols="30" rows="10" placeholder=" Blog Description" required onChange={onChange}></textarea>
        <label htmlFor="file">Blog Image *</label>
        <input type="link" name="imgUrl" value={blogs.imgUrl} id="file" placeholder="Enter Your blog image link" required onChange={onChange} />
        <button type="submit" className={contact.btn}>
         Add Blog
        </button>
      </form>
      <Toaster></Toaster>
    </div>
  );
}

export default AddBlogs