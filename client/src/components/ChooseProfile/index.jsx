import { useState } from 'react';
import './ChooseProfile.css';
import { NewProfile } from '../NewProfile';
import { BadgeProfile } from '../BadgeProfile';

const ChooseProfile = () => {
  const [profiles, setProfiles] = useState([
    {
      id: Math.random() * 1000,
      name: 'Main'
    }
  ]);
  const [isNew, setIsNew] = useState(false);

  const handleSwitch = () => {
    setIsNew(true);
  };

  const handleNewProfile = name => {
    if (profiles.find(profile => profile.name === name)) return;

    const newProfile = {
      id: Math.random() * 1000,
      name: name
    };
    setProfiles([...profiles, newProfile]);
    setIsNew(false);
  };

  const deleteProfile = index => {
    const removeArray = [...profiles].filter(profile => profile.id !== index);
    setProfiles(removeArray);
  };
  return (
    <div className="ChooseProfile">
      <h1 className="ChooseProfile__title">Password Manager</h1>
      <div className="ChooseProfile__input">
        <label htmlFor="ChooseProfile">Select your profile</label>
      </div>
      <div>
        {profiles.map(profile => (
          <BadgeProfile
            deleteProfile={deleteProfile}
            key={profile.id}
            profile={profile}
          />
        ))}

        {!isNew && (
          <button
            onClick={handleSwitch}
            className="ChooseProfile__button ChooseProfile__button--createprofile"
          >
            New profile
          </button>
        )}
        {isNew && <NewProfile onSubmit={handleNewProfile} />}
      </div>
    </div>
  );
};

export { ChooseProfile };
