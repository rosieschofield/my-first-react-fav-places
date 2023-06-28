import  Places from "./places";
import "./styles.css";

function PlacesContent(): JSX.Element {
  return (
    <body>
      <Places
          title={"Tropical Paradise"}
          placeName={"The Maldives"}
          country={"The Maldives"}
          imageURL={"https://media.nomadicmatt.com/maldivesguide.jpg"}
          imageDescription={"An island in turquoise ocean with paths and water villas"}
          locationLink={"https://goo.gl/maps/5n8HVtHj9ECYemAEA"}
          description= {"A tropical paradise with soft white sandy beaches, turquoise oceans and unbelievable marine wildlife"}
        />
        <Places
          title={"Step Back In Time"}
          placeName={"The Cotswolds"}
          country={"UK"}
          imageURL={"https://www.planetware.com/wpimages/2020/06/england-london-to-cotswolds-best-ways-to-get-there-by-car.jpg"}
          imageDescription={"A quintessentially english village scene of stone houses behind a bridge that crosses a small stream"}
          locationLink={"https://goo.gl/maps/TrcfkJSbXszWzonF9"}
          description= {"Beautiful and quaint stone 18th and 19th century houses dotted across rolling hills of countryside"}
        />
    </body>
  );
}

export default PlacesContent;
