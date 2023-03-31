import { StyleSheet, View, Text, Pressable, ScrollView } from 'react-native';

export default function ButtonShowcase({ nextColorModeName, toggleColorMode }: { nextColorModeName: string, toggleColorMode: () => void }) {
  const onPressHandler = () => console.log('Clicked!');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Button Showcase</Text>
        <Pressable onPress={toggleColorMode}>
          <Text style={styles.title}>{nextColorModeName === 'dark' ? '🌛' : '🌞'}</Text>
        </Pressable>
      </View>
      <ScrollView style={styles.scrollViewOut} contentContainerStyle={styles.scrollViewIn}>
        <Text style={styles.sectionHeader}>Solid</Text>
        <View style={styles.section}>
          <Button action="default" variant="solid" onPress={onPressHandler}>Default</Button>
          <Button action="primary" variant="solid" onPress={onPressHandler}>Primary</Button>
          <Button action="secondary" variant="solid" onPress={onPressHandler}>Secondary</Button>
          <Button action="tertiary" variant="solid" onPress={onPressHandler}>Tertiary</Button>
        </View>
        <Text style={styles.sectionHeader}>Outline</Text>
        <View style={styles.section}>
          <Button action="default" variant="outline" onPress={onPressHandler}>Default</Button>
          <Button action="primary" variant="outline" onPress={onPressHandler}>Primary</Button>
          <Button action="secondary" variant="outline" onPress={onPressHandler}>Secondary</Button>
          <Button action="tertiary" variant="outline" onPress={onPressHandler}>Tertiary</Button>
        </View>
        <Text style={styles.sectionHeader}>Link</Text>
        <View style={styles.section}>
          <Button action="default" variant="link" onPress={onPressHandler}>Default</Button>
          <Button action="primary" variant="link" onPress={onPressHandler}>Primary</Button>
          <Button action="secondary" variant="link" onPress={onPressHandler}>Secondary</Button>
          <Button action="tertiary" variant="link" onPress={onPressHandler}>Tertiary</Button>
        </View>
        <Text style={styles.sectionHeader}>Icon</Text>
        <View style={styles.section}>
          <Button action="default" variant="solid" IconLeft={<Feather name="bell" />} onPress={onPressHandler}>Default</Button>
          <Button action="primary" variant="solid" IconRight={<Feather name="package" />} onPress={onPressHandler}>Primary</Button>
          <Button action="secondary" variant="solid" IconLeft={<Feather name="bell" />} IconRight={<Feather name="package" />} onPress={onPressHandler}>Secondary</Button>
        </View>
        <Text style={styles.sectionHeader}>Disabled</Text>
        <View style={styles.section}>
          <Button action="default" variant="solid" isDisabled onPress={onPressHandler}>Default</Button>
          <Button action="primary" variant="solid" isDisabled onPress={onPressHandler}>Primary</Button>
          <Button action="secondary" variant="solid" isDisabled onPress={onPressHandler}>Secondary</Button>
          <Button action="tertiary" variant="solid" isDisabled onPress={onPressHandler}>Tertiary</Button>
        </View>
        <Text style={styles.sectionHeader}>Loading</Text>
        <View style={styles.section}>
          <Button action="default" variant="solid" isLoading onPress={onPressHandler}>Default</Button>
          <Button action="primary" variant="solid" isLoading onPress={onPressHandler}>Primary</Button>
          <Button action="secondary" variant="outline" isLoading onPress={onPressHandler}>Secondary</Button>
          <Button action="tertiary" variant="link" isLoading onPress={onPressHandler}>Tertiary</Button>
          <Button action="default" variant="solid" isLoading isLoadingText="Submitting" onPress={onPressHandler}>Default</Button>
          <Button action="primary" variant="solid" isLoading isLoadingText="Submitting" onPress={onPressHandler}>Primary</Button>
          <Button action="secondary" variant="outline" isLoading isLoadingText="Submitting" onPress={onPressHandler}>Secondary</Button>
          <Button action="tertiary" variant="link" isLoading isLoadingText="Submitting" onPress={onPressHandler}>Tertiary</Button>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    gap: 16
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    paddingTop: 50,
    paddingBottom: 30,
    fontSize: 26,
    color: 'whitesmoke'
  },
  scrollViewOut: {
    flex: 1
  },
  scrollViewIn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80
  },
  section: {
    gap: 12,
    marginBottom: 40,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionHeader: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 20
  }
});
