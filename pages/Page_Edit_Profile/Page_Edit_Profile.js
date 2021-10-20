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
const Page_Edit_Profile  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page3}    >
			<View style = {noneModeStyles._top_menu}    >
				<View style = {noneModeStyles.style2}    >
					<View style = {noneModeStyles.style3}   >
						<Svg style={{height: 75, width: 428}} viewBox = "0 0 428 75">
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._align_right}    >
					<View style = {noneModeStyles.style5}    >
						<View style = {noneModeStyles.style6}   >
							<Svg style={{height: 4, width: 38}} viewBox = "0 0 38 4">
								<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M35.8333 2H2"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style7}    >
						<View style = {noneModeStyles.style8}   >
							<Svg style={{height: 4, width: 48}} viewBox = "0 0 48 4">
								<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M45.5 2H2"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style9}    >
						<View style = {noneModeStyles.style10}   >
							<Svg style={{height: 4, width: 48}} viewBox = "0 0 48 4">
								<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M45.5 2H2"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style11}    >
						<View style = {noneModeStyles.style12}   >
							<Svg style={{height: 4, width: 38}} viewBox = "0 0 38 4">
								<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M35.8333 2H2"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._arrow_left}    >
					<View style = {noneModeStyles.style14}    >
						<View style = {noneModeStyles.style15}   >
							<Svg style={{height: 4, width: 38}} viewBox = "0 0 38 4">
								<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M35.8333 2H2"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style16}    >
						<View style = {noneModeStyles.style17}   >
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
						<View style = {noneModeStyles.style22}    >
							<View style = {noneModeStyles.style23}   >
								<Svg style={{height: 39, width: 37}} viewBox = "0 0 37 39">
									<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M2 14.25L18.5 2L35 14.25V33.5C35 34.4283 34.6137 35.3185 33.9261 35.9749C33.2384 36.6313 32.3058 37 31.3333 37H5.66667C4.69421 37 3.76158 36.6313 3.07394 35.9749C2.38631 35.3185 2 34.4283 2 33.5V14.25Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style24}    >
							<View style = {noneModeStyles.style25}   >
								<Svg style={{height: 22, width: 15}} viewBox = "0 0 15 22">
									<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M2 19.5V2H13V19.5"/>
								</Svg>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._message_square}    >
						<View style = {noneModeStyles.style27}    >
							<View style = {noneModeStyles.style28}   >
								<Svg style={{height: 36, width: 37}} viewBox = "0 0 37 36">
									<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M35 23C35 23.9283 34.6137 24.8185 33.9261 25.4749C33.2384 26.1313 32.3058 26.5 31.3333 26.5H9.33333L2 33.5V5.5C2 4.57174 2.38631 3.6815 3.07394 3.02513C3.76158 2.36875 4.69421 2 5.66667 2H31.3333C32.3058 2 33.2384 2.36875 33.9261 3.02513C34.6137 3.6815 35 4.57174 35 5.5V23Z"/>
								</Svg>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._plus_square}    >
						<View style = {noneModeStyles.style30}    >
							<View style = {noneModeStyles.style31}   >
								<Svg style={{height: 36, width: 37}} viewBox = "0 0 37 36">
									<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M31.3333 2H5.66667C3.64162 2 2 3.567 2 5.5V30C2 31.933 3.64162 33.5 5.66667 33.5H31.3333C33.3584 33.5 35 31.933 35 30V5.5C35 3.567 33.3584 2 31.3333 2Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style32}    >
							<View style = {noneModeStyles.style33}   >
								<Svg style={{height: 18, width: 4}} viewBox = "0 0 4 18">
									<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M2 2V16"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style34}    >
							<View style = {noneModeStyles.style35}   >
								<Svg style={{height: 4, width: 19}} viewBox = "0 0 19 4">
									<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M2 2H16.6667"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._profile_pic}    >
				<View style = {noneModeStyles._User_fill}    >
					<View style = {noneModeStyles.style38}    >
						<View style = {noneModeStyles.style39}   >
							<Svg style={{height: 31, width: 86}} viewBox = "0 0 86 31">
								<Path fill = {"#3CB371"}     d = "M85.19 23.2841C85.8097 23.169 86.1733 22.5188 85.9169 21.9431C83.1761 15.7877 77.7396 10.3631 70.3413 6.43005C62.4975 2.2602 52.8869 2.53134e-06 43 0C33.1132 -2.53133e-06 23.5026 2.26019 15.6588 6.43004C8.26046 10.3631 2.82395 15.7877 0.0830878 21.943C-0.173278 22.5188 0.190334 23.169 0.809983 23.284L35.6521 29.7521C40.5092 30.6537 45.4908 30.6537 50.3479 29.7521L85.19 23.2841Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._Ellipse_46}    >
					</View>
				</View>
				<Text style = {noneModeStyles._Add_or_update}   >
					Add or update
				</Text>
			</View>
			<View style = {noneModeStyles._name}    >
				<Text style = {noneModeStyles._Edit}   >
					Edit
				</Text>
				<Text style = {noneModeStyles._Name__Ailyan_Ali}   >
					Name: Ailyan Ali
				</Text>
			</View>
			<View style = {noneModeStyles._email}    >
				<Text style = {noneModeStyles._Edit_2}   >
					Edit
				</Text>
				<Text style = {noneModeStyles._Email__ali_gmail_com}   >
					Email: ali@gmail.com
				</Text>
			</View>
			<View style = {noneModeStyles._cnic}    >
				<Text style = {noneModeStyles._Edit_3}   >
					Edit
				</Text>
				<Text style = {noneModeStyles._CNIC__35101_4459561_5}   >
					CNIC: 35101-4459561-5
				</Text>
			</View>
			<View style = {noneModeStyles._pswrd}    >
				<Text style = {noneModeStyles._Edit_4}   >
					Edit
				</Text>
				<Text style = {noneModeStyles._Password_____________}   >
					Password: ***********
				</Text>
			</View>
			<View style = {noneModeStyles._update_btn}    >
				<View style = {noneModeStyles._Rectangle_37}    >
				</View>
				<Text style = {noneModeStyles._update}   >
					update
				</Text>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Edit_Profile

const noneModeStyles = StyleSheet.create({
_page3: {
	height: 926,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_top_menu: {
	width: 428,
	height: 75,
	position: "absolute",
	left: 0,
	top: 0,
	},
style2: {
	width: 428,
	height: 75,
	position: "absolute",
	left: 0,
	top: 0,
	},
style3: {
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
style5: {
	position: "absolute",
	transform: [
		{translateX: 16.9166},
		{translateY: 18.3335},
	],
	},
style6: {
	},
style7: {
	position: "absolute",
	transform: [
		{translateX: 7.25},
		{translateY: 11},
	],
	},
style8: {
	},
style9: {
	position: "absolute",
	transform: [
		{translateX: 7.25},
		{translateY: 25.6665},
	],
	},
style10: {
	},
style11: {
	position: "absolute",
	transform: [
		{translateX: 16.9166},
		{translateY: 33},
	],
	},
style12: {
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
style14: {
	position: "absolute",
	transform: [
		{translateX: 12.0833},
		{translateY: 22},
	],
	},
style15: {
	},
style16: {
	position: "absolute",
	transform: [
		{translateX: 12.0833},
		{translateY: 9.1665},
	],
	},
style17: {
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
style22: {
	position: "absolute",
	transform: [
		{translateX: 5.5},
		{translateY: 3.5},
	],
	},
style23: {
	},
style24: {
	position: "absolute",
	transform: [
		{translateX: 16.5},
		{translateY: 21},
	],
	},
style25: {
	},
_message_square: {
	width: 44,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	flexShrink: 0,
	marginRight: 62,
	},
style27: {
	position: "absolute",
	transform: [
		{translateX: 5.5},
		{translateY: 5.25},
	],
	},
style28: {
	},
_plus_square: {
	width: 44,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	flexShrink: 0,
	},
style30: {
	position: "absolute",
	transform: [
		{translateX: 5.5},
		{translateY: 5.25},
	],
	},
style31: {
	},
style32: {
	position: "absolute",
	transform: [
		{translateX: 22},
		{translateY: 14},
	],
	},
style33: {
	},
style34: {
	position: "absolute",
	transform: [
		{translateX: 14.6666},
		{translateY: 21},
	],
	},
style35: {
	},
_profile_pic: {
	width: 330,
	height: 106,
	position: "absolute",
	left: 54,
	top: 148,
	},
_User_fill: {
	width: 119,
	height: 106,
	position: "absolute",
	left: 0,
	top: 0,
	shadowOffset: {
		width: 0,
		height: 4
	},
	shadowColor: "rgba(0, 0, 0, 0.25)",
	shadowRadius: 4,
	},
style38: {
	position: "absolute",
	transform: [
		{translateX: 16.3956},
		{translateY: 66.25},
	],
	},
style39: {
	},
_Ellipse_46: {
	width: 49.5833,
	height: 44.1665,
	position: "absolute",
	transform: [
		{translateX: 34.7084},
		{translateY: 13.25},
	],
	},
_Add_or_update: {
	width: 147,
	height: 77,
	position: "absolute",
	left: 183,
	top: 13,
	color: "rgb(196, 196, 196)",
	fontSize: 24,
	fontWeight: "500",
	lineHeight: 32.52,
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_name: {
	width: 306,
	height: 33,
	position: "absolute",
	left: 54,
	top: 302,
	},
_Edit: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 265,
	top: 0,
	color: "rgb(196, 196, 196)",
	fontSize: 24,
	fontWeight: "500",
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_Name__Ailyan_Ali: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	top: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 24,
	fontWeight: "500",
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_email: {
	width: 306,
	height: 37,
	position: "absolute",
	left: 54,
	top: 387,
	},
_Edit_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 265,
	top: 4,
	color: "rgb(196, 196, 196)",
	fontSize: 24,
	fontWeight: "500",
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_Email__ali_gmail_com: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	top: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 24,
	fontWeight: "500",
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_cnic: {
	width: 306,
	height: 33,
	position: "absolute",
	left: 54,
	top: 472,
	},
_Edit_3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 265,
	top: 0,
	color: "rgb(196, 196, 196)",
	fontSize: 24,
	fontWeight: "500",
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_CNIC__35101_4459561_5: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	top: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 24,
	fontWeight: "500",
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_pswrd: {
	width: 306,
	height: 33,
	position: "absolute",
	left: 54,
	top: 557,
	},
_Edit_4: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 265,
	top: 0,
	color: "rgb(196, 196, 196)",
	fontSize: 24,
	fontWeight: "500",
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_Password_____________: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 0,
	top: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 24,
	fontWeight: "500",
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_update_btn: {
	width: 164,
	height: 62,
	position: "absolute",
	left: 132,
	top: 638,
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
_update: {
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
})

