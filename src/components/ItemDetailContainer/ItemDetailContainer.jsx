import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from '../../firebase/config';

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const {itemId} = useParams()
    console.log({...item})

    useEffect(() => {
      const docRef = doc(db, "productos", itemId)
      getDoc(docRef)
        .then( doc => {
            setItem({ ...doc.data(), id: doc.id })
        })

    },[itemId])
  return (
    <div className="container my-5">
      {
        item && <ItemDetail {...item} />
      }
    </div>
  )
}

export default ItemDetailContainer
