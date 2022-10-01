import React from 'react'
import { MovieCard } from './MovieCard'

export const MovieList = ({list ,deleteMovie,handelEdit}) => {
  return (
    <div className="totalCard">{React.Children.toArray(list.map(movies=><MovieCard  film={movies}  deleteMovie={deleteMovie}handelEdit={handelEdit} />))}</div>
  )
}
