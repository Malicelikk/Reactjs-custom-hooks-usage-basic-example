import { useState , useEffect } from 'react';

const useCounter = (forwards = true) => {

  const [counter, setCounter] = useState(0);  // initial value of counter 0

  useEffect(() => {                       // function and array
    const interval = setInterval(() => {  //  aralık tanımla
        if (forwards) {
            setCounter((prevCounter) => prevCounter + 1);
        } else {
            setCounter((prevCounter) => prevCounter - 1);
        }
    }, 1000);  // sets a new counter state in every second

    return () => clearInterval(interval);
  }, []);      // run at first render

  return counter;
  
};

export default useCounter;