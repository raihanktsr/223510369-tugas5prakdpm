import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DestinationsScreen from './screens/DestinationsScreen';
import DestinationDetailsScreen from './screens/DestinationDetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Destinations" component={DestinationsScreen} options={{ title: 'Travel Explorer' }} />
        <Stack.Screen name="DestinationDetails" component={DestinationDetailsScreen} options={{ title: 'Destination Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
