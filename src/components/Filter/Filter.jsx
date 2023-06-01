import React, { useRef, useState } from 'react';
import css from './Filter.module.css'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';
import { filterChange } from 'features/contactSlice';

const Filter = () => {
    const dispatch = useDispatch()
    const filterRef = useRef('');

    const filterChangeHandler = () => {
    dispatch(filterChange(filterRef.current.value))
  }


    return (
        <input
            type='text'
            name='filter'
            ref={filterRef}
            onChange={() => filterChangeHandler()}
            placeholder='Enter name for search'
            className={css.Filter__input}
        />
        
    )
}

export default Filter;

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };