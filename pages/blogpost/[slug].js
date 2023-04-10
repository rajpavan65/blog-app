import React from 'react'
import { useRouter } from 'next/router';
import styles from '@/styles/Style.module.css'

//Step 1: Find the file in the blogdata directory corresponding to the slug. 
//Step 2: populate the content of the blog inside the page.


const slug = () => {
    const router = useRouter();
    console.log(router.query);
    const { slug } = router.query;
    return (
        <div className={styles.blogs}>
            <h1>Title of the page {slug}</h1>
          <div className={styles.blogItem}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic facilis consectetur dolore alias incidunt dignissimos. Distinctio quaerat quidem minima neque voluptatum architecto consequatur sunt laboriosam? Omnis aut amet aliquid labore, eveniet repellat. Laborum autem commodi architecto ipsa saepe iste iure corrupti assumenda incidunt? Ipsum nisi deleniti quaerat dolore officiis voluptatibus sunt provident amet officia, ut eveniet ducimus laboriosam voluptate rem possimus explicabo eos maxime veritatis?</p>
          </div>
        </div>
    )
}

export default slug;