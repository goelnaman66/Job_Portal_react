import React, { useState } from 'react'


const Form2 = (props) => {
    const [formData, setFormData] = useState({
        expMin:"",
        expMax:"",
        salMin:"",
        salMax:"",
        employee:"",
        apply:""
      });
    
      const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(formData);
      };


    return ( 
        <div className='w-1/3 border-gray-400 border-4 p-4'>
            <form className='flex flex-col p-4'>
                <div className='flex flex-row justify-between mb-4 mt-2'>
                    <h1 className='text-3xl mb-4'>Create a Job</h1>
                    <h3 className='text-2xl font-bold mt-2' >Step 2</h3>
                </div>
                <div className='flex flex-col'>
                <label className='p-1'>
                    Experience
                </label>
                <div className='flex flex-row justify-evenly'>
                    <input type="text" name="expMin" placeholder='Minimum' value={formData.expMin} onChange={handleChange} className='p-1 mt-1 border-2 mb-2 w-1/2 mr-2'/>
                    <input type="text" name="expMax" placeholder='Maximum' value={formData.expMax} onChange={handleChange} className='p-1 mt-1 border-2 mb-2 w-1/2 '/>
                </div>
                    
    

                <label className='p-1'>
                    Salary
                </label>
                <div className='flex flex-row'>
                    <input type="text" name="salMin" placeholder='Minimum' value={formData.salMin} onChange={handleChange} className='p-1 mt-1 border-2 mb-2 w-1/2 mr-2'/>
                    <input type="text" name="salMax" placeholder='Maximum' value={formData.salMax} onChange={handleChange} className='p-1 mt-1 border-2 mb-2 w-1/2 '/>
                </div>

                <label className='p-1'>
                    Total employee
                </label>
                    <input type="text" name="employee" placeholder='ex. 100' value={formData.employee} onChange={handleChange} className='p-1 mt-1 border-2 mb-2'/>
                 

                <label className='p-1'>
                    Apply Type
                </label>
                <div className='flex flex-row'>
                    <div>
                        <input type="radio" name="apply" value="Quick" onChange={handleChange} className='p-1 mt-1 mb-2 mr-2'/>
                        <label className='mr-4'>Quick apply</label><br/>
                    </div>
                    
                    <div>
                        <input type="radio" name="apply" value="External" onChange={handleChange} className='p-1 mt-1 mb-2 mr-2'/>
                        <label>External apply</label><br/>
                    </div>
                </div>
                
                

                <div className='flex flex-row justify-end'>
                    <button type='submit' onClick={handleSubmit} className="bg-sky-400 text-white pt-2 pb-2 pl-4 pr-4 rounded-sm mt-10 mb-2">Save</button>
                </div>
                 
                </div>

            </form>
        </div>
    )
}

export default Form2;