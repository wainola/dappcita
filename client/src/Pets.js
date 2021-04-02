import { useState, useEffect } from 'react';
import pets from './pets.json';

const Pets = ({ drizzle, drizzleState }) => {
  const [state, setState] = useState({
    stackId: null,
  });
  const handleClick = (petId) => (evt) => {
    console.log(evt.target);
    console.log('PET ID', petId);

    const {
      contracts: { Adoption },
    } = drizzle;

    const stackId = Adoption.methods['adopt'].cacheSend(petId, {
      from: drizzleState.accounts[1],
    });

    setState({ stackId });
  };

  const getTxStatus = () => {
    const { transactions, transactionStack } = drizzleState;

    const txHash = transactionStack[state.stackId];

    if (!txHash) return null;

    return `Transaction status for adoption: ${
      transactions[txHash] && transactions[txHash].status
    }`;
  };

  useEffect(() => {
    if (state.stackId !== null) {
      console.log(getTxStatus());
    }
  });

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3,  1fr)',
        gap: '10px',
        marginTop: '20px',
      }}
    >
      {pets.map((pet) => (
        <div
          key={pet.id}
          style={{
            border: '2px solid orange',
            borderRadius: '10px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: '30px',
          }}
        >
          <div
            style={{
              fontSize: '15px',
            }}
          >
            <h2>{pet.name}</h2>
            <h3>{pet.location}</h3>
            <button
              style={{
                border: 'none',
                backgroundColor: 'orange',
                color: 'white',
                fontWeight: '700',
                padding: '10px 7px 10px 7px',
                borderRadius: '5px',
              }}
              onClick={handleClick(pet.id)}
            >
              Adopte me!
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pets;
