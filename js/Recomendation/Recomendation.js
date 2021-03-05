const user1 = [
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

const user2 = [
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

//USER1
for (let i = 0; i < user1.length; i++) {
  graph.addNode(user1[i]);
}
for (let i = 0; i < user1.length - 1; i++) {
  graph.addEdges(user1[i], user1[i + 1]);
}

//USER2
for (let i = 0; i < user2.length; i++) {
  graph.addNode(user2[i]);
}
for (let i = 0; i < user2.length - 1; i++) {
  graph.addEdges(user2[i], user2[i + 1]);
}

const recomendation = graph.recommend();

console.log(graph.print());
console.log(recomendation);
