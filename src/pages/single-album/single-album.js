import { useContext, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Album from "../../components/album/album"
import { AlbumsContext } from "../../contexts/albums";
import SitesNav from "../../components/nav/nav";
import "./single-album.scss";
import Hand from "./img/hands.png";
import SocialSets from "./img/social-media.png";
import Main from "./img/main.png";
import Footer from "../../components/footer/footer"
import Albums from "../../components/albums/albums";
import { getRndInteger } from "../../utils";

const SingleAlbum = () => {
  const [ count, setcount ] = useState(getRndInteger(1,20))
  const   handleImgPlus = () => {
    setcount(count + 1);
    if (count === 100) {     
      setcount(count);
    }
  }
  
  const [ raqam, natija ] = useState(getRndInteger(1,20))
  const   handleImgPlusFirst = () => {
    natija(raqam + 1);
    if (raqam === 100) {     
      natija(raqam);
    }
  }
  const { albumId } = useParams();
  const { albums, setAlbums } = useContext(AlbumsContext);
  const currentAlbum = albums?.find(album => album.id === +albumId);  
  const dateRef = useRef();
  if (!currentAlbum) {
    return <h1>Hech narsa yo'q</h1>
  }
  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const editingItemIndex = albums.findIndex(album => album.id === currentAlbum.id);
    const newAlbums = [
      ...albums.slice(0, editingItemIndex),
      {
        ...currentAlbum,
        date: dateRef.current.value
      },
      ...albums.slice(editingItemIndex + 1)
    ];
    
    setAlbums(newAlbums);
  }
  return (
    <>
    <div className="container">
    <header>
    <SitesNav/>
    </header>
    
    <div className="single-page-wrapper-block">
    <div className="reputations">
    <div>
    <img src={Hand} alt="" onClick={handleImgPlusFirst}/>
    <p>{raqam}</p>
    </div>
    <div>
    <img src={SocialSets} alt="" onClick={handleImgPlus}/>
    <p>{count}</p>
    </div>
    </div>
    <div className="single-page-right-section">
    <Album album={currentAlbum} />
    <form onSubmit={handleFormSubmit}>
    <input ref={dateRef} defaultValue={currentAlbum.date} type="text" /><button>Submit</button>
    </form>
    <section className="information">
    <div className="inner-all-things">
    <img src={Main} alt=""/> 
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis sagittis sem ac porta. Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin elit nulla, viverra id suscipit quis, tristique a dolor. Sed dapibus, orci ac luctus tincidunt, massa erat porttitor odio, non imperdiet dui risus et elit.
    <h3>
    Information overload
    </h3>
    Vivamus dictum ultrices tortor. Ut imperdiet, enim in suscipit dignissim, mauris massa pellentesque augue, quis ultricies sem tortor et velit.
    </p>
    <p className="text-with-br">
    Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin elit.uz nulla, viverra id suscipit quis, tristique a dolor. 
    <p>
    ‘Designing For Sustainability, Tim Frick, 2014'
    </p>
    </p>
    
    <h4>
    Lessons Learnt: Best Practice
    </h4>
    <li>Morbi congue odio vel luctus aliquam. Morbi accumsan sapien at lorem ultricies aliquam eu eu nisl. Suspendisse.</li>
    <li>Maecenas sit amet ligula auctor neque aliquam placerat et ac neque. Proin risus eros, fringilla eu suscipit dignissim, dignissim.</li>
    <h5>
    More like this 
    </h5>
    </div>
    <Albums/>
    </section>
    </div>
    </div>
    
    </div>
    <Footer></Footer>
    
    </>
    )
  }
  
  export default SingleAlbum;