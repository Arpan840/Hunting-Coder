import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from '/styles/blog.module.css'
import Link from 'next/link'
const index = (props) => {
  const [data, setData] = useState(props.data);
  return (
   
    <div className={styles.container}>
      {
        data.map((i)=>{
          return(
            <div className={styles.card} key={i.key}>
       <div >
        <img src={i.imgUrl} width={250} height={150} alt="blog1" ></img>
      </div>
      <div>
        <h1>{i.title}</h1>
        <div>
          <p>
           {i.description.substr(0,300)}...
          </p>
        </div>
        <Link href={`/blogpost/${i.slug}`}>
        <button className={styles.btn}>Lern More</button>
        </Link>
      </div>
    </div>
          )

        })
      }
    
    </div>
  );
};
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/blogs`);
  const data = await res.json();
 
  // Pass data to the page via props
  return { props: { data } };
}


export default index;
