import React from 'react';
import links from '../../links/links'
import getImageName from '../../helpers/getImageName'
import Card from '../Card'
import './Explore.css'

function Explore() {
  const listItems = links.map((link) =>
    <li class="explore-links" key={link.name}><a href={link.url}>{link.name}</a>  {link.description}</li> 
);
  return (
    <>
      <h1>Explore</h1>
      <div class="explore-container">
        <h4>Links to Help You Choose a Destination</h4>
        <div>
          {listItems}
        </div>
      </div>
    </>
  )
}

export default Explore
