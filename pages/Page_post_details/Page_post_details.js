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
import {image_Rectangle_27_link} from './assets/imageLinks.js'
const Page_post_details  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page5}    >
			<View style = {noneModeStyles._Chat_Button}    >
				<View style = {noneModeStyles._Rectangle_28}    >
				</View>
				<Text style = {noneModeStyles._Chat}   >
					Chat
				</Text>
				<View style = {noneModeStyles._Chat_2}    >
					<View style = {noneModeStyles._Rectangle_1}    >
					</View>
					<View style = {noneModeStyles.style6}    >
						<View style = {noneModeStyles.style7}   >
							<Svg style={{height: 2, width: 15}} viewBox = "0 0 15 2">
								<Path fill = {"none"}   stroke = {"white"} strokeWidth = {2} d = "M1 1L13.384 1"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style8}    >
						<View style = {noneModeStyles.style9}   >
							<Svg style={{height: 2, width: 9}} viewBox = "0 0 9 2">
								<Path fill = {"none"}   stroke = {"white"} strokeWidth = {2} d = "M1 1H7.192"/>
							</Svg>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._description_section}    >
				<Text style = {noneModeStyles._Description}   >
					Description
				</Text>
				<Text style = {noneModeStyles._Need_Medical_assistance_for_my_neigbour_s_wife__He_is_poor_man_and_earns_through_only_labor_and_unable_to_pay_medical_expenses}   >
					Need Medical assistance for my neigbour’s wife. He is poor man and earns through only labor and unable to pay medical expenses
				</Text>
			</View>
			<View style = {noneModeStyles._image_section}    >
				<Text style = {noneModeStyles._Images}   >
					Images
				</Text>
				<View style = {noneModeStyles._Rectangle_27_container}    >
					<View style = {noneModeStyles._Rectangle_27}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_27_link}}/>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._donation_method}    >
				<Text style = {noneModeStyles._Donation_Method}   >
					Donation Method
				</Text>
				<Text style = {noneModeStyles._JazzCash___923099091509}   >
					JazzCash: +923099091509
				</Text>
				<Text style = {noneModeStyles._Easypaisa___923099091509}   >
					Easypaisa: +923099091509
				</Text>
				<Text style = {noneModeStyles._Habib_Bank_Ltd__BAHL_0000_0011_2345_6702}   >
					Habib Bank Ltd: 	BAHL 0000 0011 2345 6702
				</Text>
			</View>
			<View style = {noneModeStyles._Frame_3}    >
				<View style = {noneModeStyles._Frame_2}    >
					<View style = {noneModeStyles._User_fill}    >
						<View style = {noneModeStyles.style25}    >
							<View style = {noneModeStyles.style26}   >
								<Svg style={{height: 31, width: 86}} viewBox = "0 0 86 31">
									<Path fill = {"#3CB371"}     d = "M85.1901 23.2841C85.8097 23.169 86.1733 22.5188 85.917 21.9431C83.1761 15.7877 77.7396 10.3631 70.3413 6.43005C62.4975 2.2602 52.8869 2.53134e-06 43 0C33.1132 -2.53133e-06 23.5025 2.26019 15.6588 6.43004C8.26043 10.3631 2.82392 15.7877 0.0830572 21.9431C-0.173308 22.5188 0.190304 23.169 0.809953 23.2841L35.6521 29.7521C40.5092 30.6538 45.4908 30.6538 50.3479 29.7521L85.1901 23.2841Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._Ellipse_46}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Frame_1}    >
					<Text style = {noneModeStyles._Ailyan_Ali}   >
						Ailyan Ali
					</Text>
					<Text style = {noneModeStyles._Medical_Assistance}   >
						Medical Assistance
					</Text>
				</View>
			</View>
			<View style = {noneModeStyles._top_menu}    >
				<View style = {noneModeStyles.style32}    >
					<View style = {noneModeStyles.style33}   >
						<Svg style={{height: 75, width: 428}} viewBox = "0 0 428 75">
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._align_right}    >
					<View style = {noneModeStyles.style35}    >
						<View style = {noneModeStyles.style36}   >
							<Svg style={{height: 4, width: 38}} viewBox = "0 0 38 4">
								<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M35.8333 2H2"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style37}    >
						<View style = {noneModeStyles.style38}   >
							<Svg style={{height: 4, width: 48}} viewBox = "0 0 48 4">
								<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M45.5 2H2"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style39}    >
						<View style = {noneModeStyles.style40}   >
							<Svg style={{height: 4, width: 48}} viewBox = "0 0 48 4">
								<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M45.5 2H2"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style41}    >
						<View style = {noneModeStyles.style42}   >
							<Svg style={{height: 4, width: 38}} viewBox = "0 0 38 4">
								<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M35.8333 2H2"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._arrow_left}    >
					<View style = {noneModeStyles.style44}    >
						<View style = {noneModeStyles.style45}   >
							<Svg style={{height: 4, width: 38}} viewBox = "0 0 38 4">
								<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M35.8333 2H2"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style46}    >
						<View style = {noneModeStyles.style47}   >
							<Svg style={{height: 30, width: 21}} viewBox = "0 0 21 30">
								<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M18.9919 27.7767L2.00796 14.8924L18.9919 2.00796"/>
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
						<View style = {noneModeStyles.style52}    >
							<View style = {noneModeStyles.style53}   >
								<Svg style={{height: 39, width: 37}} viewBox = "0 0 37 39">
									<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M2 14.25L18.5 2L35 14.25V33.5C35 34.4283 34.6137 35.3185 33.9261 35.9749C33.2384 36.6313 32.3058 37 31.3333 37H5.66667C4.69421 37 3.76158 36.6313 3.07394 35.9749C2.38631 35.3185 2 34.4283 2 33.5V14.25Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style54}    >
							<View style = {noneModeStyles.style55}   >
								<Svg style={{height: 22, width: 15}} viewBox = "0 0 15 22">
									<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M2 19.5V2H13V19.5"/>
								</Svg>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._message_square}    >
						<View style = {noneModeStyles.style57}    >
							<View style = {noneModeStyles.style58}   >
								<Svg style={{height: 36, width: 37}} viewBox = "0 0 37 36">
									<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M35 23C35 23.9283 34.6137 24.8185 33.9261 25.4749C33.2384 26.1313 32.3058 26.5 31.3333 26.5H9.33333L2 33.5V5.5C2 4.57174 2.38631 3.6815 3.07394 3.02513C3.76158 2.36875 4.69421 2 5.66667 2H31.3333C32.3058 2 33.2384 2.36875 33.9261 3.02513C34.6137 3.6815 35 4.57174 35 5.5V23Z"/>
								</Svg>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._plus_square}    >
						<View style = {noneModeStyles.style60}    >
							<View style = {noneModeStyles.style61}   >
								<Svg style={{height: 36, width: 37}} viewBox = "0 0 37 36">
									<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M31.3333 2H5.66667C3.64162 2 2 3.567 2 5.5V30C2 31.933 3.64162 33.5 5.66667 33.5H31.3333C33.3584 33.5 35 31.933 35 30V5.5C35 3.567 33.3584 2 31.3333 2Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style62}    >
							<View style = {noneModeStyles.style63}   >
								<Svg style={{height: 18, width: 4}} viewBox = "0 0 4 18">
									<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M2 2V16"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style64}    >
							<View style = {noneModeStyles.style65}   >
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
export default Page_post_details

const noneModeStyles = StyleSheet.create({
_page5: {
	height: 926,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_Chat_Button: {
	width: 172,
	height: 49,
	position: "absolute",
	left: 225,
	top: 781,
	},
_Rectangle_28: {
	width: 166.496,
	height: 49,
	backgroundColor: "rgb(60, 179, 113)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 6,
	},
_Chat: {
	width: 89.44,
	height: 37.6924,
	position: "absolute",
	left: 82.56,
	top: 11.3076,
	color: "rgb(255, 255, 255)",
	fontSize: 24,
	fontWeight: "700",
	lineHeight: 28.125,
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_Chat_2: {
	width: 49.536,
	height: 41.4614,
	position: "absolute",
	left: 8.25616,
	top: 3.76904,
	},
_Rectangle_1: {
	width: 33.024,
	height: 27.6411,
	position: "absolute",
	transform: [
		{translateX: 8.25598},
		{translateY: 6.91016},
	],
	borderTopWidth: 2,
	borderRightWidth: 2,
	borderBottomWidth: 2,
	borderLeftWidth: 2,
	borderStyle: "solid",
	borderColor: "rgb(255, 255, 255)",
	borderRadius: 9,
	},
style6: {
	position: "absolute",
	transform: [
		{translateX: 18.576},
		{translateY: 19.0032},
	],
	},
style7: {
	},
style8: {
	position: "absolute",
	transform: [
		{translateX: 24.768},
		{translateY: 25.9133},
	],
	},
style9: {
	},
_description_section: {
	width: 369,
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	position: "absolute",
	left: 23,
	top: 231,
	},
_Description: {
	width: 173,
	height: 24,
	flexShrink: 0,
	marginBottom: 8,
	color: "rgb(0, 0, 0)",
	fontSize: 24,
	fontWeight: "700",
	lineHeight: 28.125,
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_Need_Medical_assistance_for_my_neigbour_s_wife__He_is_poor_man_and_earns_through_only_labor_and_unable_to_pay_medical_expenses: {
	width: 342,
	height: 118,
	flexShrink: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 24,
	fontWeight: "500",
	lineHeight: 28.125,
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_image_section: {
	width: 369,
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	position: "absolute",
	left: 23,
	top: 398,
	},
_Images: {
	width: 174,
	height: 21,
	flexShrink: 0,
	marginBottom: 8,
	color: "rgb(0, 0, 0)",
	fontSize: 24,
	fontWeight: "700",
	lineHeight: 28.125,
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_Rectangle_27_container: {
	width: 369,
	height: 200,
	flexShrink: 0,
	},
_Rectangle_27: {
	width: "100%",
	height: "100%",
	borderRadius: 6,
	},
_donation_method: {
	width: 369,
	height: 126,
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	position: "absolute",
	left: 23,
	top: 638,
	},
_Donation_Method: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	marginBottom: 8,
	color: "rgb(0, 0, 0)",
	fontSize: 24,
	fontWeight: "700",
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_JazzCash___923099091509: {
	width: 229,
	height: "auto",
	flexShrink: 0,
	marginBottom: 8,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "400",
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_Easypaisa___923099091509: {
	width: 229,
	height: "auto",
	flexShrink: 0,
	marginBottom: 8,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "400",
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_Habib_Bank_Ltd__BAHL_0000_0011_2345_6702: {
	width: "100%",
	height: "auto",
	flexShrink: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "400",
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_Frame_3: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	position: "absolute",
	left: 40,
	top: 90,
	},
_Frame_2: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	flexShrink: 0,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	},
_User_fill: {
	width: 119,
	height: 106,
	flexShrink: 0,
	shadowOffset: {
		width: 0,
		height: 4
	},
	shadowColor: "rgba(0, 0, 0, 0.25)",
	shadowRadius: 4,
	},
style25: {
	position: "absolute",
	transform: [
		{translateX: 16.3955},
		{translateY: 66.25},
	],
	},
style26: {
	},
_Ellipse_46: {
	width: 49.5833,
	height: 44.1667,
	position: "absolute",
	transform: [
		{translateX: 34.7083},
		{translateY: 13.25},
	],
	},
_Frame_1: {
	width: "auto",
	height: "100%",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	flexShrink: 0,
	paddingTop: 3,
	paddingRight: 3,
	paddingBottom: 3,
	paddingLeft: 3,
	},
_Ailyan_Ali: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	marginBottom: 3,
	color: "rgb(0, 0, 0)",
	fontSize: 36,
	fontWeight: "800",
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_Medical_Assistance: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	color: "rgb(0, 0, 0)",
	fontSize: 24,
	fontWeight: "400",
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
style32: {
	width: 428,
	height: 75,
	position: "absolute",
	left: 0,
	top: 0,
	},
style33: {
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
style35: {
	position: "absolute",
	transform: [
		{translateX: 16.9167},
		{translateY: 18.3333},
	],
	},
style36: {
	},
style37: {
	position: "absolute",
	transform: [
		{translateX: 7.25},
		{translateY: 11},
	],
	},
style38: {
	},
style39: {
	position: "absolute",
	transform: [
		{translateX: 7.25},
		{translateY: 25.6667},
	],
	},
style40: {
	},
style41: {
	position: "absolute",
	transform: [
		{translateX: 16.9167},
		{translateY: 33},
	],
	},
style42: {
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
style44: {
	position: "absolute",
	transform: [
		{translateX: 12.0833},
		{translateY: 22},
	],
	},
style45: {
	},
style46: {
	position: "absolute",
	transform: [
		{translateX: 12.0833},
		{translateY: 9.16675},
	],
	},
style47: {
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
style52: {
	position: "absolute",
	transform: [
		{translateX: 5.5},
		{translateY: 3.5},
	],
	},
style53: {
	},
style54: {
	position: "absolute",
	transform: [
		{translateX: 16.5},
		{translateY: 21},
	],
	},
style55: {
	},
_message_square: {
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
		{translateY: 5.25},
	],
	},
style58: {
	},
_plus_square: {
	width: 44,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	flexShrink: 0,
	},
style60: {
	position: "absolute",
	transform: [
		{translateX: 5.5},
		{translateY: 5.25},
	],
	},
style61: {
	},
style62: {
	position: "absolute",
	transform: [
		{translateX: 22},
		{translateY: 14},
	],
	},
style63: {
	},
style64: {
	position: "absolute",
	transform: [
		{translateX: 14.6667},
		{translateY: 21},
	],
	},
style65: {
	},
})

