import { icons } from '@/constants';
import { Tabs } from 'expo-router';
import { Image, ImageSourcePropType, View } from 'react-native';

const TabIcon = ({
  focused,
  source,
}: {
  source: ImageSourcePropType;
  focused: boolean;
}) => (
  <View className="flex flex-row justify-center items-center">
    <View
      className={`rounded-full w-12 h-12 items-center justify-center ${focused ? 'bg-general-400' : ''}`}
    >
      <Image
        source={source}
        tintColor="white"
        resizeMode="contain"
        className="w-8 h-8"
      />
    </View>
  </View>
);

const Layout = () => (
  <Tabs
    screenOptions={{
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: 'white',
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: '#333333',
        borderRadius: 50,
        marginHorizontal: 20,
        marginBottom: 20,
        height: 78,
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
      },
    }}
  >
    <Tabs.Screen
      name="home"
      options={{
        title: 'Home',
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} source={icons.home} />
        ),
      }}
    />
    <Tabs.Screen
      name="rides"
      options={{
        title: 'Rides',
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} source={icons.list} />
        ),
      }}
    />
    <Tabs.Screen
      name="chat"
      options={{
        title: 'Chat',
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} source={icons.chat} />
        ),
      }}
    />
    <Tabs.Screen
      name="profile"
      options={{
        title: 'Profile',
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} source={icons.profile} />
        ),
      }}
    />
  </Tabs>
);

export default Layout;
