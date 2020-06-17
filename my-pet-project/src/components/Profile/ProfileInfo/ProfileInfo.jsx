import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import usersPhoto from "../../../assets/images/usersPhoto.jpg";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
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
                    <img src={profile.photos.large != null ? profile.photos.large : usersPhoto} alt=""/>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>
                <div className={s.userProfileDescription}>
                    <div>About me: {profile.aboutMe}</div>
                    <div>My name: {profile.fullName}</div>
                    <div>LookingForAJob: {profile.lookingForAJob ? 'yes' : 'no'}</div>
                    <div>Job Description: {profile.lookingForAJobDescription}</div>
                    <div className={s.userContacts}>Contacts:
                        <div>facebook: {profile.contacts.facebook}</div>
                        <div>vk: {profile.contacts.vk}</div>
                        <div>twitter: {profile.contacts.twitter}</div>
                        <div>instagram: {profile.contacts.instagram}</div>
                        <div>github: {profile.contacts.github}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;