import { useEffect, useState } from 'react';

const ReadString = ({ drizzle, drizzleState }) => {
  const [state, setState] = useState({});
  const [myString, setMyString] = useState('');
  useEffect(() => {
    const contract = drizzle.contracts.MyStringStore;

    const dataKey = contract.methods['myString'].cacheCall();

    setState({
      dataKey,
    });
  }, []);

  useEffect(() => {
    if (Object.keys(state).length) {
      const {
        contracts: { MyStringStore },
      } = drizzleState;

      const myString = MyStringStore.myString[state.dataKey];
      setMyString(myString);
    }
  }, [state]);

  return (
    <div>
      <p>My stored string : {myString && myString.value}</p>
    </div>
  );
};

export default ReadString;
