import { StyleSheet, View, Text } from 'react-native';

export function Icon() {
  return (
    <View>
      <Text style={styles.title}>Icon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    color: 'whitesmoke'
  }
});
