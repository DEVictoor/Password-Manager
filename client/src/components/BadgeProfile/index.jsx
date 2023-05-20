import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './BadgeProfile.css';

const BadgeProfile = ({ profile, deleteProfile }) => {
  const handleSelect = () => {
    console.log('Select profile: ', profile.name);
  };

  return (
    <div className="BadgeProfile">
      <span onClick={() => handleSelect()} className="BadgeProfile__name">
        {profile.name}
      </span>
      <button
        onClick={() => deleteProfile(profile.id)}
        className="BadgeProfile__button"
      >
        <FontAwesomeIcon icon={faCircleXmark} />
      </button>
    </div>
  );
};
export { BadgeProfile };
