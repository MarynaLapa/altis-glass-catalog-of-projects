import { Link } from 'react-router-dom'
import css from './Card.module.css'

const Card = ({ cardInfo }) => {
 
    const { subtitle, location, yearOfCompletion, glazingArea, GlassManufacturingCompany, externalGlass } = cardInfo

    return (
    <div className={css.card}>
        <div className={css.imgBox}>
                <img className={css.image} src="https://kept.com.ua/5aid/IMG_0900.jpg" alt="" />
        </div>
        <div className={css.content}>
                <h2 className={css.cardTitle}>{subtitle}</h2>
                <div className={css.cardScroll}>
                    <table className={css.table}>
                        <thead>
                            <tr className={css.tableTitle}>
                                <th scope="colgroup" colSpan="2" >Основні характеристики об'єкта</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={css.tableFirstColumn}>Рік:</td>
                                <td>{yearOfCompletion}р.</td>
                            </tr>
                            <tr>
                                <td className={css.tableFirstColumn}>Площа скління:</td>
                                <td>{glazingArea}кв.м.</td>
                            </tr>
                            <tr>
                                <td className={css.tableFirstColumn}>Зовнішнє скло:</td>
                                <td>{GlassManufacturingCompany} {externalGlass}</td>
                            </tr>
                            <tr>
                                <td className={css.tableFirstColumn}>Локація:</td>
                                <td>{location}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
               
            <Link to='/projectId'>Показати більше</Link>
        </div>
    </div>
  )
}

export default Card