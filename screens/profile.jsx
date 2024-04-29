// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// import { collection, query, where, getDocs, doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
// import { db } from '../firebase/Config'; // Ensure you have the correct path to your Config file
// import { getAuth } from 'firebase/auth';

// const UserProfile = () => {
//   const [userProfile, setUserProfile] = useState(null);
//   const auth = getAuth();
//   const [newTask, setNewTask] = useState('');


//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const user = auth.currentUser;
//         if (user) {
//           // Use the user's UID for the query
//           const usersQuery = query(collection(db, 'users'), where('id', '==', user.uid));
//           const querySnapshot = await getDocs(usersQuery);
//           querySnapshot.forEach((doc) => {
//             setUserProfile(doc.data());
//           });
//         }
//       } catch (error) {
//         console.error('Error fetching user data: ', error);
//       }
//     };
  
//     fetchUserData();
//   }, []);
  
//   // Function to add a task
//   const addTask = async () => {
//     if (newTask.trim() === '') return;
//     const userId = auth.currentUser.uid; // Get the user's ID
//     const userDoc = doc(db, 'users', userId); // Use ID to reference the document
//     await updateDoc(userDoc, {
//       tasks: arrayUnion(newTask)
//     });
//     setNewTask(''); // Reset the input field after adding the task
//   };
  
//   // Function to delete a task
//   const deleteTask = async (task) => {
//     const userId = auth.currentUser.uid; // Get the user's ID
//     const userDoc = doc(db, 'users', userId); // Use ID to reference the document
//     await updateDoc(userDoc, {
//       tasks: arrayRemove(task)
//     });
//   };


//   if (!userProfile) {
//     return <Text style={styles.loading}>Loading...</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Hi, {userProfile.firstName}</Text>
//       <Text style={styles.info}>{userProfile.lastName}</Text>
//       <Text style={styles.body}>Here's your to-do list for today:</Text>
//       {/* Add user's to-do items here */}
//       <TextInput
//         style={styles.input}
//         placeholder="Enter new task"
//         value={newTask}
//         onChangeText={setNewTask}
//       />
//       <Button title="Add Task" onPress={addTask} />
//       {/* Map through tasks and render them with a delete option */}
//       {userProfile.tasks && userProfile.tasks.map((task, index) => (
//         <View key={index} style={styles.taskContainer}>
//           <Text style={styles.task}>{task}</Text>
//           <Button title="Delete" onPress={() => deleteTask(task)} />
//         </View>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     backgroundColor: '#f7f7f7', // A light grey background for subtle contrast
//     padding: 20,
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#323232',
//     marginTop: 60, // Adjusted for better spacing from the top
//   },
//   info: {
//     fontSize: 24,
//     color: '#4a4a4a',
//     marginBottom: 12,
//   },
//   body: {
//     fontSize: 18,
//     color: '#4a4a4a',
//     marginBottom: 12,
//   },
//   loading: {
//     fontSize: 18,
//     color: '#323232',
//   },input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//   },taskContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingVertical: 8,
//     paddingHorizontal: 12,
//     marginVertical: 4,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 5,
//   },
//   task: {
//     fontSize: 18,
//   }
// });

// export default UserProfile;
