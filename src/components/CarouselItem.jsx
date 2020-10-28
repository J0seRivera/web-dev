import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFavorite, deleteFavorite } from '../actions';
import '../assets/styles/components/CarouselItem.scss';
import plus from '../assets/static/icons/plus-icon.png';
import removeIcon from '../assets/static/icons/remove-icon.png';
const CarouselItem = (props) => {
  const { id, cover, title, year, isList } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      id, cover, title, year, isList
    });
  }
  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  }
  return (
    <>
      <div className="carousel-item_1">
        <img className="carousel-item__img"
          src={cover}
          alt={title} />
        <div className="carousel-item__details">
          <div>
            {isList ?
              <img
                src={removeIcon}
                alt="remove icon"
                onClick={() => handleDeleteFavorite(id)}
              /> :
              <img
                src={plus}
                alt="plus icon"
                onClick={handleSetFavorite}
              />
            }
          </div>
          <p className="carousel-item__details--title">{title}</p>
          <p className="carousel-item__details--subtitle">{title}</p>
          <p className="carousel-item__details--subtitle">{year}</p>
        </div>
      </div>
    </>
  )
};
CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
}
const mapDispatchToProps = {
  setFavorite,
  deleteFavorite
}


export default connect(null, mapDispatchToProps)(CarouselItem);
