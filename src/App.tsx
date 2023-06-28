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
        <Places
          title={"Gone but not forgotten"}
          placeName={"The Hairy Lemon, Jinja"}
          country={"Uganda"}
          imageURL={"https://scontent.flhr4-3.fna.fbcdn.net/v/t39.30808-6/302522642_457517953057665_2953685949641902779_n.jpg?stp=dst-jpg_s960x960&_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=8wWPwfu5WjIAX_8_Bmc&_nc_ht=scontent.flhr4-3.fna&oh=00_AfCPNG5KdXrdlbfwUoluhSeHtCKqbTfYLB7agMvVgPlg0A&oe=64A0DF2B"}
          imageDescription={"Island beach with tropical trees, upon which visitors arrive via a small wooden boat which is pictured"}
          locationLink={"https://www.google.com/maps/d/embed?mid=1DguF5zH_lgyTgKjtZjIUXqqGsEU&ehbc=2E312F"}
          description= {"A tiny tropical island arrived at by kayak with soft sand and where monkeys and birds flit around the branches above your head. The island was flooded for the Isimba Dam in 2018 so memory of it's beauty is even more precious."}
        />
    </body>
  );
}

export default PlacesContent;
