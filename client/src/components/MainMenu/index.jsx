import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import './MainMenu.css';

const MainMenu = () => {
  return (
    <div className="MainMenu">
      <header className="MainMenu__header">
        <div className="MainMenu__header--top">
          <button className="icon">
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <div className="name">
            <h3>Main</h3>
          </div>
          <button className="icon">
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        </div>

        <div className="MainMenu__header--bottom">
          <button className="icon">
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <button className="icon">
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <button className="icon">
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <button className="icon">
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        </div>
      </header>
      <div>casa</div>
    </div>
  );
};
export { MainMenu };
