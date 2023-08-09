import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import PageLayout from './PageLayout'
import style from './Dashboard.module.scss'
import axios from 'axios';

const Dashboard = ({ user, background_path, name, wleds }) => {
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
		<PageLayout user={user} background={background_path} className={style.mainLayout}>
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
					{/* <div className={style.card}>
						<div class="card-content">
							<div class="card-image">
								<i class="fa-duotone fa-unicorn"></i>
							</div>
							<div class="card-info-wrapper">
								<div class="card-info">
									<i class="fa-duotone fa-unicorn"></i>
									<div class="card-info-title">
										<h3>Unicorns</h3>  
										<h4>A single corn. Er, I mean horn.</h4>
									</div>    
								</div>  
							</div>
						</div>
					</div>
					<div className={style.card}>
						<div class="card-content">
							<div class="card-image">
								<i class="fa-duotone fa-blender-phone"></i>
							</div>
							<div class="card-info-wrapper">
								<div class="card-info">
									<i class="fa-duotone fa-blender-phone"></i>
									<div class="card-info-title">
										<h3>Blender Phones</h3>  
										<h4>These absolutely deserve to exist.</h4>
									</div>    
								</div>
							</div>
						</div>
					</div>
					<div className={style.card}>
						<div class="card-content">
							<div class="card-image">
								<i class="fa-duotone fa-person-to-portal"></i>
							</div>
							<div class="card-info-wrapper">
								<div class="card-info">
									<i class="fa-duotone fa-person-to-portal"></i>
									<div class="card-info-title">
										<h3>Adios</h3>  
										<h4>See you...</h4>
									</div>    
								</div>
							</div>
						</div>
					</div>
					<div className={style.card}>
						<div class="card-content">
							<div class="card-image">
								<i class="fa-duotone fa-person-from-portal"></i>
							</div>
							<div class="card-info-wrapper">
								<div class="card-info">
									<i class="fa-duotone fa-person-from-portal"></i>
									<div class="card-info-title">
										<h3>I mean hello</h3>  
										<h4>...over here.</h4>
									</div>    
								</div>
							</div>
						</div>
					</div>
					<div className={style.card}>
						<div class="card-content">
							<div class="card-image">
								<i class="fa-duotone fa-otter"></i>
							</div>
							<div class="card-info-wrapper">
								<div class="card-info">
									<i class="fa-duotone fa-otter"></i>
									<div class="card-info-title">
										<h3>Otters</h3>  
										<h4>Look at me, imma cute lil fella.</h4>
									</div>    
								</div>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</PageLayout>
	);
};

Dashboard.propTypes = {
	user: PropTypes.object,
	name: PropTypes.string,
	background_path: PropTypes.string,
	wleds: PropTypes.array,
};

export default Dashboard;