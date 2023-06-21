
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const StepOne = (props) => {
    const schema = yup.object().shape({
        firstName:yup.string().min(3).max(10).required(),
        lastName:yup.string().min(3).max(10).required(),
        email: yup.string().email().required(),
        gender:yup.string().required(),
        contact:yup.string().required(),
        CNIC:yup.string().required()
        // .matches("^[0-9]{5}-[0-9]{7}-[0-9]$")
            
        // if (preg_match('/^([0-9]{5})[\-]([0-9]{7})[\-]([0-9]{1})+/', $rsnew['teacher_cnic'])) {
        //     $rsnew['teacher_cnic'] = clearInput($rsnew['teacher_cnic']);                                   
        //  } else {                                                                         
        //     $this->setFailureMessage("Invalid CNIC");
        //     return false;
        //  }
        // password: yup.string().min(8).max(32).required(),
    });
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });
    // const [mydata, setmydata] = useState([])


    const submit = (data) => {
        if (data) {
            props.handle.Next(data)
        }
        // setmydata([...mydata, data])
    }

    return (
        <form className="flex flex-col w-[50%] mx-auto" action="">
            <input {...register("firstName")} className="border-2 mt-2" type="text" placeholder="first Name" />
            <p>{errors.firstName?.message}</p>
            <input {...register("lastName")} className="border-2 mt-2" type="text" placeholder="last Name" />
            <p>{errors.lastName?.message}</p>
            <input {...register("email")} className="border-2 mt-2" type="email" placeholder="email" />
            <p>{errors.email?.message}</p>
            <input {...register(`gender`)} className="border-2 mt-2" type="text" placeholder="gender" />
            <p>{errors.gender?.message}</p>
            <input {...register(`contact`)} className="border-2 mt-2" placeholder="Contact" type="number" />
            <p>{errors.contact?.message}</p>
            <input {...register(`CNIC`)} className="border-2 mt-2" type="number" placeholder="CNIC" />
            <p>{errors.CNIC?.message}</p>
            {/* {errors && (<p>not a valid format</p>)} */}

            <div className="flex">
                <button className="bg-black text-white py-2 px-4 block mx-auto mt-10" onClick={props.handle.Prev} >PREV</button>
                <button className="bg-black text-white py-2 px-4 block mx-auto mt-10" onClick={handleSubmit(submit)}>NEXT</button>
            </div>


        </form>
    )
}
export default StepOne