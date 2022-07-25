import { Link } from "react-router-dom";
import Clock from "./img/clock.png";
import "./album.scss"
const Album = ({ album }) => {
  return (
    <>
    <article>
    <div>
    <div className="title-wrap">
    <time className="time"><Link className="date" to={`/album/${album.id}`}>{album.date}</Link></time>
    <h4>{album.type}</h4>
    </div>
    <p>{album.text}</p>
    <span><img src={Clock} alt=""/> {album.likes} read</span>
    </div>
    </article>
    </>
    )
  }
  
  export default Album;