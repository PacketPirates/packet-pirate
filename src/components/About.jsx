import React from 'react';

const About = () => {
  return (
    <div name="About" className="nav-link w-full h-screen bg-gradient-to-b from-sky-500 to-blue-900 text-black ">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="homePage">
          <div className="post">
            <div className="postHeader">
              About Packet Pirate
            </div>

            <div className="postTextContainer text-center"> </div>

            <div className="postTextContainer">
              <p>What is the Packet Pirate?</p>
              <br></br>
              <p>
                The Packet Pirate is a tool designed to simplify the understanding and measurement of wireless security.
              </p>
              <p>
                With the provided device and through our Feed™, you can gain insights into the real-world attacks that criminals use to compromise wireless networks.
              </p>
            </div>
          </div>

          <div className="post">
            <div className="postHeader">
              How Does It Work?
            </div>

            <div className="postTextContainer">
              <p>
                The Packet Pirate operates through a three-step process:
              </p>
              <br></br>
              <ol>
                <li>
                  <strong>Network Scanning:</strong> The tool scans the wireless network environment using your Packet Pirate, identifying available networks and their characteristics. This includes their SSID (Name), BSSID (Mac Address), wireless security protocol, and channel. From here, you can select "Capture Handshake" on any network that you own in order to continue with the simulated attack. 
                </li>
                <br></br>
                <li>
                  <strong>Handshake Capture:</strong> This step allows you to do capture a wireless handshake, which is the process that wireless networks go through in order to authenticate your device to the access point. By default, this will passively capture all traffic. However, if own the network and want to try a more aggresive approach, you can select "Deauthenticate" to attempt to forcefully deauthenticate a device from the network, which will make them reconnect and cause another wireless handshake. Please note that while capturing wireless handshakes is fully legal in the US, it is not if you are doing so with malicious intentions. This includes doing a deauthentication attack on any networks that you do not own. 
                </li>
                <br></br>
                <li>
                  <strong>Hash Cracking:</strong> This is the last step of the process. Once a handshake has been captured, you can select "Crack Hash" to attempt to crack the password of the network. Note that this attack is done fully offline, which means an attacker can do it without alerting the network. Once the password has been cracked, it will be displayed on the screen. 
                </li>
                <br></br>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
