import React from 'react';
import ProductCard from '../components/ProductCard';
import './Home.css'; 

const Home = () => {
  const products = [
    { name: 'Spiderman', description: 'Juguete de Spiderman (Mark 1)', price: 299.99, image: '../imagenes/juguete-spiderman.jpg' },
    { name: 'Iron Man', description: 'Juguete de Iron Man con accesorios', price: 399.99, image: '../imagenes/juguete-iron-man.jpg' },
    { name: 'Thor', description: 'Descripción del producto 3', price: 215.85, image: '../imagenes/juguete-thor.jpg' },
    { name: 'Black widow', description: 'Descripción del producto 4', price: 359, image: '../imagenes/juguete-black-widow.jpg' },
    { name: 'Hulk', description: 'Descripción del producto 5', price: 379.15, image: '../imagenes/juguete-hulk.jpg' },
  ];

  return (
    <div className="home">
      <h1>Más vendidos</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
