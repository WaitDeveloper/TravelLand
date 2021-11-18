const places = [
  {
    title: 'Medellin',
    description:
      "El clima de Medellín, su paisaje montañoso, sus espectaculares vistas panorámicas y sus espacios verdes convierten los recorridos por la ciudad en una experiencia que seduce.",
    imageUrl: "https://source.unsplash.com/t4sQErfTLs8/800x433",
    time: 1500,
    Des:"MDE",
  },
  {
    title: 'Barranquilla',
    description:
      'Barranquilla es una maravillosa ciudad que debemos visitar, sus encantos para el turismo son innumerables. El río Magdalena y el mar son sus atractivos principales para los deportes acuáticos, el turismo ecológico y de aventura.',
    imageUrl: "https://source.unsplash.com/aqOy0IXZWa4/800x433",
    time: 1500,
    Des: "BAQ",
  },
  {
    title: 'Cartagena',
    description:
      "Enmarcada por una hermosa bahía, Cartagena de Indias es una de las ciudades más bellas y mejor conservadas de América; un tesoro que, hoy en día, es uno de los destinos turísticos más visitados de Colombia.",
    imageUrl: process.env.PUBLIC_URL + '/assets/island4.jpg',
    time: 1500,
    Des:"CTG",
  },
  {
    title: 'Santa Marta',
    description:
      "La privilegiada ubicación en una de las bahías más hermosas de América ha convertido a Santa Marta en uno de los principales destinos de sol y playa del Caribe Colombiano. ",
    imageUrl: process.env.PUBLIC_URL + '/assets/island5.jpeg',
    time: 1500,
    Des:"SMR",
  },
];

export default places;
