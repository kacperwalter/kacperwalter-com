const { client } = require("@/app/lib/sanity")

import Navbar from "@/app/components/Navbar/Navbar"
import { urlFor } from "@/app/lib/sanityImageUrl"
import { PortableText } from "@portabletext/react"
import Image from "next/image"

const getData = async (slug) => {
  const query = `*[_type == "post" && slug.current == "${slug}"][0]`
  const data = await client.fetch(query)
  return data
}

export const generateMetadata = async ({ params }) => {
  const data = await getData(params.slug)

  return {
    title: data.title,
    description: "TODO WIP description in CMS",
    robots: {
      index: false,
      follow: false,
    },
  }
}

// TODO to different compoenent 
const BlogPost = async ({ params }) => {
  const data = await getData(params.slug);
  const PortableTextComponent = {
    types: {
      image: ({ value }) => (
        <Image src={urlFor(value).url()} alt='some alt' width={800} height={800} />
      )
    }
  }

  return (
    <>
      <Navbar />
      <section>
        <h1>{data.title}</h1>
        <PortableText value={data.content} components={PortableTextComponent} />
      </section>
    </>
  )
}

export default BlogPost