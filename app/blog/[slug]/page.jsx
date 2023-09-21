const { client } = require("@/app/lib/sanity")

import Navbar from "@/app/components/Navbar/Navbar"

const getData = async (slug) => {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]`
  const data = await client.fetch(query)
  return data
}

// TODO to different compoenent 
const BlogPost = async ({ params }) => {
  const data = await getData(params.slug);

  return (
    <>
      <Navbar />
      <section>
        <h1>{data.title}</h1>
      </section>
    </>
  )
}

export default BlogPost