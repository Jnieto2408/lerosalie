import Item from '../Item/Item'
import './itemlist.css'

const ItemList = ({productos}) => {
  return (
      <div className='cardContainer'>
          {productos.map((prod) => <Item key={prod.id} {...prod} />)}
      </div>
  )
}

export default ItemList