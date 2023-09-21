import { createClient } from "next-sanity"

const projectID = 't2nvyqda'
const dataset = 'production'
const apiVersion = '2023-01-01'

export const client = createClient({
  projectID,
  dataset,
  apiVersion,
  useCdn: true,
})