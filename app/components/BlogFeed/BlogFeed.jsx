import { client } from "@/app/lib/sanity"
import Link from "next/link"

const getData = async () => {
  const query = `*[_type == 'post']`
  const data = await client.fetch(query)
  return data
}

const BlogFeed = async () => {
  const posts = await getData();

  return (
    <section>
      <h1>All blog posts</h1>
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