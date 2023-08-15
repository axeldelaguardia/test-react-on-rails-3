import React from 'react'
import PageLayout from './PageLayout'
import style from './Home.module.scss'

const Home = ({ user, background_path, image_name}) => {
  return (
    <>
      <PageLayout user={user} background={background_path} userImage={image_name} className={style.mainLayout}>
        <div className={style.imgDiv}><img src={image_name} alt="profile_image" /></div>
        
      </PageLayout>
    </>
  )
}

export default Home;