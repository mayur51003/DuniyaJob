import React from "react";
import PreLoader from "../../../components/PreLoader";
import logo from "../../../assets/dj-white.png";
// import PreLoader from '../components/PreLoader'
import Button from "@mui/material/Button";
// import {navigate} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
// import bg from "../../../assets/Loader_bg.png"

const LoaderPage = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate('/Home');
  };
  
  return (
    <>
      <div className=" w-full h-[100vh] mr-0">
      {/* <img src={bg} alt="image" className=" flex h-2/3 w-full"/>   */}
        <div className=" flex w-full text-right text-white font-mono">
          <div className="flex ">
            <img src={logo} alt="image1" />
          </div>

          <div className=" flex-col mr-64">
            <div className="flex text-2xl w-full mt-40">
              Elevate your career with the right job.
            </div>
            <div className="flex text-5xl ">
              Your Future, Your Choice.
            </div>
            <div className=" mt-28">
              <Button variant="contained" onClick={navigateToHome} className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                Get Started ⇒
              </Button>
              
            </div>
          </div>
        </div>

        <PreLoader />
      </div>
    </>
  );
};

export default LoaderPage;