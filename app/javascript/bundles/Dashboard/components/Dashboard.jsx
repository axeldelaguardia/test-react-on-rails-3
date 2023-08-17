import React, { useEffect, useState } from 'react'
import PageLayout from './PageLayout'
import style from './Dashboard.module.scss'
import axios from 'axios';

const Dashboard = ({ user, image_name, background_path, name, wleds }) => {
	const [deviceInfoList, setDeviceInfoList] = useState([]);

	const fetchDeviceInfo = async (wled) => {
		const url = `http://${wled}/json`;
		try {
			const response = await axios.get(url);
			const deviceInfo = response.data;
			console.log(deviceInfo);
			return deviceInfo;
		} catch (error) {
			console.log(error);
			return null;
		}
	};

	useEffect(() => {
		const fetchDeviceInformation = async () => {
			const updateDeviceInfoList = await Promise.all(wleds.map(async (wled) => {
				const deviceInfo = await fetchDeviceInfo(wled);
				return { state: deviceInfo.state, info: deviceInfo.info }
			}));
			setDeviceInfoList(updateDeviceInfoList);
		};
		fetchDeviceInformation();
	}, []);

	const handleCardClick = async (wled) => {
		console.log('card clicked for ' + wled);
		const url = `http://${wled}/json/state`;
		console.log(url);
		const data = { on: 't', v: true };
		try {
			const state = await axios.post(url, data);
			console.log(state);
		} catch (error) {
			console.log(error);
		}
	}

	const handleButtonClick = (e) => {
		e.stopPropagation();
		console.log(deviceInfoList);
	};

	return (
		<PageLayout user={user} userImage={image_name} background={background_path} className={style.mainLayout}>
			<div className={style.cardBody}>
				<div className={style.cards}>
					{deviceInfoList.map((wled, index) => (
						<div 
							className={style.card} 
							onClick={() => handleCardClick(wled.info.ip)}
							key={index}
						>
							<div className={style.cardContent}>
								<img className={style.cardImage} src={'images/001_cheerful.png'} />
								<h3>{wled.info.name}</h3>
								<button className={style.cardMenu} onClick={handleButtonClick}>settings</button>
							</div>
						</div>
					))};
				</div>
			</div>
		</PageLayout>
	);
};

export default Dashboard;