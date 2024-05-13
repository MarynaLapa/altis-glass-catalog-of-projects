import css from './Card.module.css'

const Card = ({ cardInfo }) => {
 
    const { subtitle, location, yearOfCompletion, glazingArea, GlassManufacturingCompany, externalGlass } = cardInfo

    return (
    <div className={css.card}>
        <div className={css.imgBox}>
            <img className={css.image} src="./cam-night-1.jpg" alt="" />
        </div>
        <div className={css.content}>
                <h2>{subtitle}</h2>
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
               
            <a href="">Show More</a>
        </div>
    </div>
  )
}

export default Card