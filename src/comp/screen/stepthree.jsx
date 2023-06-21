import React from 'react'
import { useForm } from 'react-hook-form'
const Education =(props)=>{
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

    // const [mydata, setmydata] = useState([])

    const submit = (data) => {
      if (data) {
        props.handle.Next()
      }
      // setmydata([...mydata, data])
  
  }
  return (
    <form className="flex flex-col w-[50%] mx-auto" action="">
      <input {...register("streetLine1", { required: "this is required" })} className="border-2 mt-2" type="text" placeholder="Street Line 1" />
      <p>{errors.streetLine1?.message}</p>
      <input {...register("streetLine2", { required: "this is required" })} className="border-2 mt-2" type="text" placeholder="Street Line 2" />
      <p>{errors.streetLine2?.message}</p>
      <input {...register("postalCode", { required: `this is required` })} className="border-2 mt-2" type="number" placeholder="Postal Code" />
      <p>{errors.postalCode?.message}</p>
      <input {...register(`state`, { required: `this is required` })} className="border-2 mt-2" type="text" placeholder="State" />
      <p>{errors.state?.message}</p>
      <input {...register(`country`, { required: `this is required` })} className="border-2 mt-2" placeholder="Country  " type="text" />
      <p>{errors.country?.message}</p>


      <div className='flex'>
        <button className="bg-black text-white py-2 px-4 block mx-auto mt-10" onClick={props.handle.Prev} >PREV</button>
        <button className="bg-black text-white py-2 px-4 block mx-auto mt-10" onClick={handleSubmit(submit)}>NEXT</button>
      </div>


    </form>

  )
}
export default Education