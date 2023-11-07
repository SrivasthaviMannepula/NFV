import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './IntroducingNfv.css';

const IntroducingNfv = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      image: 'https://th.bing.com/th/id/OIP.sHIAX9vOF8FAQtfOHjoH3QHaHa?pid=ImgDet&rs=1',
      title: 'As time keeps ticking away...',
      description: 'Network Functions Virtualization (NFV) is a network architecture concept that uses virtualization to decouple network functions, such as routing and firewalls, from dedicated hardware devices.',
    },
    {
      id: 2,
      image: 'https://th.bing.com/th/id/OIP.dIslCjjho0qpZeqk1HWc0QHaEX?pid=ImgDet&w=800&h=471&rs=1',
      title: 'The number of internet-connected devices grow.',
      description: 'NFV offers greater flexibility, cost savings, and scalability compared to traditional hardware-based network infrastructure.',
    },
    {
      id: 3,
      image: 'https://th.bing.com/th/id/OIP.3zhGeYlTc7n0M11-xcQZgQHaE8?w=230&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      title: 'Network connectivity becomes more important.',
      description: 'NFV is implemented using software-based virtual network functions (VNFs) that can run on standard hardware and be easily managed and orchestrated.',
    },
    {
      id: 4,
      image: 'https://th.bing.com/th/id/OIP.ORop43-lPvhRZ1ojjqydbQHaE-?w=234&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      title: 'Businesses need to reduce operating expenditures.',
      description: 'NFV is implemented using software-based virtual network functions (VNFs) that can run on standard hardware and be easily managed and orchestrated.',
    },
    {
      id: 5,
      image: 'https://github.com/SrivasthaviMannepula/NFV/blob/main/IMG-20231105-WA0005.jpg?raw=true',
      title: 'This is where NFV comes into light.',
      description: 'NFV is implemented using software-based virtual network functions (VNFs) that can run on standard hardware and be easily managed and orchestrated.',
    },
  ]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 5000); // Change image every 5 seconds
    return () => {
      clearInterval(imageInterval);
    };
  }, [cards.length]);

  return (
    <div className="introducing-nfv-container">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        selectedItem={currentImageIndex}
        onChange={(index) => setCurrentImageIndex(index)}
      >
        {cards.map((card) => (
          <div key={card.id}>
            <img src={card.image} alt={`Image ${card.id}`} />
            <p className="legend">{card.title}</p>
            <p>{card.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default IntroducingNfv;
