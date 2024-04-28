import { StyleSheet, Image } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://i.imgur.com/TKNiHQP.png' }} style={styles.profileImage} />
      <Text style={styles.name}>Your Name</Text>
      <Text style={styles.bio}>A short bio about yourself</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/app/profile" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0', // Light grey background
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60, // Circular image
    marginBottom: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', // Dark text for name
  },
  bio: {
    fontSize: 16,
    color: '#666', // Lighter text for bio
    marginBottom: 24,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
