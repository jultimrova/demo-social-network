import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={s.descriptionContainer}>
            <div className={s.profileImg}>
                <img
                    src="https://in2english.net/wp-content/uploads/2018/06/paints.jpg"
                    alt=""/>
            </div>
            <div className={s.descriptionContainer}>
                avatar + description
            </div>
        </div>
    )
}

export default ProfileInfo;