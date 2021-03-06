import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { postFavorite, dropFavorite } from '../actions';
import '../assets/styles/components/CarouselItem.scss';
import plus from '../assets/static/icons/plus-icon.png';
import removeIcon from '../assets/static/icons/remove-icon.png';
import seeIcon from '../assets/static/icons/see.png';

const CarouselItem = (props) => {
  const { id, marca, modelo, year, isList, cover, user, myList, _id } = props;
  const handleSetFavorite = () => {
    const exist = myList.find((item) => item.id === id);
    if (!exist) {
      const vehiculo = {
        id,
        marca,
        modelo,
        year,
        _id,
      };
      const userId = user.id;

      props.postFavorite(userId, _id, vehiculo);
    }
  };
  const handleDeleteFavorite = (itemId) => {
    props.dropFavorite(_id, itemId);
  };
  return (
    <>
      <div className='carousel-item_1'>

        <img
          className='carousel-item__img'
          src={cover}
          alt={modelo}
        />

        <div className='carousel-item__details'>
          <div>
            <Link to={`/details/?userId=${id}`}>
              <img
                src={seeIcon}
                alt='see icon'
              />
            </Link>
            {isList ? (
              <img
                src={removeIcon}
                alt='remove icon'
                onClick={() => handleDeleteFavorite(id)}
              />
            ) : (
                <img
                  src={plus}
                  alt='plus icon'
                  onClick={handleSetFavorite}
                />
              )}
          </div>
          <p className='carousel-item__details--title'>{marca}</p>
          <p className='carousel-item__details--subtitle'>{modelo}</p>
          <p className='carousel-item__details--subtitle'>{year}</p>
        </div>
      </div>
    </>
  );
};
CarouselItem.propTypes = {
  marca: PropTypes.string,
  modelo: PropTypes.string,
  cover: PropTypes.string,
  year: PropTypes.number,
};
const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    user: state.user,
  };
};

const mapDispatchToProps = {
  postFavorite,
  dropFavorite,
};

export default connect(mapStateToProps, mapDispatchToProps)(CarouselItem);