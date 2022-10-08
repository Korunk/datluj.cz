import React, { useEffect, useState } from 'react';
import './style.css';

const Wordbox = ({ word, onFinish }) => {
  const [lettersLeft, setLettersLeft] = useState(word);  
  

  const handleKeyUp = (e) => {
   if (e.key.toLowerCase() === lettersLeft.toLowerCase().slice(e, 1)) {
   setLettersLeft(lettersLeft.slice(1));
  console.log(lettersLeft) }
  
  else if(lettersLeft.toLowerCase() === " " && e.key.toLowerCase() === lettersLeft.toLowerCase() ){
    console.log("další slovo")
   onFinish()}

  else {
  console.log("Písmenko není stejné!")
}

  }

  useEffect(()=> {
    document.addEventListener('keyup', handleKeyUp);
    return () => document.removeEventListener('keyup',handleKeyUp);
  }, [lettersLeft]);
  
  
  return (
    <div className="wordbox">{lettersLeft}</div>
  );
};

export default Wordbox;
