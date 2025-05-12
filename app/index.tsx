import { Button, HeaderTitle } from '@react-navigation/elements';
import { Link, useRouter } from 'expo-router';
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <HeaderTitle>Hello World</HeaderTitle>
      <Link style={styles.link} href="/details">View Details</Link>
      <Button onPress={() => router.navigate('/details')}>Go to Details</Button>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    link: {
        fontSize: 16,
        color: '#0000ff',
        textDecorationLine: 'underline',
    },
});