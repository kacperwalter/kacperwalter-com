import Link from "next/link"

import "./BlogFeed.scss"
import Heading from "../UI/Heading/Heading"

const BlogFeed = ({ posts }) => {
  return (
    <section className="blog-feed">
      <Heading type="h1">All blog posts</Heading>
      <ul className="blog-feed__list">
        {posts.map(post => (
          <li key={post._id}>
            <article>
              <h2>{post.title}</h2>
              <p>{post.overview}</p>
              <Link href={`/blog/${post.slug.current}`} prefetch>Read more</Link>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default BlogFeed