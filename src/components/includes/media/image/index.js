import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Logo } from '../../../icons';

const Img = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;

class Image extends React.Component {

  /*
  ** @Event
  ** @Description: Set source on load image
  */

  handleImageLoader(image, source) {
    source.target.src = image;
  }

  render() {

    const { source, alt } = this.props;

    return (
      <Img src={ Logo } alt={ alt } onLoad={this.handleImageLoader.bind(this,source)}/>
    )

  }
}

Image.propTypes = {
  source: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};


export default Image;
