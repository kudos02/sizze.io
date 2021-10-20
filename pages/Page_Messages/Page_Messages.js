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
const Page_Messages  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page4}    >
			<View style = {noneModeStyles._User_messages}    >
				<View style = {noneModeStyles._Rectangle_39}    >
				</View>
				<View style = {noneModeStyles._user_icon}    >
					<View style = {noneModeStyles._Subtract}    >
					</View>
					<View style = {noneModeStyles._Rectangle_26}    >
					</View>
				</View>
				<Text style = {noneModeStyles._Ailyan_Ali}   >
					Ailyan Ali{'\n'}
				</Text>
				<Text style = {noneModeStyles._hii}   >
					hii{'\n'}
				</Text>
			</View>
			<View style = {noneModeStyles._User_messages_2}    >
				<View style = {noneModeStyles._Rectangle_39_2}    >
				</View>
				<View style = {noneModeStyles._user_icon_2}    >
					<View style = {noneModeStyles._Subtract_2}    >
					</View>
					<View style = {noneModeStyles._Rectangle_26_2}    >
					</View>
				</View>
				<Text style = {noneModeStyles._Ailyan_Ali_2}   >
					Ailyan Ali{'\n'}
				</Text>
				<Text style = {noneModeStyles._hii_2}   >
					hii{'\n'}
				</Text>
			</View>
			<View style = {noneModeStyles._User_messages_3}    >
				<View style = {noneModeStyles._Rectangle_39_3}    >
				</View>
				<View style = {noneModeStyles._user_icon_3}    >
					<View style = {noneModeStyles._Subtract_3}    >
					</View>
					<View style = {noneModeStyles._Rectangle_26_3}    >
					</View>
				</View>
				<Text style = {noneModeStyles._Ailyan_Ali_3}   >
					Ailyan Ali{'\n'}
				</Text>
				<Text style = {noneModeStyles._hii_3}   >
					hii{'\n'}
				</Text>
			</View>
			<View style = {noneModeStyles._User_messages_4}    >
				<View style = {noneModeStyles._Rectangle_39_4}    >
				</View>
				<View style = {noneModeStyles._user_icon_4}    >
					<View style = {noneModeStyles._Subtract_4}    >
					</View>
					<View style = {noneModeStyles._Rectangle_26_4}    >
					</View>
				</View>
				<Text style = {noneModeStyles._Ailyan_Ali_4}   >
					Ailyan Ali{'\n'}
				</Text>
				<Text style = {noneModeStyles._hii_4}   >
					hii{'\n'}
				</Text>
			</View>
			<View style = {noneModeStyles._User_messages_5}    >
				<View style = {noneModeStyles._Rectangle_39_5}    >
				</View>
				<View style = {noneModeStyles._user_icon_5}    >
					<View style = {noneModeStyles._Subtract_5}    >
					</View>
					<View style = {noneModeStyles._Rectangle_26_5}    >
					</View>
				</View>
				<Text style = {noneModeStyles._Ailyan_Ali_5}   >
					Ailyan Ali{'\n'}
				</Text>
				<Text style = {noneModeStyles._hii_5}   >
					hii{'\n'}
				</Text>
			</View>
			<View style = {noneModeStyles._top_menu}    >
				<View style = {noneModeStyles.style37}    >
					<View style = {noneModeStyles.style38}   >
						<Svg style={{height: 75, width: 428}} viewBox = "0 0 428 75">
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._align_right}    >
					<View style = {noneModeStyles.style40}    >
						<View style = {noneModeStyles.style41}   >
							<Svg style={{height: 4, width: 38}} viewBox = "0 0 38 4">
								<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M35.8333 2H2"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style42}    >
						<View style = {noneModeStyles.style43}   >
							<Svg style={{height: 4, width: 48}} viewBox = "0 0 48 4">
								<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M45.5 2H2"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style44}    >
						<View style = {noneModeStyles.style45}   >
							<Svg style={{height: 4, width: 48}} viewBox = "0 0 48 4">
								<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M45.5 2H2"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style46}    >
						<View style = {noneModeStyles.style47}   >
							<Svg style={{height: 4, width: 38}} viewBox = "0 0 38 4">
								<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M35.8333 2H2"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._arrow_left}    >
					<View style = {noneModeStyles.style49}    >
						<View style = {noneModeStyles.style50}   >
							<Svg style={{height: 4, width: 38}} viewBox = "0 0 38 4">
								<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M35.8333 2H2"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style51}    >
						<View style = {noneModeStyles.style52}   >
							<Svg style={{height: 30, width: 21}} viewBox = "0 0 21 30">
								<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M18.992 27.7768L2.00796 14.8924L18.992 2.00796"/>
							</Svg>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._bottom_menu}    >
				<View style = {noneModeStyles._Rectangle_38}    >
				</View>
				<View style = {noneModeStyles._Frame_4}    >
					<View style = {noneModeStyles._home}    >
						<View style = {noneModeStyles.style57}    >
							<View style = {noneModeStyles.style58}   >
								<Svg style={{height: 39, width: 37}} viewBox = "0 0 37 39">
									<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M2 14.25L18.5 2L35 14.25V33.5C35 34.4283 34.6137 35.3185 33.9261 35.9749C33.2384 36.6313 32.3058 37 31.3333 37H5.66667C4.69421 37 3.76158 36.6313 3.07394 35.9749C2.38631 35.3185 2 34.4283 2 33.5V14.25Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style59}    >
							<View style = {noneModeStyles.style60}   >
								<Svg style={{height: 22, width: 15}} viewBox = "0 0 15 22">
									<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M2 19.5V2H13V19.5"/>
								</Svg>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._message_square}    >
						<View style = {noneModeStyles.style62}    >
							<View style = {noneModeStyles.style63}   >
								<Svg style={{height: 36, width: 37}} viewBox = "0 0 37 36">
									<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M35 23C35 23.9283 34.6137 24.8185 33.9261 25.4749C33.2384 26.1313 32.3058 26.5 31.3333 26.5H9.33333L2 33.5V5.5C2 4.57174 2.38631 3.6815 3.07394 3.02513C3.76158 2.36875 4.69421 2 5.66667 2H31.3333C32.3058 2 33.2384 2.36875 33.9261 3.02513C34.6137 3.6815 35 4.57174 35 5.5V23Z"/>
								</Svg>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._plus_square}    >
						<View style = {noneModeStyles.style65}    >
							<View style = {noneModeStyles.style66}   >
								<Svg style={{height: 36, width: 37}} viewBox = "0 0 37 36">
									<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M31.3333 2H5.66667C3.64162 2 2 3.567 2 5.5V30C2 31.933 3.64162 33.5 5.66667 33.5H31.3333C33.3584 33.5 35 31.933 35 30V5.5C35 3.567 33.3584 2 31.3333 2Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style67}    >
							<View style = {noneModeStyles.style68}   >
								<Svg style={{height: 18, width: 4}} viewBox = "0 0 4 18">
									<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M2 2V16"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style69}    >
							<View style = {noneModeStyles.style70}   >
								<Svg style={{height: 4, width: 19}} viewBox = "0 0 19 4">
									<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M2 2H16.6667"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Messages

const noneModeStyles = StyleSheet.create({
_page4: {
	height: 926,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_User_messages: {
	width: 428,
	height: 104,
	position: "absolute",
	left: 0,
	top: 75,
	},
_Rectangle_39: {
	width: 428,
	height: 104,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_user_icon: {
	width: 78.5505,
	height: 73,
	position: "absolute",
	left: 12.0847,
	top: 15,
	},
_Subtract: {
	width: 65.4589,
	height: 60.8333,
	position: "absolute",
	left: 6.5459,
	top: 6.08325,
	},
_Rectangle_26: {
	width: 65.4589,
	height: 60.8333,
	position: "absolute",
	transform: [
		{translateX: 6.5459},
		{translateY: 6.08325},
	],
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(255, 255, 255)",
	borderRadius: 56,
	},
_Ailyan_Ali: {
	width: 299.096,
	height: 14,
	position: "absolute",
	left: 90.6353,
	top: 29,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "700",
	lineHeight: 21.0938,
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_hii: {
	width: 299.096,
	height: 15,
	position: "absolute",
	left: 90.6353,
	top: 59,
	color: "rgb(204, 210, 227)",
	fontSize: 18,
	fontWeight: "500",
	lineHeight: 21.0938,
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_User_messages_2: {
	width: 428,
	height: 104,
	position: "absolute",
	left: 0,
	top: 179,
	},
_Rectangle_39_2: {
	width: 428,
	height: 104,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_user_icon_2: {
	width: 78.5505,
	height: 73,
	position: "absolute",
	left: 12.0847,
	top: 15,
	},
_Subtract_2: {
	width: 65.4589,
	height: 60.8333,
	position: "absolute",
	left: 6.5459,
	top: 6.08325,
	},
_Rectangle_26_2: {
	width: 65.4589,
	height: 60.8333,
	position: "absolute",
	transform: [
		{translateX: 6.5459},
		{translateY: 6.08325},
	],
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(255, 255, 255)",
	borderRadius: 56,
	},
_Ailyan_Ali_2: {
	width: 299.096,
	height: 14,
	position: "absolute",
	left: 90.6353,
	top: 29,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "700",
	lineHeight: 21.0938,
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_hii_2: {
	width: 299.096,
	height: 15,
	position: "absolute",
	left: 90.6353,
	top: 59,
	color: "rgb(204, 210, 227)",
	fontSize: 18,
	fontWeight: "500",
	lineHeight: 21.0938,
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_User_messages_3: {
	width: 428,
	height: 104,
	position: "absolute",
	left: 0,
	top: 283,
	},
_Rectangle_39_3: {
	width: 428,
	height: 104,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_user_icon_3: {
	width: 78.5505,
	height: 73,
	position: "absolute",
	left: 12.0847,
	top: 15,
	},
_Subtract_3: {
	width: 65.4589,
	height: 60.8333,
	position: "absolute",
	left: 6.5459,
	top: 6.08325,
	},
_Rectangle_26_3: {
	width: 65.4589,
	height: 60.8333,
	position: "absolute",
	transform: [
		{translateX: 6.5459},
		{translateY: 6.08325},
	],
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(255, 255, 255)",
	borderRadius: 56,
	},
_Ailyan_Ali_3: {
	width: 299.096,
	height: 14,
	position: "absolute",
	left: 90.6353,
	top: 29,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "700",
	lineHeight: 21.0938,
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_hii_3: {
	width: 299.096,
	height: 15,
	position: "absolute",
	left: 90.6353,
	top: 59,
	color: "rgb(204, 210, 227)",
	fontSize: 18,
	fontWeight: "500",
	lineHeight: 21.0938,
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_User_messages_4: {
	width: 428,
	height: 104,
	position: "absolute",
	left: 0,
	top: 387,
	},
_Rectangle_39_4: {
	width: 428,
	height: 104,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_user_icon_4: {
	width: 78.5505,
	height: 73,
	position: "absolute",
	left: 12.0847,
	top: 15,
	},
_Subtract_4: {
	width: 65.4589,
	height: 60.8333,
	position: "absolute",
	left: 6.5459,
	top: 6.08325,
	},
_Rectangle_26_4: {
	width: 65.4589,
	height: 60.8333,
	position: "absolute",
	transform: [
		{translateX: 6.5459},
		{translateY: 6.08325},
	],
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(255, 255, 255)",
	borderRadius: 56,
	},
_Ailyan_Ali_4: {
	width: 299.096,
	height: 14,
	position: "absolute",
	left: 90.6353,
	top: 29,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "700",
	lineHeight: 21.0938,
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_hii_4: {
	width: 299.096,
	height: 15,
	position: "absolute",
	left: 90.6353,
	top: 59,
	color: "rgb(204, 210, 227)",
	fontSize: 18,
	fontWeight: "500",
	lineHeight: 21.0938,
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_User_messages_5: {
	width: 428,
	height: 104,
	position: "absolute",
	left: 0,
	top: 491,
	},
_Rectangle_39_5: {
	width: 428,
	height: 104,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_user_icon_5: {
	width: 78.5505,
	height: 73,
	position: "absolute",
	left: 12.0847,
	top: 15,
	},
_Subtract_5: {
	width: 65.4589,
	height: 60.8333,
	position: "absolute",
	left: 6.5459,
	top: 6.08325,
	},
_Rectangle_26_5: {
	width: 65.4589,
	height: 60.8333,
	position: "absolute",
	transform: [
		{translateX: 6.5459},
		{translateY: 6.08325},
	],
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(255, 255, 255)",
	borderRadius: 56,
	},
_Ailyan_Ali_5: {
	width: 299.096,
	height: 14,
	position: "absolute",
	left: 90.6353,
	top: 29,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "700",
	lineHeight: 21.0938,
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_hii_5: {
	width: 299.096,
	height: 15,
	position: "absolute",
	left: 90.6353,
	top: 59,
	color: "rgb(204, 210, 227)",
	fontSize: 18,
	fontWeight: "500",
	lineHeight: 21.0938,
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_top_menu: {
	width: 428,
	height: 75,
	position: "absolute",
	left: 0,
	top: 0,
	},
style37: {
	width: 428,
	height: 75,
	position: "absolute",
	left: 0,
	top: 0,
	},
style38: {
	},
_align_right: {
	width: 58,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 347,
	top: 15,
	},
style40: {
	position: "absolute",
	transform: [
		{translateX: 16.9166},
		{translateY: 18.3333},
	],
	},
style41: {
	},
style42: {
	position: "absolute",
	transform: [
		{translateX: 7.25},
		{translateY: 11},
	],
	},
style43: {
	},
style44: {
	position: "absolute",
	transform: [
		{translateX: 7.25},
		{translateY: 25.6667},
	],
	},
style45: {
	},
style46: {
	position: "absolute",
	transform: [
		{translateX: 16.9166},
		{translateY: 33},
	],
	},
style47: {
	},
_arrow_left: {
	width: 58,
	height: 44,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 25,
	top: 15,
	},
style49: {
	position: "absolute",
	transform: [
		{translateX: 12.0834},
		{translateY: 22},
	],
	},
style50: {
	},
style51: {
	position: "absolute",
	transform: [
		{translateX: 12.0834},
		{translateY: 9.16675},
	],
	},
style52: {
	},
_bottom_menu: {
	width: 428,
	height: 76,
	position: "absolute",
	left: 0,
	top: 850,
	},
_Rectangle_38: {
	width: 428,
	height: 76,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_Frame_4: {
	width: 256,
	height: "auto",
	backgroundColor: "rgb(255, 255, 255)",
	display: "flex",
	flexDirection: "row",
	position: "absolute",
	left: 89,
	top: 17,
	},
_home: {
	width: 44,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	flexShrink: 0,
	marginRight: 62,
	},
style57: {
	position: "absolute",
	transform: [
		{translateX: 5.5},
		{translateY: 3.5},
	],
	},
style58: {
	},
style59: {
	position: "absolute",
	transform: [
		{translateX: 16.5},
		{translateY: 21},
	],
	},
style60: {
	},
_message_square: {
	width: 44,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	flexShrink: 0,
	marginRight: 62,
	},
style62: {
	position: "absolute",
	transform: [
		{translateX: 5.5},
		{translateY: 5.25},
	],
	},
style63: {
	},
_plus_square: {
	width: 44,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	flexShrink: 0,
	},
style65: {
	position: "absolute",
	transform: [
		{translateX: 5.5},
		{translateY: 5.25},
	],
	},
style66: {
	},
style67: {
	position: "absolute",
	transform: [
		{translateX: 22},
		{translateY: 14},
	],
	},
style68: {
	},
style69: {
	position: "absolute",
	transform: [
		{translateX: 14.6666},
		{translateY: 21},
	],
	},
style70: {
	},
})

