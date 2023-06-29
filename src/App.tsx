//import { isIndexSignatureDeclaration } from "typescript";
import "./styles.css";
import Places from "./places";

function PlacesContent(): JSX.Element {
  return <body>{arrayOfPlaces.map(formatMyPlace)}</body>;
}

interface PlacesProps {
  title: string;
  placeName: string;
  country: string;
  imageURL: string;
  imageDescription: string;
  locationLink: string;
  description: string;
}

const formatMyPlace = (eachPlace: PlacesProps) => (
  <Places
    title={eachPlace.title}
    placeName={eachPlace.placeName}
    country={eachPlace.country}
    imageURL={eachPlace.imageURL}
    imageDescription={eachPlace.imageDescription}
    locationLink={eachPlace.locationLink}
    description={eachPlace.description}
  />
);

const arrayOfPlaces: PlacesProps[] = [
  {
    title: "Tropical Paradise",
    placeName: "The Maldives",
    country: "The Maldives",
    imageURL: "https://media.nomadicmatt.com/maldivesguide.jpg",
    imageDescription:
      "An island in turquoise ocean with paths and water villas",
    locationLink: "https://goo.gl/maps/5n8HVtHj9ECYemAEA",
    description:
      "A tropical paradise with soft white sandy beaches, turquoise oceans and unbelievable marine wildlife",
  },
  {
    title: "Step Back In Time",
    placeName: "The Cotswolds",
    country: "UK",
    imageURL:
      "https://www.planetware.com/wpimages/2020/06/england-london-to-cotswolds-best-ways-to-get-there-by-car.jpg",
    imageDescription:
      "A quintessentially english village scene of stone houses behind a bridge that crosses a small stream",
    locationLink: "https://goo.gl/maps/TrcfkJSbXszWzonF9",
    description:
      "Beautiful and quaint stone 18th and 19th century houses dotted across rolling hills of countryside",
  },
  {
    title: "Gone But Not Forgotten",
    placeName: "The Hairy Lemon, Jinja",
    country: "Uganda",
    imageURL:
      "https://scontent.flhr4-3.fna.fbcdn.net/v/t39.30808-6/302522642_457517953057665_2953685949641902779_n.jpg?stp=dst-jpg_s960x960&_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=8wWPwfu5WjIAX_8_Bmc&_nc_ht=scontent.flhr4-3.fna&oh=00_AfCPNG5KdXrdlbfwUoluhSeHtCKqbTfYLB7agMvVgPlg0A&oe=64A0DF2B",
    imageDescription:
      "Island beach with tropical trees, upon which visitors arrive via a small wooden boat which is pictured",
    locationLink:
      "https://www.google.com/maps/d/embed?mid=1DguF5zH_lgyTgKjtZjIUXqqGsEU&ehbc=2E312F",
    description:
      "A tiny tropical island arrived at by kayak with soft sand and where monkeys and birds flit around the branches above your head. The island was flooded for the Isimba Dam in 2018 so memory of it's beauty is even more precious.",
  },
  {
    title: "British Pastoral",
    placeName: "Lake District",
    country: "UK",
    imageURL:
      "https://media.istockphoto.com/id/680687290/photo/mountain-sheep-in-the-lake-district-national-park-cumbria-uk.jpg?s=612x612&w=0&k=20&c=YnS9cIB-ExBxXyMj82ViU3ZF0oVN57Tgct1IbcZ8p0I=",
    imageDescription:
      "Yew Tree farm, a well known herdwick sheep farm formerly owned by Beatrix Potter, set in countryside hills",
    locationLink: "https://goo.gl/maps/tF4T6Ubu1GcSFjqv6",
    description:
      "Has idyllic cottages, farms, wildlife and countryside, associations with famous creatives including Beatrix Potter and William Wordsworth, but also fantastic for adventure sports including hiking and climbing",
  },
  {
    title: "Home",
    placeName: "Essex",
    country: "UK",
    imageURL:
      "https://eu-assets.simpleview-europe.com/essex/imageresizer/?image=%2Fdmsimgs%2FHanningfield_-_Nature_2_1920176985.jpg&action=ProductDetailImage",
    imageDescription: "A woodland path",
    locationLink: "https://goo.gl/maps/ZvT6cALodUbeg2ez6",
    description:
      "Where I have lived ever since I was born, a mix of towns, villages and countryside",
  },
];

export default PlacesContent;
