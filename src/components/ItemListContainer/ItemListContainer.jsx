import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import CategoryButton from '../CategoryButton/CategoryButton';
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from '../../firebase/config';



function ItemListContainer() {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const {categoryId} = useParams()

  useEffect(() => {
    setLoading(true)
    const productosRef = collection(db, "productos")
    const q = categoryId
                ?
                  query(productosRef, where("category",'==',categoryId))
                :
                  productosRef
    getDocs(q)
      .then((resp)=> {
        setProductos(resp.docs.map((doc) => {
          return{
            ...doc.data(),
            id: doc.id
          }
        }))
      })
      .finally(() => {
        setLoading(false)
      })
  }, [categoryId])

  return (

    <div> 
      <CategoryButton />
      {
        loading
          ? <h2>Cargando...</h2>
          : <ItemList productos={productos} />
      } 
    </div>
    
  );
}

export default ItemListContainer;
