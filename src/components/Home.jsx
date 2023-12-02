import React from "react";
import { useNavigate} from "react-router-dom";
import { firestore } from "../firebase.js";

import { UserAuth } from "../context/AuthContext";
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

var securityProtocols = ["open", "WEP", "WPA_PSK", "WPA2_PSK", "WPA_WPA2_PSK", "WPA2_ENTERPRISE", "Unknown"];

var list = document.getElementById("networkList");
var data = collection(firestore, "devices");
const dataQuery = query(data);
getDocs(dataQuery).then((devices) => {
  devices.forEach((device) => {
    var networkData = collection(firestore, "devices", device.id, "networks");
    const networkQuery = query(networkData);
    getDocs(networkQuery).then((networks) => {
      networks.forEach((network) => {
        console.log(network.data());
        var li = document.createElement('li');
        li.innerText = "SSID: " + network.data().ssid + ", ID: " + network.data().id + ", Auth Mode: " + securityProtocols.at(network.data().authmode);
        list.appendChild(li);
      });
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