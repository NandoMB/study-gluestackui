import { StyleSheet, View, Text } from 'react-native';

export default function ActionSheet() {
  return (
    <View>
      <Text style={styles.title}>ActionSheet</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    color: 'whitesmoke'
  }
});