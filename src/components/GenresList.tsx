import useGenres from '../hooks/useGenres'

const GenresList = () => {

    const { genres } = useGenres();

  return (
      <div>
          <ul>
              {genres.map(genre => <li>{ genre.name}</li>)}
          </ul>
    </div>
  )
}

export default GenresList