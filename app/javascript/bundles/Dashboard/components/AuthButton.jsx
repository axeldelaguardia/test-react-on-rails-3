import React, { useState } from "react";
import { Button } from 'antd';
import axios from "axios";
import ReactOnRails from "react-on-rails";

const AuthButton = ({ type }) => {

  const handleClick = async () => {
    if (type === 'logout') {
      const url = '/logout';
      const response = await axios.delete(url, {
        headers: ReactOnRails.authenticityHeaders()
      })
      if (response.status === 200) {
        window.location.href = '/';
      }
    } else if (type === 'login') {
      const url = '/login';
      const response = await axios.post(url, {
        headers: ReactOnRails.authenticityHeaders()
      })
      const data = await response.json();
      console.log(data);
    }
  };

  if (type === 'hidden') {
    return null;
  }

  return (
    <Button 
      type='link' 
      size={'middle'} 
      onClick={handleClick}
      >
        {type === 'logout' ? 'Logout' : 'Login'}
    </Button>
  );
}

export default AuthButton;