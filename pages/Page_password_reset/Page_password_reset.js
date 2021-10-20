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
const Page_password_reset  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page1}    >
			<View style = {noneModeStyles._viewport}    >
				<View style = {noneModeStyles._Frame_6}    >
					<View style = {noneModeStyles._email}    >
						<View style = {noneModeStyles._Rectangle_35}    >
						</View>
						<Text style = {noneModeStyles._email_2}   >
							email
						</Text>
					</View>
					<View style = {noneModeStyles._SignIn_Btn}    >
						<View style = {noneModeStyles._Rectangle_37}    >
						</View>
						<Text style = {noneModeStyles._send_OTP}   >
							Reset
						</Text>
					</View>
				</View>
				<Text style = {noneModeStyles._After_pressing_reset_button_check_your_mail_plz}   >
					After pressing reset button check your mail plz{'\n'}
				</Text>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_password_reset

const noneModeStyles = StyleSheet.create({
_page1: {
	height: 926,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(60, 179, 113)",
	},
_viewport: {
	height: 926,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(60, 179, 113)",
	},
_Frame_6: {
	width: "auto",
	height: 155,
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	position: "absolute",
	left: 57,
	top: 386,
	},
_email: {
	width: 315,
	height: 50,
	flexShrink: 0,
	marginBottom: 39,
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
_SignIn_Btn: {
	width: 164,
	height: 49,
	flexShrink: 0,
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
_send_OTP: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 54,
	top: 10,
	color: "rgb(0, 0, 0)",
	fontSize: 24,
	fontWeight: "500",
	fontFamily: "Tajawal",
	textAlign: "center",
	},
_After_pressing_reset_button_check_your_mail_plz: {
	width: 253,
	height: 73,
	position: "absolute",
	left: 89,
	top: 560,
	color: "rgb(229, 229, 229)",
	fontSize: 24,
	fontWeight: "500",
	lineHeight: 28.125,
	fontFamily: "Tajawal",
	textAlign: "center",
	},
})

