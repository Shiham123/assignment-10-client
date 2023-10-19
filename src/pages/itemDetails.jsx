import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
  const { id } = useParams();
  const [isDetails, setIsDetails] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/itemDetails/${id}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsDetails(data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const { name, url, brand, type, price, rating, details } = isDetails;

  return (
    <div>
      <img src={url} alt="" />
      <h1>{name}</h1>
      <h1>{brand}</h1>
      <h1>{type}</h1>
      <h1>{details}</h1>
      <h1>{price}</h1>
      <h1>{rating}</h1>
    </div>
  );
};

export default ItemDetails;
