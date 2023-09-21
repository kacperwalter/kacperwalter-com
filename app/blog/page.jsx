import BlogFeed from "../components/BlogFeed/BlogFeed"
import Navbar from "../components/Navbar/Navbar"

export const metadata = {
  title: 'Blog about frontend development | kacperwalter.com',
  description: 'Generated by create next app',
}

const BlogMainPage = () => {
  return (
    <>
      <Navbar />
      <BlogFeed />
    </>
  )
}

export default BlogMainPage