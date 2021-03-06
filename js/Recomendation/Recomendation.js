const item1 = [
  {
    id: 1,
    title: "Jurassic Park Original Bones Backpack",
    price: "19.90",
    img: "../../img/bp8uq9jpa-5.jpg",
  },
  {
    id: 2,
    title: "Sonnic The Hedgehoc Adult UniSex Gaiter",
    price: "7.49",
    img: "../../img/ga9llfseg-4.jpg",
  },
  {
    id: 3,
    title: "Star Wars Storm Trooper 7 3D Mug",
    price: "14.90",
    img: "../../img/abymug362.jpg",
  },
  {
    id: 4,
    title: "Star Wars Boba Feet Metal Keyring",
    price: "7.99",
    img: "../../img/abykey083.jpg",
  },
  {
    id: 5,
    title: "Jurassic Park Rangers Snapback Cap",
    price: "14.99",
    img: "../../img/sb7ke3jpa-3.jpg",
  },
];

const item2 = [
  {
    id: 2,
    title: "Sonnic The Hedgehoc Adult UniSex Gaiter",
    price: "19.90",
    img: "../../img/bp8uq9jpa-5.jpg",
  },
  {
    id: 6,
    title: "Pac-Man Maze Safe Ball Bearing Maze Money Box",
    price: "14.49",
    img: "../../img/gifpal719-1.jpg",
  },
  {
    id: 7,
    title: "Harry Potter Glasses Scar T-Shirt",
    price: "8.90",
    img: "../../img/scar-glasses-black.jpg",
  },
  {
    id: 8,
    title: "Batman Shiny Cape Knee High Sock",
    price: "6.69",
    img: "../../img/kh101vbtm-1.jpg",
  },
  {
    id: 1,
    title: "Jurassic Park Original Bones Backpack",
    price: "19.90",
    img: "../../img/bp8uq9jpa-5.jpg",
  },
];

const graph = createGraph(false);

//item1
for (let i = 0; i < item1.length; i++) {
  graph.addNode(item1[i]);
}
for (let i = 0; i < item1.length - 1; i++) {
  graph.addEdges(item1[i], item1[i + 1]);
}

//item2
for (let i = 0; i < item2.length; i++) {
  graph.addNode(item2[i]);
}
for (let i = 0; i < item2.length - 1; i++) {
  graph.addEdges(item2[i], item2[i + 1]);
}

const recomendation = graph.recommend();
const allItem = item1.concat(item2);
allItem.splice(5, 1);
allItem.splice(8, 1);

console.log("Get All Product :", allItem);
console.log("Get All Recomendation Product", recomendation);
