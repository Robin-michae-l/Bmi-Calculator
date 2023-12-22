import React, { useState } from "react";
import { TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function Bmi() {
  const [bmi, setBmi] = useState(0);
  
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  
  const [isweight, setisWeight] = useState(true);
  const [isheight, setisHeight] = useState(true);

  const Validate = (e) => {
    const { name, value } = e.target;

    if (!!value.match(/^[0-9]*.?[0-9]+$/)) {
        if (name == "weight") {
        setWeight(value);
        setisWeight(true);
      } else {
        setHeight(value);
        setisHeight(true);
      }
    } else {
       if (name == "weight") {
        setWeight(value);
        setisWeight(false);
      } else {
        setHeight(value);
        setisHeight(false);
      }
    }
  };

  const bmiCalculate=(e)=>{
    e.preventDefault()
    if( !weight || !height){
      alert("Please fill the form ")
    }else{
      setBmi((weight/height*height))
    }
  }

  const hReset=(e)=>{
   setBmi(0)
   setWeight(0)
   setHeight(0)
   setisWeight(0)
   setisHeight(0)
  }
  return (
    <div className="d-flex justify-content-center align-items-center w-100  bg-dark " style={{height:'100vh'}}>
      <div className="bg-light p-5 rounded ">
        <h1 className="text-center">Bmi Calculator</h1>
        <p className="text-center">Calculate BMI easily</p>
        <div className="bg-success d-flex justify-content-center align-items-center w-100 p-3 flex-column rounded mt-4 shadow">
          <h2>{bmi} kg/m2</h2>
          <p style={{ fontWeight: "bold" }}>Calculated BMI</p>
        </div>
        <form className="mt-3" onSubmit={bmiCalculate}>
          

          <div className="mb-3 ">
            <TextField className="w-100"
            name="weight"
              id="outlined-basic"
              value={weight || ""}
              label="weight"
              variant="outlined"
              onChange={(e) => Validate(e)}
            />
          </div>

          {!isweight && (
            <div>
              <p className="text-danger fw-bolder">Invalid input</p>
            </div>
          )}

          <div className="mb-3">
            <TextField className="w-100"
            name="height"
              id="outlined-basic"
              value={height || ""}
              label="Height"
              variant="outlined"
              onChange={(e) => Validate(e)}
            />
          </div>

          {!isheight && (
            <div>
              <p className="text-danger fw-bolder">Invalid input</p>
            </div>
          )}

          <Stack direction="row" spacing={2} className="mt-5">
            <Button
              type="submit"
              className="bg-info"
              style={{ width: "200px", height: "50px",color:'white' }}
              variant="outlined"
            >
             Calculate
            </Button>
            <Button
            onClick={hReset}
              variant="outlined"
              style={{ width: "200px", height: "50px",color:"black" }}
              className="bg-warning"
            >
             Reset
            </Button>
          </Stack>
        </form>
      </div>
    </div>
  );
}

export default Bmi;
