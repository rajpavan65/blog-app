import React from 'react'
import styles from '@/styles/Style.module.css'
import Link from 'next/link'


// Step 1: Collect all the files from the blogdata directory. 
//Step 2: Iterate through all the collected files and display the needed information on the blog.js page.


function Blog() {
  return (
    <div className={styles.blogs}>
          <div className={styles.blogItem}>
            <Link href='/blogpost/learn-javascript'><h3>How to learn JavaScripts in 2023?</h3></Link>
            <p>JavaScript is the language used to design logic for the web</p>
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn JavaScripts in 2023?</h3>
            <p>JavaScript is the language used to design logic for the web</p>
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn JavaScripts in 2023?</h3>
            <p>JavaScript is the language used to design logic for the web</p>
          </div>
        </div>
  )
}

export default Blog