import { useEffect, useState } from 'react'
import Select from "react-select";
import { year } from './glassData';
import css from "./FilterForm.module.css"
import { useDispatch } from 'react-redux';
import { setFilter } from '../../store/filter/filterSlice';

const FilterForm = () => {

    const [yearValue, setYearValue] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
      
        dispatch(setFilter(yearValue))

    }, [yearValue])
    
    return (
        <Select
            className={css.select}
            name="glassYear"
            placeholder="Виберіть рік"
            id="glassYear"
            isClearable
            options={year}
            onChange={value => setYearValue(value)}
        />
    )
}

export default FilterForm