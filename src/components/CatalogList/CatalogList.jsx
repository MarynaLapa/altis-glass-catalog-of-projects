import db from '../../db.json'
import css from '../Card/Card.module.css'
import Card from '../Card/Card'

const CatalogList = () => {

  return (
    <ul className={css.list}>
      {db.map((card, index) =>
        <li key={index} className={css.item}>
          <Card cardInfo={card}/>
        </li>
      )} 
    </ul>
  )
}

export default CatalogList