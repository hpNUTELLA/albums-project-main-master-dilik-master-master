import { createContext, useEffect, useState } from "react";
import { texts, types } from "../consts";
import { getRndInteger } from "../utils";
import "./albums.scss";
export const AlbumsContext = createContext();

const AlbumsProvider = (props) => {
  const [albums, setAlbums] = useState();
  const [filtredAlbums, setFiltredAlbums] = useState();
  const [paginatedAlbums, setPaginatedAlbums] = useState();
  const [loading, setLoading] = useState(false);
  const [activePageNumber, setActivePageNumber] = useState(2);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        const AlbumsArray = data.map((album) => {
          return {
            ...album,
            likes: getRndInteger(1, 3),
            date: new Date(
              `${getRndInteger(2001, 2023)}-${getRndInteger(
                1,
                12
              )}-${getRndInteger(1, 28)}`
            ).toDateString(),
            type: types[getRndInteger(0, 8)],
            text: texts[getRndInteger(0, 5)],
          };
        });
        setAlbums(AlbumsArray);
        setFiltredAlbums(AlbumsArray);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (filtredAlbums) {
      setPaginatedAlbums(
        filtredAlbums.slice((activePageNumber - 1) * 10, activePageNumber * 10)
      );
    }
  }, [filtredAlbums, activePageNumber]);

  if (loading) {
    return (
      <div className="body-load">
        <div className="cssload-loader">
          <div className="cssload-inner cssload-one"></div>
          <div className="cssload-inner cssload-two"></div>
          <div className="cssload-inner cssload-three"></div>
        </div>
      </div>
    );
  }

  return (
    <AlbumsContext.Provider
      value={{
        albums,
        setAlbums,
        filtredAlbums,
        setFiltredAlbums,
        paginatedAlbums,
        setPaginatedAlbums,
        activePageNumber,
        setActivePageNumber,
      }}
      {...props}
    />
  );
};

export default AlbumsProvider;
