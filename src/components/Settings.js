import React, { useState } from 'react';
import '../styles/Settings.scss';

const Settings = () => {
    const [selectedSettings, setSelectedSettings] = useState('Profile Settings');

    const selectSettings = e => {
        setSelectedSettings(e.target.innerText);
    }
    
    return (
        <div className="settings">
            <div className="settings__settingsList">
                <ul onClick={selectSettings}>
                    <li>Profile Settings</li>
                    <li>Account Settings</li>
                </ul>
            </div>

            <div className="settings__settingsDetails">
                <form className={`settings__profileForm ${selectedSettings === 'Profile Settings' ? 'show' : 'hide'}`}>
                    <input type="text" name="displayNameInput" placeholder="Display Name" />
                    <input type="text" name="profilePhotoInput" placeholder="Profile Photo URL" />
                    <input type="text" name="coverPhotoInput" placeholder="Cover Photo URL" />
                    <button type="submit">Save</button>
                </form>

                <form className={`settings__accountForm ${selectedSettings === 'Account Settings' ? 'show' : 'hide'}`}>
                    <input type="email" name="emailInput" placeholder="Email" />
                    <input type="password" name="passwordInput" placeholder="Password" />
                    <input type="text" name="numberInput" placeholder="Mobile Number" />
                    <button type="submit">Save</button>
                </form>
            </div>
        </div>
    )
}

export default Settings
