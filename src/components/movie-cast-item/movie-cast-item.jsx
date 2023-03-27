import './movie-cast-item.css';
const noImg = require('../../img/png-transparent-black-and-white-no-to-camera-logo-video-on-demand-retail-website-simple-no-miscellaneous-television-text.png');

export const MovieCastItem = ({ ...props }) => {
  const { actorName, actorRole, actorPhoto } = props;
  const profilePhoto = `https://image.tmdb.org/t/p/w500${actorPhoto}`;
  return (
    <li className="cast-list--item">
      <p className="actor-name">{actorName}</p>
      <p className="role">Character: {actorRole}</p>
      <img
        className="actor-photo"
        src={actorPhoto === null ? noImg : profilePhoto}
        alt=""
      />
    </li>
  );
};
