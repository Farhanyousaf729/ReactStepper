import React, { useState } from "react";
import StepOne from "./screen/stepone";
import Steptwo from "./screen/steptwo";
import Stepthree from "./screen/stepthree";
import Stepfour from "./screen/stepfour";
import { Stepper, Step } from "react-form-stepper";
const Steper = () => {
    const [activeStep, setactiveStep] = useState(0)
    const[userdata ,setuserdata]=useState({})
    // const[mydata , setmydata]=useState([])
    const handleNext = (data) => {
        if (activeStep === 3) {
            alert(`please submit data`)        
        }
        else{       
            setactiveStep(activeStep + 1)
            setuserdata({...userdata,...data})
        }
    }
    console.log(userdata,"userdata");
    // console.log(mydata,`arry`);
    const handlePre = () => {
        if (activeStep === 0) {
            alert(`already at start`)
        }
        else {
            setactiveStep(activeStep - 1)

        }

    }
   
    return (
        <>
            <Stepper activeStep={activeStep}>
                <Step label="Personal Info" />
                <Step label="Address" />
                <Step label="Educational Info" />
                <Step label="Child step 4" />
            </Stepper>
            {
                activeStep === 0 && (
                    <StepOne handle={{Next:handleNext,Prev:handlePre}}  />
                )
            }
            {
                activeStep === 1 && (
                    <Steptwo handle={{Next:handleNext,Prev:handlePre}} />
                )
            }   {
                activeStep === 2 && (
                    <Stepthree handle={{Next:handleNext,Prev:handlePre}} />
                )
            }   {
                activeStep === 3 && (
                    <Stepfour />
                )
            }

        </>
    )
}
export default Steper