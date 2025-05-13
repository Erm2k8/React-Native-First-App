import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Button } from '@react-navigation/elements';
import { Image } from 'react-native';
import { useState } from 'react';

async function getData() {
    const url = 'https://dog.ceo/api/breeds/image/random';

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        
        return json;
    } catch (e) {
        let errorMessage = (e as Error).message;

        console.error(errorMessage);
    }
}

export default function Home() {
    const [dogImage, setDogImage] = useState(null);

    const handlePress = async () => {
        const data = await getData();

        if (data) {
            setDogImage(data.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Dogs</Text>

            <Button onPress={handlePress}>Get dog pic</Button>

            {dogImage && (
                <Image 
                    source={{ uri: dogImage }}
                    style={{ width: 300, height: 300 }}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },

    text: {
        fontSize: 24,
        fontWeight: 600,
    },
});