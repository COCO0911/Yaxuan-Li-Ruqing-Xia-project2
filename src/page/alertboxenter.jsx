
import React, { useEffect } from 'react';

export default function Ruletext (props) {
  const { setenterState } = props;
  const changeState = (event) => {
    setenterState(false)
  };

  return (
    <div className='alertBox'>
      <div className='content'>
        <p className='tit'>Tips</p>
        <p className='desc'>{props.msg}</p>
        <p className='footer'>
          <button className='defaultbtn' onClick={changeState}>close</button>
        </p>
      </div>
    </div>
  );
}