import { useState } from 'react';
import contact from '../styles/contact.module.css';
import toast, { Toaster } from 'react-hot-toast';

const Contactus = (props) => {
  const [user, setUser] = useState({ name: '', phone: '', email: '', desc: '' });

  const onChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    const { name, phone, email, desc } = user;
    const res = await fetch(`http://localhost:3000/api/postcontact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        desc,
      }),
    });
    const data = await res.json();
    if (data.success === true) {
      setUser({ name: '', phone: '', email: '', desc: '' })
      toast.success('Your response has been sent successfully. Soon we will resolve your issue');
      
    } 
    else
     { toast.error('Something went wrong');}
    
  };

  return (
    <div className={contact.container}>
      <form className={contact.form} method="POST" onSubmit={onSubmit}>
        <h1>Contact Us</h1>
        <label>Name *</label>
        <input type="text" name="name" value={user.name} placeholder="Name" required onChange={onChange} />
        <label>Phone *</label>
        <input type="tel" name="phone" value={user.phone} placeholder="Phone" required onChange={onChange} />
        <label htmlFor="desc">Enter Description *</label>
        <textarea name="desc" value={user.desc} id="desc" cols="30" rows="10" placeholder="Description" required onChange={onChange}></textarea>
        <label htmlFor="email">Email *</label>
        <input type="email" name="email" value={user.email} id="email" placeholder="Email" required onChange={onChange} />
        <button type="submit" className={contact.btn}>
          Submit Details
        </button>
      </form>
      <Toaster></Toaster>
    </div>
  );
};

export default Contactus;
