import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Movies from './components/Movies'
import Movie from './components/Movie'
import Actor from './components/Actor'
import Actors from './components/Actors'
// import Nav from "./components/Nav";
import Home from './components/Home'
import Layout from './styles/styled/Layout'

function App() {
  // Write JavaScript, use Hooks, add state and more

  const [movie, setMovie] = useState('')
  const [actors, setActors] = useState('')

  return (
    <Routes>
      {/* <Nav /> */}
      <Route path="/" element={<Home />} />
      <Route path="movies" element={<Layout />}>
        <Route index element={<Movies movie={movie} setMovie={setMovie} />} />
        <Route path=":slug" element={<Movie movie={movie} />} />
      </Route>
      <Route path="actors" element={<Layout />}>
        <Route
          index
          element={<Actors actors={actors} setActors={setActors} />}
        />
        <Route path=":name" element={<Actor actors={actors} />} />
      </Route>
    </Routes>
  )
}

export default App
