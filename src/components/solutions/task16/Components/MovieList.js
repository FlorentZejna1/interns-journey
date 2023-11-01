import React, { useEffect, useState } from "react";

function MovieList(props) {
  const [data, setData] = useState({});
  const [selected, setSelected] = useState({});
  const url = `https://www.omdbapi.com/?i=tt3896198&apikey=d16ce08a&s=${props.movie}`;

  useEffect(() => {
    const fetchData = async () => {
      if (props.movie === "") return;
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setSelected({});
        });
    };

    fetchData();
  }, [url]);

  const openDetail = async (id) => {
    await fetch(`https://www.omdbapi.com/?i=${id}&apikey=d16ce08a`)
      .then((res) => res.json())
      .then((data) => {
        setSelected(data);
      });
  };

  const handleClick = () => {
    setSelected({});
  };

  return (
    <>
      <div className="movie-holder">
        {selected.Title === undefined ? (
          props.movie === "" ? (
            <h1 className="movie-emptyField">Input a movie</h1>
          ) : (
            data.Search?.map((search, imdbID) => (
              <div
                key={imdbID}
                className="searchResult"
                onClick={(e) => openDetail(search.imdbID)}
              >
                <img
                  className="searchImage"
                  src={search.Poster}
                  alt={search.Title}
                />
                <div className="movie-info">
                  <h3 className="searchTitle">{search.Title}</h3>
                  <p className="searchYear">{search.Year}</p>
                </div>
              </div>
            ))
          )
        ) : (
          <>
            <div className="movieDetails-container">
              <div className="movieDetails-Image">
                <img src={selected.Poster} />
              </div>
              <div className="movieDetails-info">
                <h3 className="movieDetails-title">{selected.Title}</h3>
                <p className="movieDetails-plot">{selected.Plot}</p>

                <p style={{ fontWeight: 700 }}>Cast: {selected.Actors}</p>
                <div className="movieDetails-rating">
                  <div className="movieDetails-ratingInfo">
                    <img
                      className="movieDetails-raitingImg"
                      src="https://static.vecteezy.com/system/resources/thumbnails/009/342/559/small/mobile-game-golden-star-clipart-design-illustration-free-png.png"
                    />
                    <p style={{ margin: 0 }}>{selected.imdbRating} / 10</p>
                  </div>
                  <div className="movieDetails-buttonContainer">
                    <button
                      className="movieDetails-button"
                      onClick={handleClick}
                    >
                      Go back
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default MovieList;
