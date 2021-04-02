import { useState } from 'react';

const SetString = ({ drizzle, drizzleState }) => {
  const [state, setState] = useState({
    stackId: null,
    stackId2: null,
  });

  const handleChange = async (evt) => {
    const {
      target: { value },
    } = evt;

    const {
      contracts: { MyStringStore: contract, Adoption: contractAdoption },
    } = drizzle;

    const stackId = contract.methods['set'].cacheSend(value, {
      from: drizzleState.accounts[0],
    });

    setState({ stackId });
  };

  const getTxStatus = () => {
    const { transactions, transactionStack } = drizzleState;

    const txHash = transactionStack[state.stackId];

    if (!txHash) return null;

    return `Transaction status: ${
      transactions[txHash] && transactions[txHash].status
    }`;
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    console.log(getTxStatus());
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SetString;
