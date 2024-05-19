import { useSelector } from 'react-redux';
import { yearSelector } from '../../store/filter/selector';
import Card from '../Card/Card'
import css from './CatalogList.module.css'

import db from '../../db.json'

const CatalogList = () => {

  const filterYear = useSelector(yearSelector)

  const catalogList = filterYear ? db.filter(el => el.yearOfCompletion === filterYear) : db

  return (
    <ul className={css.catalogList}>
      {catalogList.map((card, index) =>
        <li key={index} className={css.catalogItem}>
          <Card cardInfo={card}/>
        </li>
      )} 
    </ul>
  )
}

export default CatalogList