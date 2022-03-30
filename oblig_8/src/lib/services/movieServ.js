import client from '../client'

const movieTitles = `
    title,
    _type,
    overview,
    "slug": slug.current,
    "actor": actor->name.current,
`
const actors = `
    name,
    description,
    "slug": slug.current,
    "person": person->name.current,
`


const getMovies = async () => {
  const data = await client.fetch(`*[_type == "movie"]{${movieTitles}}`)
  console.log(data)
  return data
}

export const getActor = async () => {
  const data = await client.fetch(`*[_type == "actor"]{${actors}}`)
  return data
}

export const getBySlug = async(slug) => {
  const data = await client.fetch(`*[_type=="actor" && name.current == $slug] {
    title,
    'poster': poster{asset->{url}},
  }`)
  return data;
}

export default getMovies
