import React from "react";
import { useNavigate} from "react-router-dom";
import { firestore } from "../firebase.js";

import { UserAuth } from "../context/AuthContext";
import { collection } from "firebase/firestore";
const Home = () => {
  const { logout } = UserAuth();
  const navigate = useNavigate();
  const logOutHandler = () => {
    logout();
    navigate("/");
  };

const {
  collection,
  getDocs,
  query,
} = require('firebase/firestore');

var _networks;
var list = document.getElementById("networkList");
var data = collection(firestore, "devices");
const dataQuery = query(data);
getDocs(dataQuery).then((devices) => {
  devices.forEach((device) => {
    var networkData = collection(firestore, "devices", device.id, "networks");
    const networkQuery = query(networkData);
    getDocs(networkQuery).then((networks) => {
      _networks = networks;
      // networks.forEach((network) => {
      //   console.log(network.data());
      // });
    });
  });
});

return (
  <div name="Home"className="nav-link w-full h-screen bg-gradient-to-b from-sky-500 to-blue-900 text-black ">
  <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
    <div className="homePage">
      <div className="post">
        <div className="postHeader">
          
        Data Collection
        </div>
        
        <div className="postTextContainer text-center">  </div>

        <div className="postTextContainer ">
        <ul id="networkList"></ul>
        <script>
            {_networks.forEach((network) => {
              var li = document.createElement('li');
              li.innerText = network.data();
              list.appendChild(li);
            })}
        </script>
        </div>
    
        
        
        
        
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