import React from "react";
import {createAppContainer} from "react-navigation";
import IconSibaScreen from "./screens/IconSibaScreen";
import IconSibaScreens from "./screens/IconSibaScreens";
import { createStackNavigator } from 'react-navigation-stack'

const AppNavigator = createStackNavigator({
    IconSibaScreen: {
        screen: IconSibaScreen
    },
    IconSibaScreens: {
        screen: IconSibaScreens
    }
});

export default createAppContainer(AppNavigator);