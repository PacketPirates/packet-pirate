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
    

    // had to combine text and button to form it in the list
    var networkEntry = document.createElement('div');
    networkEntry.classList.add('network-entry');

  
    var li = document.createElement('li');
    li.innerText = "SSID: " + network.data().ssid + ", ID: " + network.data().id + ", Auth Mode: " + securityProtocols.at(network.data().authmode);
    
    
    var captureButton = document.createElement('button');
    captureButton.innerText = 'Capture Handshake';
    captureButton.addEventListener("click", () => {
      captureHandshake(network.data()); 
    });
    
    networkEntry.appendChild(li);
    networkEntry.appendChild(captureButton);

    
    list.appendChild(networkEntry);
      });
    });
  });
});

const captureHandshake = (networkData) => {
  //  capture handshake logic here
  console.log("Capturing handshake for network:", networkData);
};

return (
  <div name="Home" className="nav-link w-full min-h-screen bg-gradient-to-b from-sky-500 to-blue-900 text-black">
  <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
    <div className="homePage">
      <div className="post">
        <div className="postHeader">
          
        Scanned Networks
        </div>
        
        <div className="postTextContainer text-center">  </div>

        <div className="postTextContainer ">
          <ul id="networkList"></ul>
        </div>
        
      </div>
      <div className="post">
        <div className="postHeader">
        Capture Handshake
          
        </div>
        
        <div className="postTextContainer text-center">  </div>

        <div className="postTextContainer "> Data </div>
    
        
        
        
        
      </div>
      <div className="post">
        <div className="postHeader">
          
          Crack Hash
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