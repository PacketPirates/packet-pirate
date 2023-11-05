import React from "react";
import { Link ,useNavigate} from "react-router-dom";

import { UserAuth } from "../context/AuthContext";
const Home = () => {
  const { logout } = UserAuth();
  const navigate = useNavigate();
  const logOutHandler = () => {
    logout();
    navigate("/");
  };

  return (
    <div name="Home"className="nav-link w-full h-screen bg-gradient-to-b from-sky-500 to-blue-900 text-black ">
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="homePage">
        <div className="post">
          <div className="postHeader">
            
          Data Collection
          </div>
          
          <div className="postTextContainer text-center">  </div>
  
          <div className="postTextContainer "> Data  </div>
     
          
          
          
          
        </div>
        <div className="post">
          <div className="postHeader">
          Deauthentication
            
          </div>
          
          <div className="postTextContainer text-center">  </div>
  
          <div className="postTextContainer "> Data </div>
     
          
          
          
          
        </div>
        <div className="post">
          <div className="postHeader">
            
            Decryption
          </div>
          
          <div className="postTextContainer text-center">  </div>
  
          <div className="postTextContainer "> Data </div>
     
          
          
          
          
        </div>
      </div>
    </div>
  </div>
  );
};

export default Home;

