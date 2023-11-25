import React, { createContext, useReducer, useContext } from "react";

const AppStateContext = createContext();

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error("useAppState must be used within an AppStateProvider");
  }
  return context;
};

const initialState = {
  // Define your initial state here
  data: [],
  startDate: null,
  endDate: null,
  usedDays: 0,
};

const appStateReducer = (state, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return { ...state, data: [...state.data, action.payload] };
    case "START_DATE":
      return { ...state, startDate: action.payload };
    case "END_DATE":
      return { ...state, endDate: action.payload };
    case "USED_DAYS":
      return { ...state, usedDays: action.payload };
    default:
      return state;
  }
};

export const AppStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appStateReducer, initialState);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};
