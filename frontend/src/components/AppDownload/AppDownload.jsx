import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better experience Download</p>
        <div className="app-download-platforms">
    <a href="https://play.google.com/store/apps" target="_blank" rel="">
        <img src={assets.play_store} alt="" />
    </a>
    <a href="https://apps.apple.com/us/app/your-app-name/idYOUR_APP_ID" target="_blank" rel="">
        <img src={assets.app_store} alt="" />
    </a>
</div>
    </div>
  )
}

export default AppDownload

