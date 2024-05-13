import Card from '../Card/Card'
import css from './CatalogList.module.css'

import db from '../../db.json'

const CatalogList = () => {

  return (
    <ul className={css.catalogList}>
      {db.map((card, index) =>
        <li key={index} className={css.catalogItem}>
          <Card cardInfo={card}/>
        </li>
      )} 
    </ul>
  )
}

export default CatalogList