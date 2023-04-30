import React from 'react';
import "./GenresStyle.scss";
import { useSelector } from 'react-redux';

const Genres = ({data}) => {
    const {genres} = useSelector((state) => state.home);
  return (
    <div className='genres'>
      {data?.map((mygenres)=>{
        if(!genres[mygenres]?.name) return;
        return (<div key={mygenres} className='genre'>{genres[mygenres]?.name}</div>)
    })}</div>
  )
}

export default Genres 