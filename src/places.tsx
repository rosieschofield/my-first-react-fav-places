import "./styles.css";

interface PlacesProps {
  title: string;
  placeName: string;
  country: string;
  imageURL: string;
  imageDescription: string;
  locationLink: string;
  description: string;
}

function Places(props: PlacesProps): JSX.Element {
  return (
    <div className="placeTemplate">
      <img
        className="images"
        src={props.imageURL}
        alt={props.imageDescription}
      ></img>
      <h2> {props.title} </h2>
      <h3>
        {props.placeName}, {props.country} (
        <a className="linkStyle" href={props.locationLink}>
          map view
        </a>
        )
      </h3>
      <p>{props.description}</p>
    </div>
  );
}

export default Places;
