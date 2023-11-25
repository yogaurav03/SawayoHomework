import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { useAppState } from "src/context/AppStateContext";

export default function Example() {
  const { state, dispatch } = useAppState();

  const fetchData = async () => {
    // Fetch data from the API
    // For example:
    const result = await fetch(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );
    const data = await result.json();

    // Dispatch an action to update the global state
    dispatch({ type: "ADD_DATA", payload: data });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <Text>Data:</Text>
      {state.data.map((item: any, index: number) => (
        <View key={index}>
          <Text>{JSON.stringify(item)}</Text>
        </View>
      ))}
    </View>
  );
}
