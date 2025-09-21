import "./PhotoItem.scss";

export default function PhotoItem({ metaData, image }) {
  return (
    <div className="photo">
      <img className="photo__img" src={image} alt={`${ metaData.tittle } artwork`} />
      <p className="photo__tittle">{metaData.tittle}</p>
      <small className="photo__tittle--description">{metaData.technique}</small>
    </div>
  );
}
