import "./PhotoItem.scss";

export default function PhotoItem({ metaData, image, setIsOpenImg }) {
  return (
    <div className="photo" onClick={() => setIsOpenImg(false)}>
      <button
        class="button__close button emphasis"
        id="pop-up__menu--close"
        aria-label="Close Pop-up photo"
        onClick={() => {
          setIsOpenImg(false);
        }}
      >
        X
      </button>
      <img
        className="photo__img"
        src={image}
        alt={`${metaData.tittle} artwork`}
        onClick={(e) => e.stopPropagation()}
      />
      <div className="photo__tittle">
        <p className="photo__text">{metaData.tittle}</p> —
        <small className="photo__text"> {metaData.technique}</small>
      </div>
    </div>
  );
}
