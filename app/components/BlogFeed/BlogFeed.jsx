import Link from "next/link"

const BlogFeed = ({ posts }) => {
  return (
    <section>
      <h1>All my blog posts</h1>
      <ul>
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