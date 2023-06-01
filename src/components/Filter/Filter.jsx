import React, { useRef} from 'react';
// import React, { useState } from 'react';

import css from './Filter.module.css'
// import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';
import { filterChange } from 'features/contactSlice';

const Filter = () => {
    const dispatch = useDispatch()
    const filterRef = useRef('');
    // const [filter, setFilter] = useState('')

    const filterChangeHandler = () => {
    dispatch(filterChange(filterRef.current.value))
  }
    
    // const filterChangeHandler = (filter) => {
    //     const { value } = filter.currentTarget;
    //     setFilter(value);
    //     dispatch(filterChange(filter))
    //   }


    return (
        <input
            type='text'
            name='filter'
            ref={filterRef}
            // value={filter}
            onChange={() => filterChangeHandler()}
            placeholder='Enter name for search'
            className={css.Filter__input}
        />
        
    )
}

export default Filter;

// Filter.propTypes = {
//     filterRef: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
//   };