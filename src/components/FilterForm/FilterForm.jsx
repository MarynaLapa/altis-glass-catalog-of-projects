import React, { useState } from 'react'
import ReactSelect from "react-select";
import { Controller, useForm } from 'react-hook-form'

const FilterForm = () => {

    const defaultValues = {
        ReactSelect: { value: "vanilla", label: "Vanilla" }
    };

    const { handleSubmit, reset, setValue, control } = useForm({ defaultValues });
    const [data, setData] = useState(null);
    console.log('data', ReactSelect.name)
    return (
    <form onSubmit={handleSubmit((data) => setData(data))} className="form">
        <Controller
            name="ReactSelect"
            control={control}
            render={({ field }) => (
                <ReactSelect
                isClearable
                {...field}
                options={[
                    { value: "chocolate", label: "Chocolate" },
                    { value: "strawberry", label: "Strawberry" },
                    { value: "vanilla", label: "Vanilla" }
                ]}
                />
            )}
        />
    </form>
  )
}

export default FilterForm