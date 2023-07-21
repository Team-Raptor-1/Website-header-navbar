import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
export default function Footer(props) {
  const {DevName} = props;
  return (
    <div>
    <footer-ul>
    <div className="social-icons">
       <a href="https://www.youtube.com">
       <FontAwesomeIcon icon={faYoutube} className="youtube" />
        </a>
        <a href="https://www.gmail.com">
        <i class="fab fa-google fa-3x"></i>
        </a>
        <a href="https://www.instagram.com">
        <FontAwesomeIcon icon={faInstagram} className="instagram" />
        </a>
        <a href="https://www.linkedin.com">
        <FontAwesomeIcon icon={faLinkedin} className="linkedin" />
        </a>
      </div>
        <p className="copyright">
     
      </p>
      </footer-ul>
</div>
  );
}