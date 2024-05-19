import CatalogList from '../../components/CatalogList/CatalogList'
import FilterForm from '../../components/FilterForm/FilterForm'
import css from "./Catalog.module.css"

const Catalog = () => {
    return (
        <section>
            <div className={`container ${css.position}`}>
                <div>
                    <FilterForm />
                </div>
                <div>
                    <CatalogList />
                </div>
            </div> 
        </section>
    )
}

export default Catalog