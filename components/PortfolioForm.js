import {useForm } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import {  useEffect } from 'react'

const PortfolioForm = ({ onSubmit ,initalData = {}}) => {
    
    const { register, handleSubmit, watch, setValue } = useForm(
      
        {defaultValues:{
            title: initalData && initalData.title,
            startDate: initalData.startDate &&( new Date(initalData.startDate || null)) ,
            endDate:initalData.endDate &&( new Date(initalData.endDate || null)) ,
            company:initalData && (initalData.company),
            companyWebsite:initalData && (initalData.companyWebsite),
            location: initalData && (initalData.location),
            description: initalData && (initalData.description),
            jobTitle: initalData && (initalData.jobTitle)
            

        }}

    )
    const startDate = watch('startDate')
    const endDate = watch('endDate')
    

    const handleDateChange = dateType => date => {
        setValue(dateType, date)
    }

    useEffect(() => {
        register("startDate", { required: true });
        register("endDate", { required: true });

    }, [register])

  


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                    {...register("title")}
                    type="text"
                    className="form-control"
                    id="title" />
            </div>

            <div className="form-group">
                <label htmlFor="city">Company</label>
                <input
                    {...register("company")}
                    type="text"
                    className="form-control"
                    id="company" />
            </div>

            <div className="form-group">
                <label htmlFor="city">Company Website</label>
                <input
                    {...register("companyWebsite")}

                    type="text"
                    className="form-control"
                    id="companyWebsite" />
            </div>

            <div className="form-group">
                <label htmlFor="street">Location</label>
                <input
                    {...register("location")}
                    type="text"
                    className="form-control"
                    id="location" />
            </div>

            <div className="form-group">
                <label htmlFor="street">Job Title</label>
                <input
                    {...register("jobTitle")}

                    type="text"
                    className="form-control"
                    id="jobTitle" />
            </div>

            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                 {...register("description")}
                    rows="5"
                    type="text"
                    className="form-control"
                    id="description">
                </textarea>
            </div>

            <div className="form-group">
                <label htmlFor="startDate">Start Date</label>
                <div>
                    <DatePicker
                        showYearDropdown
                        onChange={handleDateChange('startDate')}
                        selected={startDate}
                    />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="endDate">End Date</label>
                <div>
                    <DatePicker
                        showYearDropdown
                        onChange={handleDateChange('endDate')}
                        selected={endDate}
                    />
                </div>
            </div>

            <div className="form-group">
                
            </div>

            <button
           
                type="submit"
                className="btn btn-primary">Create
                
</button>
        </form>

    )

}

export default PortfolioForm