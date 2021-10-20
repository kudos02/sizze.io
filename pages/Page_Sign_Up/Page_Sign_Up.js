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
const Page_Sign_Up  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page2}    >
			<View style = {noneModeStyles._full_name}    >
				<View style = {noneModeStyles._Rectangle_35}    >
				</View>
				<Text style = {noneModeStyles._full_name_2}   >
					full name
				</Text>
			</View>
			<View style = {noneModeStyles._email}    >
				<View style = {noneModeStyles._Rectangle_35_2}    >
				</View>
				<Text style = {noneModeStyles._email_2}   >
					email
				</Text>
			</View>
			<View style = {noneModeStyles._password}    >
				<View style = {noneModeStyles._Rectangle_35_3}    >
				</View>
				<Text style = {noneModeStyles._password_2}   >
					password
				</Text>
			</View>
			<View style = {noneModeStyles._confirm_password}    >
				<View style = {noneModeStyles._Rectangle_35_4}    >
				</View>
				<Text style = {noneModeStyles._confirm_password_2}   >
					confirm password
				</Text>
			</View>
			<View style = {noneModeStyles._SignIn_Btn}    >
				<View style = {noneModeStyles._Rectangle_37}    >
				</View>
				<Text style = {noneModeStyles._Sign_Up}   >
					Sign-Up
				</Text>
			</View>
			<View style = {noneModeStyles._full_name_3}    >
				<View style = {noneModeStyles._Rectangle_35_5}    >
				</View>
				<Text style = {noneModeStyles._cnic}   >
					CNIC
				</Text>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Sign_Up

const noneModeStyles = StyleSheet.create({
_page2: {
	height: 926,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(60, 179, 113)",
	},
_full_name: {
	width: 315,
	height: 50,
	position: "absolute",
	left: 56,
	top: 139,
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
_full_name_2: {
	width: 237,
	height: 26,
	position: "absolute",
	left: 14,
	top: 12,
	color: "rgba(0, 0, 0, 0.51)",
	fontSize: 24,
	fontWeight: "500",
	lineHeight: 28.125,
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_email: {
	width: 315,
	height: 50,
	position: "absolute",
	left: 56,
	top: 247,
	},
_Rectangle_35_2: {
	width: 315,
	height: 50,
	backgroundColor: "rgb(250, 249, 249)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 9,
	},
_email_2: {
	width: 237,
	height: 26,
	position: "absolute",
	left: 14,
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
	height: 50,
	position: "absolute",
	left: 56,
	top: 463,
	},
_Rectangle_35_3: {
	width: 315,
	height: 50,
	backgroundColor: "rgb(250, 249, 249)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 9,
	},
_password_2: {
	width: 237,
	height: 26,
	position: "absolute",
	left: 14,
	top: 12,
	color: "rgba(0, 0, 0, 0.51)",
	fontSize: 24,
	fontWeight: "500",
	lineHeight: 28.125,
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_confirm_password: {
	width: 315,
	height: 50,
	position: "absolute",
	left: 56,
	top: 571,
	},
_Rectangle_35_4: {
	width: 315,
	height: 50,
	backgroundColor: "rgb(250, 249, 249)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 9,
	},
_confirm_password_2: {
	width: 237,
	height: 26,
	position: "absolute",
	left: 14,
	top: 12,
	color: "rgba(0, 0, 0, 0.51)",
	fontSize: 24,
	fontWeight: "500",
	lineHeight: 28.125,
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_SignIn_Btn: {
	width: 164,
	height: 62,
	position: "absolute",
	left: 132,
	top: 679,
	},
_Rectangle_37: {
	width: 164,
	height: 49,
	backgroundColor: "rgb(196, 196, 196)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 51,
	},
_Sign_Up: {
	width: 88,
	height: 47,
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
_full_name_3: {
	width: 315,
	height: 50,
	position: "absolute",
	left: 56,
	top: 355,
	},
_Rectangle_35_5: {
	width: 315,
	height: 50,
	backgroundColor: "rgb(250, 249, 249)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 9,
	},
_cnic: {
	width: 237,
	height: 26,
	position: "absolute",
	left: 14,
	top: 12,
	color: "rgba(0, 0, 0, 0.51)",
	fontSize: 24,
	fontWeight: "500",
	lineHeight: 28.125,
	fontFamily: "Tajawal",
	textAlign: "left",
	},
})

