import React from 'react';

import {container} from './address.module.css'
import { IoLocationOutline } from 'react-icons/io5';
import { Clear } from '../../../interfaces/nav';

export const Address = ({clear}:Clear) => {
  return (
    <div className={container}  onMouseEnter={clear}>
      <div>
        <IoLocationOutline size={"1.7rem"} />
      </div>
      <div>
        <small>Enviar a Goku</small>
        <p>Kame House</p>
      </div>
    </div>
  )
}
