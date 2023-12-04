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
  doc,
  updateDoc,
  onSnapshot
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

var capturedNetworkList = document.getElementById("capturedNetworkList");
var capturedNetworkEntry = document.createElement('div');
capturedNetworkEntry.classList.add('network-entry');
var capturedNetwork = document.createElement('li');
const captureHandshake = async (networkData) => {
  //  capture handshake logic here
  console.log(networkData);
  console.log(networkData.id);

  const devicesQuery = query(collection(firestore, 'devices'));
  const devicesSnapshot = await getDocs(devicesQuery);
  const deviceDoc = devicesSnapshot.docs[0]; // Assuming there's only one document
  console.log(networkData);
  console.log(networkData.id);
  console.log(deviceDoc);
  if (deviceDoc) {
    const deviceRef = doc(firestore, 'devices', deviceDoc.id);

    // The rest of your updateDoc logic remains the same
    await updateDoc(deviceRef, {
      'test-params.network_id': networkData.id,
      'test-params.test_type': 'capture',
      'test': true
    });

    console.log('Document successfully updated!');
  } else {
    console.error('No documents found in the "devices" collection.');
  }

  capturedNetwork.innerText = "SSID: " + networkData.ssid + ", ID: " + networkData.id + ", Auth Mode: " + securityProtocols.at(networkData.authmode);
  if (!capturedNetworkEntry.contains(capturedNetwork)) {
    capturedNetworkEntry.appendChild(capturedNetwork);
    
    var crackButton = document.createElement('button');
    crackButton.innerText = 'Crack Hash';
    crackButton.addEventListener("click", () => {
      // Change button text to "Cracking..." when clicked
      crackButton.innerText = 'Cracking...';
      
      const crackListener = onSnapshot(doc(firestore, 'devices', deviceDoc.id, 'networks' , String(networkData.id)), (snapshot) => {
        crackHash(snapshot.data(), crackButton);
      });
    });
    
    capturedNetworkEntry.appendChild(crackButton);
    capturedNetworkList.appendChild(capturedNetworkEntry);
  }
};

var crackedHashList = document.getElementById("crackedHashList");
var crackedHashEntry = document.createElement('div');
crackedHashEntry.classList.add('cracked-hash-entry');
var crackedHash = document.createElement('li');
const crackHash = (networkData,crackButton) => {
  if (networkData.tests_passed && networkData.tests_passed.capture && networkData.tests_passed.hash) {
    crackButton.innerText = 'Cracked';
    crackedHash.innerText = "SSID: " + networkData.ssid  + ", Cracked Hash: " + networkData.tests_passed.hash;
    crackedHashEntry.appendChild(crackedHash);
    crackedHashList.appendChild(crackedHashEntry);
  }
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
        Captured Handshake
          
        </div>
        
        <div className="postTextContainer text-center">
          <ul id="capturedNetworkList"></ul>
        </div>

        <div className="postTextContainer "> 
          
        </div> 
        
      </div>
      <div className="post">
        <div className="postHeader">
          
          Cracked Hash
        </div>
        
        <div className="postTextContainer text-center">  </div>

        <div className="postTextContainer ">
          <ul id="crackedHashList"></ul>
        </div>
        
      </div>
    </div>
  </div>
</div>
);
};

export default Home;