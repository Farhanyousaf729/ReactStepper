import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const Address = (props) => {
  const schema = yup.object().shape({
    streetLine1:yup.string().required(),
    streetLine2:yup.string().required(),
    postalCode: yup.string().required(),
    state:yup.string().required(),
    country:yup.string().required(),

    // password: yup.string().min(8).max(32).required(),
});
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)});
    // const [mydata, setmydata] = useState([])

  const submit = (data) => {
    if (data) {
      props.handle.Next(data)
    }
    // setmydata([...mydata, data])
  }
  return (
    <form className="flex flex-col w-[50%] mx-auto" action="">
      <input {...register("streetLine1")} className="border-2 mt-2" type="text" placeholder="Street Line 1" />
      <p>{errors.streetLine1?.message}</p>
      <input {...register("streetLine2")} className="border-2 mt-2" type="text" placeholder="Street Line 2" />
      <p>{errors.streetLine2?.message}</p>
      <input {...register("postalCode")} className="border-2 mt-2" type="number" placeholder="Postal Code" />
      <p>{errors.postalCode?.message}</p>
      <input {...register(`state`)} className="border-2 mt-2" type="text" placeholder="State" />
      <p>{errors.state?.message}</p>
      <input {...register(`country`)} className="border-2 mt-2" placeholder="Country  " type="text" />
      <p>{errors.country?.message}</p>


      <div className='flex'>
        <button className="bg-black text-white py-2 px-4 block mx-auto mt-10" onClick={props.handle.Prev} >PREV</button>
        <button className="bg-black text-white py-2 px-4 block mx-auto mt-10" onClick={handleSubmit(submit)}>NEXT</button>
      </div>


    </form>


  )
}
export default Address
