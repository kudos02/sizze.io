import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  StyleSheet,
  Animated,
  Dimensions,
  Vibration,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import { Svg, Path } from "react-native-svg";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Icon from "react-native-vector-icons/Entypo";
import RNPickerSelect from "react-native-picker-select";
import { fonts } from "./fonts/fonts.js";
import { useFonts } from "@expo-google-fonts/dev";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Page_first_page from "./pages/Page_first_page/Page_first_page.js";
import Page_password_reset from "./pages/Page_password_reset/Page_password_reset.js";
import Page_Sign_Up from "./pages/Page_Sign_Up/Page_Sign_Up.js";
import Page_Edit_Profile from "./pages/Page_Edit_Profile/Page_Edit_Profile.js";
import Page_Messages from "./pages/Page_Messages/Page_Messages.js";
import Page_post_details from "./pages/Page_post_details/Page_post_details.js";
import Page_fundraise_request from "./pages/Page_fundraise_request/Page_fundraise_request.js";
import Page_Sign_In from "./pages/Page_Sign_In/Page_Sign_In.js";
import Page_Chat from "./pages/Page_Chat/Page_Chat.js";
import Page_Home from "./pages/Page_Home/Page_Home.js";
const Tab = createBottomTabNavigator();
const Page_first_pageStackNavigator = createStackNavigator();
const ScreenForPage_first_page = () => {
  return (
    <Page_first_pageStackNavigator.Navigator>
      <Page_first_pageStackNavigator.Screen
        name="Page_first_page"
        component={Page_first_page}
        options={{
          headerShown: false,
        }}
      />
    </Page_first_pageStackNavigator.Navigator>
  );
};
const Page_password_resetStackNavigator = createStackNavigator();
const ScreenForPage_password_reset = () => {
  return (
    <Page_password_resetStackNavigator.Navigator>
      <Page_password_resetStackNavigator.Screen
        name="Page_password_reset"
        component={Page_password_reset}
        options={{
          headerShown: false,
        }}
      />
    </Page_password_resetStackNavigator.Navigator>
  );
};
const Page_Sign_UpStackNavigator = createStackNavigator();
const ScreenForPage_Sign_Up = () => {
  return (
    <Page_Sign_UpStackNavigator.Navigator>
      <Page_Sign_UpStackNavigator.Screen
        name="Page_Sign_Up"
        component={Page_Sign_Up}
        options={{
          headerShown: false,
        }}
      />
    </Page_Sign_UpStackNavigator.Navigator>
  );
};
const Page_Edit_ProfileStackNavigator = createStackNavigator();
const ScreenForPage_Edit_Profile = () => {
  return (
    <Page_Edit_ProfileStackNavigator.Navigator>
      <Page_Edit_ProfileStackNavigator.Screen
        name="Page_Edit_Profile"
        component={Page_Edit_Profile}
        options={{
          headerShown: false,
        }}
      />
    </Page_Edit_ProfileStackNavigator.Navigator>
  );
};
const Page_MessagesStackNavigator = createStackNavigator();
const ScreenForPage_Messages = () => {
  return (
    <Page_MessagesStackNavigator.Navigator>
      <Page_MessagesStackNavigator.Screen
        name="Page_Messages"
        component={Page_Messages}
        options={{
          headerShown: false,
        }}
      />
    </Page_MessagesStackNavigator.Navigator>
  );
};
const Page_post_detailsStackNavigator = createStackNavigator();
const ScreenForPage_post_details = () => {
  return (
    <Page_post_detailsStackNavigator.Navigator>
      <Page_post_detailsStackNavigator.Screen
        name="Page_post_details"
        component={Page_post_details}
        options={{
          headerShown: false,
        }}
      />
    </Page_post_detailsStackNavigator.Navigator>
  );
};
const Page_fundraise_requestStackNavigator = createStackNavigator();
const ScreenForPage_fundraise_request = () => {
  return (
    <Page_fundraise_requestStackNavigator.Navigator>
      <Page_fundraise_requestStackNavigator.Screen
        name="Page_fundraise_request"
        component={Page_fundraise_request}
        options={{
          headerShown: false,
        }}
      />
    </Page_fundraise_requestStackNavigator.Navigator>
  );
};
const Page_Sign_InStackNavigator = createStackNavigator();
const ScreenForPage_Sign_In = () => {
  return (
    <Page_Sign_InStackNavigator.Navigator>
      <Page_Sign_InStackNavigator.Screen
        name="Page_Sign_In"
        component={Page_Sign_In}
        options={{
          headerShown: false,
        }}
      />
    </Page_Sign_InStackNavigator.Navigator>
  );
};
const Page_ChatStackNavigator = createStackNavigator();
const ScreenForPage_Chat = () => {
  return (
    <Page_ChatStackNavigator.Navigator>
      <Page_ChatStackNavigator.Screen
        name="Page_Chat"
        component={Page_Chat}
        options={{
          headerShown: false,
        }}
      />
    </Page_ChatStackNavigator.Navigator>
  );
};
const Page_HomeStackNavigator = createStackNavigator();
const ScreenForPage_Home = () => {
  return (
    <Page_HomeStackNavigator.Navigator>
      <Page_HomeStackNavigator.Screen
        name="Page_Home"
        component={Page_Home}
        options={{
          headerShown: false,
        }}
      />
    </Page_HomeStackNavigator.Navigator>
  );
};
const App = () => {
  let [fontsLoaded] = useFonts(fonts);
  const Stack = createStackNavigator();
  const [isPage0Open, setIsPage0Open] = useState(true);
  const zIndexPage0 = useRef(1);
  const [isPage1Open, setIsPage1Open] = useState(false);
  const zIndexPage1 = useRef(2);
  const [isPage2Open, setIsPage2Open] = useState(false);
  const zIndexPage2 = useRef(2);
  const [isPage3Open, setIsPage3Open] = useState(false);
  const zIndexPage3 = useRef(2);
  const [isPage4Open, setIsPage4Open] = useState(false);
  const zIndexPage4 = useRef(2);
  const [isPage5Open, setIsPage5Open] = useState(false);
  const zIndexPage5 = useRef(2);
  const [isPage6Open, setIsPage6Open] = useState(false);
  const zIndexPage6 = useRef(2);
  const [isPage7Open, setIsPage7Open] = useState(false);
  const zIndexPage7 = useRef(2);
  const [isPage8Open, setIsPage8Open] = useState(false);
  const zIndexPage8 = useRef(2);
  const [isPage9Open, setIsPage9Open] = useState(false);
  const zIndexPage9 = useRef(2);
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const mainScreen = () => {
    return (
      <Tab.Navigator
        tabBarOptions={{
          showLabel: true,
          style: noneModeStyles.style0,
          iconStyle: { width: "100%", height: "100%" },
        }}
      >
        <Tab.Screen
          name="Page_Sign_In"
          component={ScreenForPage_Sign_In}
          options={{ tabBarVisible: false }}
        />
        <Tab.Screen
          name="Page_password_reset"
          component={ScreenForPage_password_reset}
          options={{ tabBarVisible: false }}
        />
        <Tab.Screen
          name="Page_Sign_Up"
          component={ScreenForPage_Sign_Up}
          options={{ tabBarVisible: false }}
        />
        <Tab.Screen
          name="Page_Edit_Profile"
          component={ScreenForPage_Edit_Profile}
          options={{ tabBarVisible: false }}
        />
        <Tab.Screen
          name="Page_Messages"
          component={ScreenForPage_Messages}
          options={{ tabBarVisible: false }}
        />
        <Tab.Screen
          name="Page_post_details"
          component={ScreenForPage_post_details}
          options={{ tabBarVisible: false }}
        />
        <Tab.Screen
          name="Page_fundraise_request"
          component={ScreenForPage_fundraise_request}
          options={{ tabBarVisible: false }}
        />
        <Tab.Screen
          name="Page_Chat"
          component={ScreenForPage_Chat}
          options={{ tabBarVisible: true }}
        />
        <Tab.Screen
          name="Page_Home"
          component={ScreenForPage_Home}
          options={{ tabBarVisible: true }}
        />
      </Tab.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="main"
          options={{ headerShown: false }}
          component={mainScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const noneModeStyles = StyleSheet.create({
  style0: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0,
  },
});
export default App;
