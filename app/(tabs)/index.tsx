import {StyleSheet, View, Text, Button} from 'react-native';
import {useState} from 'react';

export default function HomeScreen() {
  const [num, setNum] = useState(0);
   const [text, setText] = useState("");
  return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Hello World!</Text>
        <Button title="+" onPress={() => setNum(num + 1)} />
        
        <Text>{num}</Text>

        <Button title="-" onPress={() => setNum(num - 1)} />

        <Button title="Reset" onPress={() => setNum(0)} />
        
        {num < 0 && <Text style={{ color: 'red' }}>Negative</Text>}
        {num > 0 && <Text style={{ color: 'green' }}>Positive</Text>}
        {num === 0 && <Text style={{ color: 'blue' }}>Zero</Text>}
        {text.length > 0 && <Text>{text}</Text>}
        {num === 10 && <Text style={{ color: 'purple' }}>10</Text>}


        <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}  
        />
      </View>
    );
  }
