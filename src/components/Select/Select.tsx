import { StyleSheet, View, Text } from 'react-native';

export default function Select() {
  return (
    <View>
      <Text style={styles.title}>Select</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    color: 'whitesmoke'
  }
});