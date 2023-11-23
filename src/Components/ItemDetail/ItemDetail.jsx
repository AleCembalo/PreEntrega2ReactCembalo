import { ItemCount } from "../ItemCount/ItemCount"
import styles from "./itemDetail.module.css"


export const ItemDetail = ({name, category, price, pictureUrl, stock}) => {

  return (
    <div className={styles.cardDetail}>
      <div>
        <img className={styles.pictureUrlDetail} src={pictureUrl} alt="" />
      </div>
      <div className={styles.textCard}>
        <p> <strong>Nombre: </strong>{name} </p>
        <p> <strong>Precio: </strong>{price}$ </p>
        <p> <strong>Tipo: </strong>{category} </p>
        <strong>QUEDAN {stock}! </strong>
      </div>
      <div>
        <ItemCount stock={stock} onAdd={(quantity) => console.log('Agregaste ',quantity)}/>
      </div>
    </div>
  )
}
