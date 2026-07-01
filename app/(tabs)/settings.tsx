import {View, Text} from 'react-native'
import React from 'react'
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context'
import { styled } from 'react-native-css'
const SafeAreaView = styled(RNSafeAreaView)

const Settings = () => {
  return (
    <SafeAreaView>
      <Text>Settings</Text>
    </SafeAreaView>
  )
}

export default Settings