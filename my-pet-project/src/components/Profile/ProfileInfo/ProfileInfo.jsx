import React, {useState} from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import usersPhoto from "../../../assets/images/usersPhoto.jpg";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    let [editMode, setEditMode] = useState(false);


    if (!profile) {
        return <Preloader/>
    }

    const profileUsersImgSelected = (e) => {
        if (e.target.files[0]) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false)
        })
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
                    <img src={profile.photos.large || usersPhoto} alt="profileUserPhoto"/>
                    {isOwner && <input type={"file"} onChange={profileUsersImgSelected}/>}

                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>
                <div className={s.userProfileDescription}>
                    {editMode
                        ? <ProfileDataForm profile={profile}
                                           onSubmit={onSubmit}
                                           initialValues={profile}
                        />
                        : <ProfileData goToEditMode={() => {
                            setEditMode(true)
                        }}
                                       profile={profile}
                                       isOwner={isOwner}/>
                    }
                </div>
            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner && <div>
                <button onClick={goToEditMode}>edit</button>
            </div>}
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>
                <b>My name</b>: {profile.fullName}
            </div>
            <div>
                <b>LookingForAJob</b>: {profile.lookingForAJob ? 'yes' : 'no'}
            </div>
            {profile.lookingForAJob &&
            <div>
                <b>Professional skills</b>: {profile.lookingForAJobDescription}
            </div>
            }
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
}


const Contact = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;