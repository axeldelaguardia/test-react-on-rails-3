import React, { useState, useEffect } from 'react'
import style from './Background.module.scss'
import { Radio } from 'antd';
import { handleFormSubmit } from '../../../utils/formUtils';

const Background = () => {
	const [selectedBackground, setSelectedBackground] = React.useState(null);
	const [authenticity_token] = useState(document.querySelector('meta[name="csrf-token"]').content);

  const onChange = (e) => {
    const newBackground = e.target.value;
		setSelectedBackground(newBackground);
		const url = "/users";
		const method = "patch";
		const data = {"user[background_path]": newBackground};
		handleFormSubmit(url, method, authenticity_token, data);
  };

	return (
		<>
		<h3>Backgrounds</h3>
		<div className={style.cards}>
			<div className={style.card}>
				<h3></h3>
				<div className={style.background}>
					<Radio.Group onChange={onChange} value={selectedBackground}>
						<Radio value={"/images/dark_milky_way.jpg"}>
						<div className={style.imageContainer}>
							<img src={"/images/dark_milky_way.jpg"} alt="user_image" />
						</div>
						</Radio>
						<Radio value={"/images/digital_galaxy.jpg"}>
						<div className={style.imageContainer}>
							<img src={"/images/digital_galaxy.jpg"} alt="user_image" />
						</div>
						</Radio>
						<Radio value={"/images/interstellar_black_hole.jpg"}>
						<div className={style.imageContainer}>
							<img src={"/images/interstellar_black_hole.jpg"} alt="user_image" />
						</div>
						</Radio>
						<Radio value={"/images/super_massive_black_hole.jpg"}>
						<div className={style.imageContainer}>
							<img src={"/images/super_massive_black_hole.jpg"} alt="user_image" />
						</div>
						</Radio>
					</Radio.Group>
				</div>
			</div>
		</div>
	</>
	)
}

export default Background;