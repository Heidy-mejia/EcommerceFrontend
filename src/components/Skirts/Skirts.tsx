import { useEffect, useState } from "react";
import {  getProductsSkirts } from "../../api/products.api";
import '../styleComponents.css'


export const Skirts = () => {
  const [products, setProducts] = useState<[]>([]);

  const fetchProducts = async () => {
    const products = await getProductsSkirts();
    setProducts(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
    <div className="container">
      <h2>Faldas</h2>
      
      {products.map((producto) => (
        <div className="card" key={producto.id}>
            <div className="card-inner">
            <div className="card-front">
              <h2> {producto.name}  </h2>
              <img src={`${producto.imagen}`}
                srcSet={`${producto.imagen}`}
              />
            </div>
            <div className="card-back">
            {producto.name}  
            <p>{producto.description}  </p>
            <p>{producto.price}  </p>
            <button>Comprar</button>
            </div>
        </div>
        </div>
        ))}
    </div>
    </>
  );
};
