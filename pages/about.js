import React from "react";
import styles from "../styles/about.module.css";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.aboutTitle}>About</h1>
      <p className={styles.aboutDescription}>
        Welcome to our blog website! We are passionate about coding, computer programming languages, and various technologies. This platform is dedicated to providing a space where anyone can share their knowledge, insights, and experiences in the exciting world of technology.
      </p>

      <h2 className={styles.sectionTitle}>Our Mission</h2>
      <p className={styles.sectionDescription}>
        Our mission is to create a vibrant community of tech enthusiasts, developers, and learners. We believe that knowledge sharing is essential for personal and collective growth in the rapidly evolving tech industry. By fostering an inclusive environment, we encourage individuals from all backgrounds and skill levels to contribute their unique perspectives and ideas.
      </p>

      <h2 className={styles.sectionTitle}>What We Offer</h2>
      <h3 className={styles.subsectionTitle}>1. Blogging Platform</h3>
      <p className={styles.subsectionDescription}>
        Our website offers a user-friendly blogging platform where you can easily create and publish your own blog posts. Whether you're a seasoned developer, a coding newbie, or someone exploring different technologies, you'll find a welcoming space to express your thoughts and share your experiences.
      </p>

      <h3 className={styles.subsectionTitle}>2. Diverse Topics</h3>
      <p className={styles.subsectionDescription}>
        We cover a wide range of topics related to coding and technology. From programming languages like Python, JavaScript, Java, and C++ to frameworks, libraries, web development, mobile app development, machine learning, artificial intelligence, cybersecurity, and more – we strive to provide valuable content that caters to different interests and skill levels.
      </p>

      <h3 className={styles.subsectionTitle}>3. Community Interaction</h3>
      <p className={styles.subsectionDescription}>
        We believe in the power of community interaction. Our platform allows readers to engage with the authors and other readers through comments, discussions, and sharing of ideas. We encourage constructive conversations, knowledge exchange, and support within our community.
      </p>

      <h3 className={styles.subsectionTitle}>4. Learning Resources</h3>
      <p className={styles.subsectionDescription}>
        In addition to blog posts, we offer curated resources and tutorials to support your learning journey. Whether you're looking for beginner-friendly guides, advanced tutorials, coding exercises, or recommendations for further exploration, our learning resources section is here to assist you in your quest for knowledge.
      </p>

      <h2 className={styles.sectionTitle}>Join Us!</h2>
      <p className={styles.sectionDescription}>
        We invite you to be a part of our community by creating an account on our website. By joining, you can contribute your own blog posts, engage with fellow tech enthusiasts, and expand your knowledge in the world of coding and technology.
      </p>

      <p className={styles.bottomText}>Let's learn, share, and grow together!</p>
    </div>
  );
}

export default About;
