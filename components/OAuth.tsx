import { View, Text, Image, Alert } from 'react-native'
import CustomButton from './CustomButton'
import { icons } from '@/constants'
import { useSSO } from '@clerk/clerk-expo'
import { useCallback } from 'react'
import { googleOAuth } from '@/lib/auth'
import { router } from 'expo-router'

const OAuth = () => {

  const { startSSOFlow } = useSSO()

  const handleGoogleSignIn = useCallback(async () => {
    try {
      const result = await googleOAuth(startSSOFlow)

      if (result.code === 'session_exists' || result.code === 'success') {
        router.replace('/(root)/(tabs)/home');
        return;
      }
      
    } catch (err) {
      console.error(JSON.stringify(err, null, 2))
    }
  },[])


  return (
    <View>
      <View className='flex flex-row justify-center items-center mt-4 gap-x-3'>
        <View className='flex-1 h-[1px] bg-general-100' />
        <Text className='text-lg'>Or</Text>
        <View className='flex-1 h-[1px] bg-general-100' />
      </View>

      <CustomButton 
      title='Log in with google' 
      className='mt-5 w-full shadow-none'
      IconLeft={()=>(
        <Image source={icons.google} resizeMode="contain" className='w-5 h-5 mx-2' />
      )}
      bgVariant='outline'
      textVariant='primary'
      onPress={handleGoogleSignIn}
      />
    </View>
  )
}
export default OAuth;