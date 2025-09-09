import React, { useState, useEffect } from 'react';
import { Text, View, FlatList } from 'react-native';
import estilo from './components/estiloApp';

const request = async (callback) => {
  const response = await fetch('https://emojihub.yurace.pro/api/all');
  const parsed = await response.json();
  callback(parsed);
};

export default function App() {
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    request(setRegistros);
  }, []);

  return (
    <View style={estilo.container}>
      <Text style={estilo.superior}>
        emojihub
      </Text>

      <FlatList
        data={registros}
        keyExtractor={(item) => item.name.toString()}
        renderItem={({ item }) => (
          <Text style={estilo.item}>
            <Text>Name: {item.name}{'\n'}</Text>
            <Text>Category: {item.category}{'\n'}</Text> 
            <Text>Group: {item.group}{'\n'}</Text>
          </Text>
        )}
      />
    </View>
  );
}
