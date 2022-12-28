import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { NavigationContainer } from '@react-navigation/native'
import AuctionList from '../screens/AuctionList'
import Auction from '../screens/Auction'

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="AuctionList"
          component={AuctionList}
          options={{
            title: 'Auction List',
          }}
        />
        <Stack.Screen 
          name="Auction"
          component={Auction}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}