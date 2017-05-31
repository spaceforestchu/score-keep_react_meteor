import React, {Component } from 'react';
import PropTypes from 'prop-types';

class TitleBar extends Component{

  renderSubtitle(){
    if(this.props.subtitle) {
      return <h2 className='title-bar__subtitle'>{subtitle}</h2>
    }
  }

  render(){

     title  = this.props.title;
     subtitle = this.props.subtitle;

    return (
      <div className='title-bar '>
        <div className='wrapper'>
          <h1>{title}</h1>
          {this.renderSubtitle()}
        </div>
      </div>
    )
  }
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

TitleBar.defaultProps = {
  title: 'Default title'
};

export default TitleBar;
