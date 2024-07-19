import React from 'react';
import { useState, useEffect } from 'react';
import { getMotivationalQuote } from '../../api/apiCalls';
import './MotivationalQuote.css'

function MotivationalQuote() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    getMotivationalQuote()
      .then(quote => setQuote(quote));
  }, []);

  return (
    <div className='motivational-quote'>
      <p>{quote}</p>
    </div>
  )
}

export default MotivationalQuote;
