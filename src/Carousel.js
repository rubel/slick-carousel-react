import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

var items = [
  {
    name: 'Random Name #1',
    description: 'Probably the most random thing you have ever seen!',
    background: '#ff0000',
  },
  {
    name: 'Random Name #2',
    description: 'Hello World!',
    background: '#ffff00',
  },
  {
    name: 'Random Name #3',
    description: 'Working? really? wooo...its simple',
    background: '#783ff7',
  },
  {
    name: 'Random Name #4',
    description: 'Hello World! I am again with the item',
    background: '#ff00ff',
  },
  {
    name: 'Random Name #5',
    description: 'Hello World!, this is 5',
    background: '#736fff',
  },
  {
    name: 'Random Name #6',
    description: 'Working? really? wooo...its simple, its 6',
    background: '#ff0970',
  },
  {
    name: 'Random Name #7',
    description: 'finally...its 7',
    background: '#00ff76',
  },
];

export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };
  return (
    <div style={{ width: '800px', margin: '100px auto 0px auto' }}>
      <Slider {...settings}>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Slider>
    </div>
  );
}

function Item(props) {
  var style = {
    border: props.item.background,
    backgroundColor: props.item.background,
    padding: '20px',
    minHeight: '200px',
  };

  return (
    <div style={style}>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <span className='CheckButton'>Check it out!</span>
    </div>
  );
}
