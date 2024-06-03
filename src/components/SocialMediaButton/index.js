import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const SocialMediaButton = ({ alt, img, to }) => (
  <a href={to} className={styles.socialMediaButton} target="_blank" rel="noopener noreferrer">
    <img src={img} alt={alt} />
  </a>
);

SocialMediaButton.propTypes = {
  alt: PropTypes.string,
  img: PropTypes.string,
  to: PropTypes.string.isRequired,
};

export default SocialMediaButton;
