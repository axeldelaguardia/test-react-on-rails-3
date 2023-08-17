import React, { useEffect, useState } from 'react';
import style from './ProfileSettings.module.scss';
import axios from 'axios';
import ReactOnRails from 'react-on-rails';

const ProfileSettings = ({profile_pic_path}) => {
  const hiddenFileInput = React.useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

	const handleChange = async (event) => {
    const url = '/upload_image'
    const data = {'file': event.target.files[0]}
    const response = await axios.post(url, data, {
      headers: ReactOnRails.authenticityHeaders({'Content-Type': 'multipart/form-data'})
    });
    if(response.status === 200) {
      window.location.reload();
    }
	};

	const profilePic = profile_pic_path;

  return (
    <>
      <h3>Profile</h3>
      <div className={style.cards}>
        <div className={style.card}>
          <h3>Picture</h3>
          <div className={style.picture}>
            <div className={style.imageContainer}>
              <img src={profilePic} alt="user_image" />
            </div>
            <div className={style.buttonWrapper}>
              <button className={style.modalButton} onClick={handleClick}>
                Change
              </button>
              <input
                type="file"
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{ display: 'none' }}
              ></input>
            </div>
          </div>
        </div>
        <div className={style.card}>
          <h3>Display Name</h3>
          <div className={style.displayName}>
            <textarea className={style.displayNameBox} name="" cols="30" rows="5"></textarea>
          </div>
        </div>
        <div className={style.card}>
          <h3>About Me</h3>
          <div className={style.aboutMe}>
            <textarea className={style.aboutMeBox} name="" cols="30" rows="5"></textarea>
          </div>
        </div>
        <div className={style.card}>
          <h3>Social links</h3>
        </div>
      </div>
    </>
  );
};

export default ProfileSettings;
