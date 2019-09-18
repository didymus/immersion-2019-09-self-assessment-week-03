//DO NOT MODIFY THIS FILE

var fishData = [
  {
    id: 1,
    name: 'Goldfish',
    image: 'http://tinyurl.com/n4vgcl5',
    description: 'Everyone\'s first pet'
  },
  {
    id: 2,
    name: 'Pufferfish',
    image: 'http://tinyurl.com/kxd7cuu',
    description: 'So puffy!'
  },
  {
    id: 5,
    name: 'Tuna',
    image: 'http://tinyurl.com/zgs7z2s',
    description: 'Why are these things so huge? They\'re terrifying.'
  }
];

ReactDOM.render(
  <FishTable fishes={fishData} />,
  document.getElementById('app')
);
