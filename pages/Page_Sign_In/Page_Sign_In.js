import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import axios from 'axios';
import SwitchSZ from "../../customComponents/SwitchSZ.js";
import Checkbox from "../../customComponents/Checkbox.js";
import InPageNavigator from "../../customComponents/InPageNavigator.js";
import {Select} from "../../customComponents/Select.js";
import {AccordionItem} from "../../customComponents/AccordionItem.js";
import {Map} from "../../customComponents/Map.js";
const Page_Sign_In  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page7}    >
			<View style = {noneModeStyles._username}    >
				<View style = {noneModeStyles._Rectangle_35}    >
				</View>
				<Text style = {noneModeStyles._email_placeholder}   >
					Username
				</Text>
			</View>
			<View style = {noneModeStyles._password}    >
				<View style = {noneModeStyles._Rectangle_36}    >
				</View>
				<Text style = {noneModeStyles._password_placeholder}   >
					Password
				</Text>
			</View>
			<View style = {noneModeStyles._sign_in}    >
				<View style = {noneModeStyles._Rectangle_37}    >
				</View>
				<Text style = {noneModeStyles._sign_in_text}   >
					Sign In 
				</Text>
			</View>
			<View style = {noneModeStyles._Frame_5}    >
				<Text style = {noneModeStyles._Forgot_Password}   >
					Forgot Password
				</Text>
			</View>
			<View style = {noneModeStyles._Ellipse_48}    >
			</View>
			<View style = {noneModeStyles.style13}    >
				<View style = {noneModeStyles.style14}   >
					<Svg style={{height: 96, width: 7}} viewBox = "0 0 7 96">
						<Path fill = {"none"}   stroke = {"white"} strokeWidth = {7} d = "M3.49994 95.4449L3.5001 9.22597e-05"/>
					</Svg>
				</View>
			</View>
			<View style = {noneModeStyles.style15}    >
				<View style = {noneModeStyles.style16}   >
					<Svg style={{height: 104, width: 47}} viewBox = "0 0 47 104">
						<Path fill = {"none"}   stroke = {"white"} strokeWidth = {7} d = "M43.0827 102.715L3.27401 1.28507"/>
					</Svg>
				</View>
			</View>
			<View style = {noneModeStyles.style17}    >
				<View style = {noneModeStyles.style18}   >
					<Svg style={{height: 105, width: 50}} viewBox = "0 0 50 105">
						<Path fill = {"none"}   stroke = {"white"} strokeWidth = {7} d = "M3.2262 103.16L46.7738 1.38032"/>
					</Svg>
				</View>
			</View>
			<Text style = {noneModeStyles._Charity_Desk}   >
				Charity Desk
			</Text>
			<Text style = {noneModeStyles._sign_up}   >
				sign up
			</Text>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Sign_In

const noneModeStyles = StyleSheet.create({
_page7: {
	height: 926,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(60, 179, 113)",
	},
_username: {
	width: 315,
	height: 50,
	position: "absolute",
	left: 51,
	top: 321,
	},
_Rectangle_35: {
	width: 315,
	height: 50,
	backgroundColor: "rgb(250, 249, 249)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 9,
	},
_email_placeholder: {
	width: 237,
	height: 26,
	position: "absolute",
	left: 10,
	top: 12,
	color: "rgba(0, 0, 0, 0.51)",
	fontSize: 24,
	fontWeight: "500",
	lineHeight: 28.125,
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_password: {
	width: 315,
	height: 49,
	position: "absolute",
	left: 51,
	top: 414,
	},
_Rectangle_36: {
	width: 315,
	height: 49,
	backgroundColor: "rgb(255, 254, 254)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 9,
	},
_password_placeholder: {
	width: 237,
	height: 26,
	position: "absolute",
	left: 10,
	top: 12,
	color: "rgba(0, 0, 0, 0.51)",
	fontSize: 24,
	fontWeight: "500",
	lineHeight: 28.125,
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_sign_in: {
	width: 164,
	height: 49,
	position: "absolute",
	left: 126,
	top: 498,
	},
_Rectangle_37: {
	width: 164,
	height: 49,
	backgroundColor: "rgb(204, 210, 227)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 51,
	},
_sign_in_text: {
	width: 88,
	height: 24,
	position: "absolute",
	left: 46,
	top: 15,
	color: "rgb(0, 0, 0)",
	fontSize: 24,
	fontWeight: "500",
	lineHeight: 28.125,
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_Frame_5: {
	width: "auto",
	height: 41,
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	position: "absolute",
	left: 102,
	top: 582,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	},
_Forgot_Password: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	color: "rgb(9, 101, 1)",
	fontSize: 24,
	fontWeight: "700",
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_Ellipse_48: {
	width: 177,
	height: 177,
	position: "absolute",
	left: 51,
	top: 76,
	},
style13: {
	width: 2.68738,
	height: 95.4465,
	position: "absolute",
	left: 139,
	top: 0,
	},
style14: {
	},
style15: {
	width: 39.6147,
	height: 102.011,
	position: "absolute",
	left: 100,
	top: -6.5376,
	},
style16: {
	},
style17: {
	width: 46.2747,
	height: 101.514,
	position: "absolute",
	left: 138.646,
	top: -5.5,
	},
style18: {
	},
_Charity_Desk: {
	width: 125,
	height: 83,
	position: "absolute",
	left: 85,
	top: 125,
	color: "rgb(60, 179, 113)",
	fontSize: 36,
	fontWeight: "800",
	lineHeight: 42.1875,
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_sign_up: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 153,
	top: 834,
	color: "rgb(255, 255, 255)",
	fontSize: 36,
	fontWeight: "500",
	fontFamily: "Tajawal",
	textAlign: "left",
	},
})

