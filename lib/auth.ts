import * as Linking from 'expo-linking'
import { fetchAPI } from './fetch';

export const googleOAuth = async (startSSOFlow: any) => {
  try {
    const { createdSessionId, setActive, signIn, signUp } = await startSSOFlow({
      strategy: 'oauth_google',
      redirectUrl: Linking.createURL('/(root)/(tabs)/home', {
        scheme: 'myapp',
      }),
    });

    if (createdSessionId) {
      if (setActive) {
        await setActive!({ session: createdSessionId });

        if (signUp.createdUserId) {
            await fetchAPI('/(api)/user',{
                method: "POST",
                body: JSON.stringify({
                    name:`${signUp.firstName} ${signUp.lastName}`,
                    email: signUp.emailAddress,
                    clerkId: signUp.createdUserId,
                }),
            })
        }
        return {
           success: true ,
           code: 'success',
           message: 'You have successfully authenticated',
        }
      }
    }
    return {
        success: false,
        code: 'success',
        message: 'An Error occurred'
    }
  } catch (error:any) {
    console.error('Google OAuth Error:', error);
    return {
      success: false,
      code: error.code,
      message: error?.errors[0]?.longMessage,
    };
  }
};

