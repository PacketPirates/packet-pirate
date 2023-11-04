import React from 'react';
import { UserAuth } from '../context/AuthContext';

const Account = () => {
  const { user } = UserAuth();

  return (
<div name="Stats"className="nav-link w-full h-screen bg-gradient-to-b from-sky-500 to-blue-900 text-black ">
  <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
    <div className="homePage">
      <div className="post">
        <div className="postHeader">
          
          
        </div>
        
        <div className="postTextContainer text-center">  </div>

        <div className="postTextContainer "> Profile Information </div>
        <br />
        <div className="postTextContainer "> <p>User Email: {user && user.email}</p> </div>
        
        
        
        
      </div>
    </div>
  </div>
</div>
  );
};

export default Account;