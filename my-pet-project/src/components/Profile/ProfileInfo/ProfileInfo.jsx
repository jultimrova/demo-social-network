import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.profileInfoContainer}>
            <div className={s.profileImg}>
                {/*<img
                    src="https://in2english.net/wp-content/uploads/2018/06/paints.jpg"
                    alt=""/>*/}
            </div>
            <div className={s.descriptionContainer}>
                <div className={s.profileUsersImg}>
                    <img src={props.profile.photos.large} alt=""/>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                </div>
                <div className={s.userProfileDescription}>
                    <div>About me: {props.profile.aboutMe}</div>
                    <div>My name: {props.profile.fullName}</div>
                    <div>LookingForAJob: {props.profile.lookingForAJob ? 'yes' : 'no'}</div>
                    <div>Job Description: {props.profile.lookingForAJobDescription}</div>
                    <div className={s.userContacts}>Contacts:
                        <div>facebook: {props.profile.contacts.facebook}</div>
                        <div>vk: {props.profile.contacts.vk}</div>
                        <div>twitter: {props.profile.contacts.twitter}</div>
                        <div>instagram: {props.profile.contacts.instagram}</div>
                        <div>github: {props.profile.contacts.github}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;