import { useParams } from 'react-router-dom';

const BrandItems = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>this is brand {id}</h1>
    </div>
  );
};

export default BrandItems;
