import CatalogList from '../../components/CatalogList/CatalogList'
import FilterForm from '../../components/FilterForm/FilterForm'

const Catalog = () => {
    return (
        <section>
            <div className='container'>
                <FilterForm />
    
                <CatalogList />
            </div> 
        </section>
    )
}

export default Catalog