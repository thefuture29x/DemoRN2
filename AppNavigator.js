import React from "react";
import IconSibaScreen from "./screens/IconSibaScreen";
import IconSibaScreens from "./screens/IconSibaScreens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// const AppNavigator = createStackNavigator({
//     IconSibaScreen: {
//         screen: IconSibaScreen
//     },
//     IconSibaScreens: {
//         screen: IconSibaScreens
//     }
// });
function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}
function DetailsScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
        </View>
    );
}
const Stack = createNativeStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={IconSibaScreen} />
                <Stack.Screen name="Details" component={IconSibaScreens} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;