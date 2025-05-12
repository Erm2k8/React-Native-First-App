import { Button, HeaderTitle } from '@react-navigation/elements';
import { Link, useRouter } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailsScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <HeaderTitle>Details</HeaderTitle>
            <Button onPress={() => router.navigate('/')}>Go to home</Button>
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