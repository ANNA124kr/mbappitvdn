import { Button, StyleSheet, Switch } from 'react-native';

import { Text, View } from '@/components/Themed';
import ButtonCustom from '../../components/buttons/ButtonCustom';
import { SafeAreaView } from 'react-native-safe-area-context';
import PressableCustom from '@/components/buttons/PressableCustom';

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container} >
    <View>
      <ButtonCustom/>
      <PressableCustom/>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
