import { useContext } from "react"
import { AlbumsContext } from "../../contexts/albums"
import Album from "../album/album"

const Albums = () => {
  const { paginatedAlbums } = useContext(AlbumsContext)
  return (
    <>
    <div>
    {paginatedAlbums?.map(album => <Album album={album} key={album.id} />)}
    </div>
    </>
    )
  }
  
  export default Albums;