import { useContext, useRef } from "react";
import "./filter.scss"
import {AlbumsContext} from "../../contexts/albums"
import Search from "./img/seacrh.png";
const Filter = () => {
    const inputRef = useRef();
    const {albums, setFiltredAlbums} = useContext(AlbumsContext)
    const handleFilterSubmit = (evt) => {
        evt.preventDefault();
        const inputValue = inputRef.current.value
            const filtredAlbums = albums.filter(album => album.text.includes(inputValue))
            setFiltredAlbums(filtredAlbums)

    }
    return(
        <form className="nav-search-btn" onSubmit={handleFilterSubmit}>
        <input ref={inputRef}placeholder="seacrh"/>
        <img src={Search} alt=""/>
        </form>
    );
}
export default Filter
