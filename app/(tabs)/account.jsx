import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'



export default function account() {
  return (
    <View>

      <Link href="/profile" >
        <Text>
            Profile
        </Text>
      </Link>
      
      <Link href="/about" >
        <Text>
            About
        </Text>
        </Link>
        
        <Link href="/contact" >
        <Text>
            Contact
        </Text>
      </Link>

    </View>
  )
}