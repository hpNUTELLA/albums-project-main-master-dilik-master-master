import { useContext } from "react";
import { AlbumsContext } from "../../contexts/albums";
import "./pagination.scss";

const Pagination = () => {
  const { filtredAlbums, setActivePageNumber } = useContext(AlbumsContext);

  if (!filtredAlbums) {
    return null;
  }
  const pagesCounts = Math.ceil(filtredAlbums.length / 10);

  const handlePaginationClick = (evt) => {
    if (evt.target.matches("button")) {
      setActivePageNumber(+evt.target.dataset.id);
    }
  };

  return (
    <ol className="pagination-wrap" onClick={handlePaginationClick}>
      {Array(pagesCounts)
        .fill()
        .map((_, index) => (
          <li key={index}>
            <button data-id={index + 1} key={index}>
              {index + 1}
            </button>
          </li>
        ))}
    </ol>
  );
};
export default Pagination;
