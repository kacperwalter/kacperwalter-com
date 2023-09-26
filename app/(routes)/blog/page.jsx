import { client } from "@/app/lib/sanity"

import BlogFeed from "../../components/BlogFeed/BlogFeed"
import Navbar from "../../components/Navbar/Navbar"
import Wrapper from "@/app/components/UI/Wrapper/Wrapper"

export const metadata = {
  title: 'Blog about frontend development | kacperwalter.com',
  description: 'TODO',
  robots: {
    index: false,
    follow: false,
  },
}

export const getPosts = async () => {
  const query = `*[_type == 'post']`
  const data = await client.fetch(query, {}, { cache: 'no-store' })

  return { props: { data } }
}

const BlogMainPage = async () => {
  const posts = (await getPosts()).props.data

  return (
    <>
      <Navbar />
      <Wrapper>
        <BlogFeed posts={posts} />
      </Wrapper>
    </>
  )
}

export default BlogMainPage