import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
        <nav className={styles.navbar}>
        <ul>
          <Link href="/"><li>Home</li></Link>
          <Link href="/About"><li>About</li></Link>
          <Link href="/blogpost"><li>Blogs</li></Link>
          <Link href="/Contactus"> <li>Contact Us</li></Link>
          <Link href="/AddBlogs"> <li>Add Your Own Blogs</li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar