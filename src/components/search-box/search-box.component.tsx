import './search-box.styles.css'
import React, {ChangeEventHandler} from "react";

type Props = {
  placeholder: string
  handleChange: ChangeEventHandler<HTMLInputElement>
}

export const SearchBox = ({placeholder, handleChange}: Props) => {
  return (
    <input className='search' placeholder={placeholder} type='search' onChange={handleChange}/>
  )
}
