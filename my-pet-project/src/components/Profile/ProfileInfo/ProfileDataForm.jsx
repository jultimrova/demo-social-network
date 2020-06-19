import React from "react";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import s from './../../common/FormsControls/FormsControls.module.css'

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div><button>save</button></div>
            {error && <div className={s.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <b>Full name</b>:
                {createField('Full name', 'fullName', Input, [])}
            </div>
            <div>
                <b>About me</b>:
                {createField('About me', 'aboutMe', Input, [])}
            </div>
            <div>
                <b>LookingForAJob</b>:
                {createField('', 'lookingForAJob', Input,[], {type: 'checkbox'})}
            </div>
            <div>
                <b>Professional skills</b>:
                {createField('Professional skills', 'lookingForAJobDescription', Textarea,[])}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <div key={key}>
                    <b>{key}: {createField(key, 'contacts.' + key, Input, [])}</b>
                </div>
            })}
            </div>
        </form>
    )
}

const ProfileDataReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm)

export default ProfileDataReduxForm;