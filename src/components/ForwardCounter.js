import Card from './Card';
import useCounter from '../hooks/use-counter';

const ForwardCounter = () => {  // forwardCounter component

  const counter = useCounter();

  return <Card>{counter}</Card>;

};

export default ForwardCounter;
