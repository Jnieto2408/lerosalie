import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { pedirDatos } from '../../helpers/pedirDatos';
import { useParams } from 'react-router-dom';
import CategoryButton from '../CategoryButton/CategoryButton';



function ItemListContainer() {
  const [productos, setProductos] = useState([])
  const {categoryId} = useParams()
  console.log(categoryId)

  useEffect(() => {
    pedirDatos()
      .then((res) => {
        if(categoryId){
          setProductos(res.filter(prod => prod.category === categoryId))
        } else {
          setProductos(res)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, [categoryId])

  return (

    <div>
        <CategoryButton/>
        <ItemList productos={productos}/>
    </div>
    
  );
}

export default ItemListContainer;
