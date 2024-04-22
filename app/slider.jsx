import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

export default function Slider() {
  const sliderItems = [
    { id: 1, text: 'Category 1', image: 'https://i.imgur.com/Ooark9g.jpg' },
    { id: 2, text: 'Category 2', image: 'https://i.imgur.com/Ooark9g.jpg' },
    { id: 3, text: 'Category 3', image: 'https://i.imgur.com/Ooark9g.jpg' },
    { id: 4, text: 'Category 4', image: 'https://i.imgur.com/Ooark9g.jpg' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {sliderItems.slice(0, 2).map((item) => (
          <View key={item.id} style={styles.item}>
            <View style={styles.image2}>
            <Link href="/categ1">
            <Image source={{ uri: item.image }} style={styles.image2} />
            <Text style={styles.text}>{item.text}</Text>
            </Link>
            </View>
            
        
          </View>
        ))}
      </View>
      <View style={styles.row}>
        {sliderItems.slice(2, 4).map((item) => (
          <View key={item.id} style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.image3} />
            <Text style={styles.text}>{item.text}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  item: {
    width: 600, // Adjust the width as needed
    height: 100, // Adjust the height as needed
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#fff', // Added background color for visibility
    elevation: 3, // Adds shadow on Android
    shadowColor: '#000', // Adds shadow on iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow position
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image2: {
    width: 70, // Adjust the width as needed
    height: 70, // Adjust the height as needed
    borderRadius: 15, // Adjust for rounded corners
  },
  image3: {
    width: 70, // Adjust the width as needed
    height: 70, // Adjust the height as needed
    borderRadius: 15, // Adjust for rounded corners
  },
  text: {
    color: 'black', // Changed for visibility on a light background
    fontWeight: 'bold',
    marginTop: 10, // Space between image and text
  },
});
