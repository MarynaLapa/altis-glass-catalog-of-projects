import React, { useState } from 'react'
import Select from "react-select";
import { Controller, useForm } from 'react-hook-form'
import { glassCompany } from './glassData';

const FilterForm = () => {

    const [selectedOption, setSelectedOption] = useState(null)

    const defaultValues = {
        // companyName: { value: "", label: "" }
    };

    const { handleSubmit, register, reset, setValue, control } = useForm({ defaultValues });


    return (
        <form onSubmit={handleSubmit((data) => console.log(data))} className="form" action='#'>
            <label htmlFor="companyName"></label>
            <Controller
                name="companyName"
                control={control}
                    render={({ field }) => (
                        <Select
                            placeholder="Виберіть компанію-виробника скла"
                            id="companyName"
                            isClearable
                            {...field}
                            options={glassCompany}
                            onChange={value => setSelectedOption(value)}
                        />
                    )}
            />

            <label htmlFor="glassName"></label>
            <Controller
                name="glassName"
                control={control}
                    render={({ field }) => (
                        <Select
                            placeholder="Виберіть зовнішнє скло"
                            id="glassName"
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