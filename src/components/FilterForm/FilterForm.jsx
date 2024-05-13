import React, { useState } from 'react'
import ReactSelect from "react-select";
import { Controller, useForm } from 'react-hook-form'
import { glassCompany } from './glassData';

const FilterForm = () => {

    const defaultValues = {
        ReactSelect: { value: "", label: "" }
    };

    const { handleSubmit, reset, setValue, control } = useForm({ defaultValues });

    return (
    <form onSubmit={handleSubmit((data) => console.log(data))} className="form">
        <Controller
            name="ReactSelect"
            control={control}
            render={({ field }) => (
                <ReactSelect
                isClearable
                {...field}
                options={glassCompany}
                />
            )}
        />
    </form>
  )
}

export default FilterForm