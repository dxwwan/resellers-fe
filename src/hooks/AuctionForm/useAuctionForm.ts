import { ChangeEvent, useReducer } from 'react';

interface AuctionFormState {
  priceUnit: string;
  period: string;
}

interface AuctionFormAction {
  type: keyof AuctionFormState;
  payload: string;
}

const auctionFormReducer = (
  state: AuctionFormState,
  action: AuctionFormAction
) => {
  switch (action.type) {
    case 'priceUnit':
      return { ...state, priceUnit: action.payload };
    case 'period':
      return { ...state, period: action.payload };
    default:
      throw new Error(`not valid action type: ${action.type}`);
  }
};

const useAuctionForm = () => {
  const [state, dispatch] = useReducer(auctionFormReducer, {
    priceUnit: '',
    period: '',
  });

  const onChange = (type: keyof AuctionFormState) => {
    return (
      e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>
    ) => {
      dispatch({ type, payload: e.target.value });
    };
  };

  return { state, onChange };
};

export default useAuctionForm;