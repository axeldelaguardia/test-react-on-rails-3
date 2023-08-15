import React, { useState } from 'react';
import style from './ProfileSettings.module.scss';
import { handleFileUpload } from '../../utils/formUtils';

const ProfileSettings = ({profile_pic_path}) => {
  const [authenticity_token] = useState(
    document.querySelector('meta[name="csrf-token"]').content
  );
  const hiddenFileInput = React.useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

	const handleChange = (event) => {
		const fileInput = event.target;
		const file = fileInput.files[0];
		if (file) {
			handleFileUpload('/upload_image', authenticity_token, file);

			const newFileInput = document.createElement('input');
			newFileInput.type = 'file';
			newFileInput.style.display = 'none';
			newFileInput.addEventListener('change', handleChange);
			fileInput.parentNode.replaceChild(newFileInput, fileInput);
		}
	};
	
	const profilePic = profile_pic_path ? `data:image/jpeg;base64,${profile_pic_path}`: "/images/default_profile_pic.jpg";

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
