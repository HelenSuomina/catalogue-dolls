import Bear_1 from "../assets/images/bear_1.jpg";
import Bear_2 from "../assets/images/bear_2.jpg";
import Bear_3 from "../assets/images/bear_3.jpg";
import Brooch_1 from "../assets/images/brooch_1.jpg";
import Brooch_2 from "../assets/images/brooch_2.jpg";
import Brooch_3 from "../assets/images/brooch_3.jpg";
import Bunny_1 from "../assets/images/bunny_1.jpg";
import Bunny_2 from "../assets/images/bunny_2.jpg";
import Bunny_3 from "../assets/images/bunny_3.jpg";
import Bunny_4 from "../assets/images/bunny_4.jpg";
import Fairy_1 from "../assets/images/fairy_1.jpg";
import Fairy_2 from "../assets/images/fairy_2.jpg";
import Fairy_3 from "../assets/images/fairy_3.jpg";
import Fairy_4 from "../assets/images/fairy_4.jpg";
import Fairy_5 from "../assets/images/fairy_5.jpg";
import Scary_1 from "../assets/images/scary_1.jpg";
import Scary_2 from "../assets/images/scary_2.jpg";
import Scary_3 from "../assets/images/scary_3.jpg";
import Scary_4 from "../assets/images/scary_4.jpg";
import Tilda_1 from "../assets/images/tilda_1.jpg";
import Tilda_2 from "../assets/images/tilda_2.jpg";
import Tilda_3 from "../assets/images/tilda_3.jpg";
import Zoo_1 from "../assets/images/zoo_1.jpg";
import Zoo_2 from "../assets/images/zoo_2.jpg";
import Zoo_3 from "../assets/images/zoo_3.jpg";
import Collection_1 from "../assets/images/set_Bunny_Friends.jpg";
import Collection_2 from "../assets/images/set_Donas.jpg";
import Collection_3 from "../assets/images/set_Fairies.jpg";
import Collection_4 from "../assets/images/set_Minnows.jpg";

const dolls = [
  {
    _id: "a01",
    dollName: "Daisy",
    dollType: { _id: "b01", name: "Teddy" },
    image: Bear_1,
    price: 19,
    numberInStock: 5,
    popularity: 2.5,
    liked: false,
    publishDate: "2019-02-03T19:03:27.809Z"
  },
  {
    _id: "a02",
    dollName: "Oscar",
    dollType: { _id: "b01", name: "Teddy" },
    image: Bear_2,
    price: 22,
    numberInStock: 2,
    popularity: 4,
    liked: false,
    publishDate: "2019-04-03T19:03:27.809Z"
  },
  {
    _id: "a03",
    dollName: "Theo",
    dollType: { _id: "b01", name: "Teddy" },
    image: Bear_3,
    price: 18,
    numberInStock: 1,
    popularity: 2.5,
    liked: false,
    publishDate: "2019-05-04T19:03:27.809Z"
  },
  {
    _id: "a04",
    dollName: "Lilly",
    dollType: { _id: "b02", name: "Brooch" },
    image: Brooch_1,
    price: 11.5,
    numberInStock: 3,
    popularity: 3,
    liked: false,
    publishDate: "2019-04-07T19:06:25.809Z"
  },
  {
    _id: "a05",
    dollName: "Tommy",
    dollType: { _id: "b02", name: "Brooch" },
    image: Brooch_2,
    price: 9.5,
    numberInStock: 5,
    popularity: 3.5,
    liked: false,
    publishDate: "2019-04-04T18:03:27.809Z"
  },
  {
    _id: "a06",
    dollName: "Elsie",
    dollType: { _id: "b02", name: "Brooch" },
    image: Brooch_3,
    price: 11,
    numberInStock: 1,
    popularity: 3.5,
    liked: false,
    publishDate: "2019-10-05T18:08:27.809Z"
  },
  {
    _id: "a07",
    dollName: "Rosie",
    dollType: { _id: "b03", name: "Bunny" },
    image: Bunny_1,
    price: 27,
    numberInStock: 3,
    popularity: 3,
    liked: false,
    publishDate: "2019-06-11T18:04:27.809Z"
  },
  {
    _id: "a08",
    dollName: "Molly",
    dollType: { _id: "b03", name: "Bunny" },
    image: Bunny_2,
    price: 29,
    numberInStock: 4,
    popularity: 3,
    liked: false,
    publishDate: "2019-07-09T18:04:27.809Z"
  },
  {
    _id: "a09",
    dollName: "Zoe",
    dollType: { _id: "b03", name: "Bunny" },
    image: Bunny_3,
    price: 31,
    numberInStock: 7,
    popularity: 2,
    liked: false,
    publishDate: "2019-08-12T11:09:27.809Z"
  },
  {
    _id: "a10",
    dollName: "Lucas",
    dollType: { _id: "b03", name: "Bunny" },
    image: Bunny_4,
    price: 26,
    numberInStock: 2,
    popularity: 3.5,
    liked: false,
    publishDate: "2019-10-06T18:05:27.809Z"
  },
  {
    _id: "a11",
    dollName: "Mia",
    dollType: { _id: "b04", name: "Fairy" },
    image: Fairy_1,
    price: 22.5,
    numberInStock: 3,
    popularity: 4,
    liked: false,
    publishDate: "2019-11-09T19:05:27.809Z"
  },
  {
    _id: "a12",
    dollName: "Ella",
    dollType: { _id: "b04", name: "Fairy" },
    image: Fairy_2,
    price: 24.5,
    numberInStock: 2,
    popularity: 3,
    liked: false,
    publishDate: "2019-08-02T19:05:27.809Z"
  },
  {
    _id: "a13",
    dollName: "Christian",
    dollType: { _id: "b04", name: "Fairy" },
    image: Fairy_3,
    price: 23,
    numberInStock: 4,
    popularity: 3,
    liked: false,
    publishDate: "2019-07-01T19:05:27.809Z"
  },
  {
    _id: "a14",
    dollName: "Esme",
    dollType: { _id: "b04", name: "Fairy" },
    image: Fairy_4,
    price: 20.5,
    numberInStock: 2,
    popularity: 3,
    liked: false,
    publishDate: "2019-08-03T19:05:27.809Z"
  },
  {
    _id: "a15",
    dollName: "Ivy",
    dollType: { _id: "b04", name: "Fairy" },
    image: Fairy_5,
    price: 22,
    numberInStock: 3,
    popularity: 2.5,
    liked: false,
    publishDate: "2019-08-02T19:05:27.809Z"
  },
  {
    _id: "a16",
    dollName: "Penny",
    dollType: { _id: "b05", name: "Scary" },
    image: Scary_1,
    price: 29.5,
    numberInStock: 2,
    popularity: 5.5,
    liked: false,
    publishDate: "2019-11-09T19:05:27.809Z"
  },
  {
    _id: "a17",
    dollName: "Emily",
    dollType: { _id: "b05", name: "Scary" },
    image: Scary_2,
    price: 27,
    numberInStock: 3,
    popularity: 3.5,
    liked: false,
    publishDate: "2019-10-08T19:05:27.809Z"
  },
  {
    _id: "a18",
    dollName: "Victor",
    dollType: { _id: "b05", name: "Scary" },
    image: Scary_3,
    price: 26,
    numberInStock: 3,
    popularity: 3,
    liked: false,
    publishDate: "2019-12-09T19:05:27.809Z"
  },
  {
    _id: "a19",
    dollName: "Isobel",
    dollType: { _id: "b05", name: "Scary" },
    image: Scary_4,
    price: 28.5,
    numberInStock: 2,
    popularity: 4.5,
    liked: false,
    publishDate: "2019-03-02T19:05:27.809Z"
  },
  {
    _id: "a20",
    dollName: "Maria",
    dollType: { _id: "b06", name: "Tilda" },
    image: Tilda_1,
    price: 17.5,
    numberInStock: 4,
    popularity: 2.5,
    liked: false,
    publishDate: "2019-03-11T19:05:27.809Z"
  },
  {
    _id: "a21",
    dollName: "Hollie",
    dollType: { _id: "b06", name: "Tilda" },
    image: Tilda_2,
    price: 16,
    numberInStock: 5,
    popularity: 2,
    liked: false,
    publishDate: "2019-05-11T19:05:27.809Z"
  },
  {
    _id: "a22",
    dollName: "Tilly",
    dollType: { _id: "b06", name: "Tilda" },
    image: Tilda_3,
    price: 17,
    numberInStock: 3,
    popularity: 3,
    liked: false,
    publishDate: "2019-06-05T19:05:27.809Z"
  },
  {
    _id: "a23",
    dollName: "Vegas",
    dollType: { _id: "b07", name: "Zoo" },
    image: Zoo_1,
    price: 21.5,
    numberInStock: 2,
    popularity: 4,
    liked: false,
    publishDate: "2019-07-12T19:05:27.809Z"
  },
  {
    _id: "a24",
    dollName: "Ronnie",
    dollType: { _id: "b07", name: "Zoo" },
    image: Zoo_2,
    price: 19,
    numberInStock: 3,
    popularity: 3,
    liked: false,
    publishDate: "2019-08-01T19:05:27.809Z"
  },
  {
    _id: "a25",
    dollName: "Zuzu",
    dollType: { _id: "b07", name: "Zoo" },
    image: Zoo_3,
    price: 18.5,
    numberInStock: 1,
    popularity: 4.5,
    liked: false,
    publishDate: "2019-09-02T19:05:27.809Z"
  },
  {
    _id: "a26",
    dollName: "Bunnies",
    dollType: { _id: "b08", name: "Collection" },
    image: Collection_1,
    price: 65,
    numberInStock: 1,
    popularity: 3,
    liked: false,
    publishDate: "2019-08-12T19:05:27.809Z"
  },
  {
    _id: "a27",
    dollName: "Donas",
    dollType: { _id: "b08", name: "Collection" },
    image: Collection_2,
    price: 39.5,
    numberInStock: 1,
    popularity: 2,
    liked: false,
    publishDate: "2019-11-10T19:05:27.809Z"
  },
  {
    _id: "a28",
    dollName: "Fairies",
    dollType: { _id: "b08", name: "Collection" },
    image: Collection_3,
    price: 55,
    numberInStock: 1,
    popularity: 4,
    liked: false,
    publishDate: "2019-10-07T19:05:27.809Z"
  },
  {
    _id: "a29",
    dollName: "Minnows",
    dollType: { _id: "b08", name: "Collection" },
    image: Collection_4,
    price: 29,
    numberInStock: 1,
    popularity: 3.5,
    liked: false,
    publishDate: "2019-11-09T19:05:27.809Z"
  }
];

export function getDolls() {
  return dolls;
}

export function getDoll(id) {
  return dolls.find(d => d.id === id);
}
