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
import {image_Rectangle_27_2_link} from './assets/imageLinks.js'
const Page_Home  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page9}    >
			<View style = {noneModeStyles._post}    >
				<View style = {noneModeStyles.style2}    >
					<View style = {noneModeStyles.style3}   >
						<Svg style={{height: 423, width: 428}} viewBox = "0 0 428 423">
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._user_icon}    >
					<View style = {noneModeStyles._Subtract}    >
					</View>
					<View style = {noneModeStyles._Rectangle_26}    >
					</View>
				</View>
				<Text style = {noneModeStyles._Aliyan_Ali}   >
					Aliyan Ali
				</Text>
				<Text style = {noneModeStyles._Need_Medical_assistance_for_my_neigbour_s_wife__He_is_poor_man_and_earns_through_only_labor_and_unable_to_pay_medical_expenses}   >
					Need Medical assistance for my neigbour’s wife. He is poor man and earns through only labor and unable to pay medical expenses
				</Text>
				<View style = {noneModeStyles._Rectangle_27_container}    >
					<View style = {noneModeStyles._Rectangle_27}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_27_link}}/>
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_28}    >
				</View>
				<View style = {noneModeStyles._Rectangle_30}    >
				</View>
				<Text style = {noneModeStyles._Chat}   >
					Chat
				</Text>
				<Text style = {noneModeStyles._Donate}   >
					Donate
				</Text>
				<View style = {noneModeStyles._Chat_2}    >
					<View style = {noneModeStyles._Rectangle_1}    >
					</View>
					<View style = {noneModeStyles.style17}    >
						<View style = {noneModeStyles.style18}   >
							<Svg style={{height: 2, width: 11}} viewBox = "0 0 11 2">
								<Path fill = {"none"}   stroke = {"white"} strokeWidth = {2} d = "M1 1L10 1"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style19}    >
						<View style = {noneModeStyles.style20}   >
							<Svg style={{height: 2, width: 7}} viewBox = "0 0 7 2">
								<Path fill = {"none"}   stroke = {"white"} strokeWidth = {2} d = "M1 1H5.5"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Add_round_fill}    >
					<View style = {noneModeStyles._Subtract_2}    >
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._post_2}    >
				<View style = {noneModeStyles.style24}    >
					<View style = {noneModeStyles.style25}   >
						<Svg style={{height: 423, width: 428}} viewBox = "0 0 428 423">
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._user_icon_2}    >
					<View style = {noneModeStyles._Subtract_3}    >
					</View>
					<View style = {noneModeStyles._Rectangle_26_2}    >
					</View>
				</View>
				<Text style = {noneModeStyles._Aliyan_Ali_2}   >
					Aliyan Ali
				</Text>
				<Text style = {noneModeStyles._Need_Medical_assistance_for_my_neigbour_s_wife__He_is_poor_man_and_earns_through_only_labor_and_unable_to_pay_medical_expenses_2}   >
					Need Medical assistance for my neigbour’s wife. He is poor man and earns through only labor and unable to pay medical expenses
				</Text>
				<View style = {noneModeStyles._Rectangle_27_container_2}    >
					<View style = {noneModeStyles._Rectangle_27_2}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_27_2_link}}/>
					</View>
				</View>
				<View style = {noneModeStyles._Chat_Button}    >
					<View style = {noneModeStyles._Rectangle_28_2}    >
					</View>
					<Text style = {noneModeStyles._Chat_3}   >
						Chat
					</Text>
					<View style = {noneModeStyles._Chat_4}    >
						<View style = {noneModeStyles._Rectangle_1_2}    >
						</View>
						<View style = {noneModeStyles.style38}    >
							<View style = {noneModeStyles.style39}   >
								<Svg style={{height: 2, width: 11}} viewBox = "0 0 11 2">
									<Path fill = {"none"}   stroke = {"white"} strokeWidth = {2} d = "M1 1L10 1"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style40}    >
							<View style = {noneModeStyles.style41}   >
								<Svg style={{height: 2, width: 7}} viewBox = "0 0 7 2">
									<Path fill = {"none"}   stroke = {"white"} strokeWidth = {2} d = "M1 1H5.5"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Donate_Button}    >
					<View style = {noneModeStyles._Rectangle_30_2}    >
					</View>
					<Text style = {noneModeStyles._Donate_2}   >
						Donate
					</Text>
					<View style = {noneModeStyles._Add_round_fill_2}    >
						<View style = {noneModeStyles._Subtract_4}    >
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._bottom_menu}    >
				<View style = {noneModeStyles._Rectangle_38}    >
				</View>
				<View style = {noneModeStyles._Frame_4}    >
					<View style = {noneModeStyles._home}    >
						<View style = {noneModeStyles.style51}    >
							<View style = {noneModeStyles.style52}   >
								<Svg style={{height: 39, width: 37}} viewBox = "0 0 37 39">
									<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M2 14.25L18.5 2L35 14.25V33.5C35 34.4283 34.6137 35.3185 33.9261 35.9749C33.2384 36.6313 32.3058 37 31.3333 37H5.66667C4.69421 37 3.76158 36.6313 3.07394 35.9749C2.38631 35.3185 2 34.4283 2 33.5V14.25Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style53}    >
							<View style = {noneModeStyles.style54}   >
								<Svg style={{height: 22, width: 15}} viewBox = "0 0 15 22">
									<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M2 19.5V2H13V19.5"/>
								</Svg>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._message_square}    >
						<View style = {noneModeStyles.style56}    >
							<View style = {noneModeStyles.style57}   >
								<Svg style={{height: 36, width: 37}} viewBox = "0 0 37 36">
									<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M35 23C35 23.9283 34.6137 24.8185 33.9261 25.4749C33.2384 26.1313 32.3058 26.5 31.3333 26.5H9.33333L2 33.5V5.5C2 4.57174 2.38631 3.6815 3.07394 3.02513C3.76158 2.36875 4.69421 2 5.66667 2H31.3333C32.3058 2 33.2384 2.36875 33.9261 3.02513C34.6137 3.6815 35 4.57174 35 5.5V23Z"/>
								</Svg>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._plus_square}    >
						<View style = {noneModeStyles.style59}    >
							<View style = {noneModeStyles.style60}   >
								<Svg style={{height: 36, width: 37}} viewBox = "0 0 37 36">
									<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M31.3333 2H5.66667C3.64162 2 2 3.567 2 5.5V30C2 31.933 3.64162 33.5 5.66667 33.5H31.3333C33.3584 33.5 35 31.933 35 30V5.5C35 3.567 33.3584 2 31.3333 2Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style61}    >
							<View style = {noneModeStyles.style62}   >
								<Svg style={{height: 18, width: 4}} viewBox = "0 0 4 18">
									<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M2 2V16"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style63}    >
							<View style = {noneModeStyles.style64}   >
								<Svg style={{height: 4, width: 19}} viewBox = "0 0 19 4">
									<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M2 2H16.6667"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._top_menu}    >
				<View style = {noneModeStyles.style66}    >
					<View style = {noneModeStyles.style67}   >
						<Svg style={{height: 75, width: 428}} viewBox = "0 0 428 75">
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._User_fill}    >
					<View style = {noneModeStyles.style69}    >
						<View style = {noneModeStyles.style70}   >
							<Svg style={{height: 15, width: 38}} viewBox = "0 0 38 15">
								<Path fill = {"#3CB371"}     d = "M37.2235 11.9896C37.8129 11.8644 38.1636 11.2514 37.9236 10.6987C36.6483 7.7618 34.3086 5.17782 31.183 3.27724C27.6879 1.15197 23.4055 1.29016e-06 19 0C14.5945 -1.29016e-06 10.3121 1.15196 6.81703 3.27723C3.69144 5.17781 1.35166 7.76179 0.076393 10.6986C-0.163633 11.2514 0.187045 11.8644 0.77653 11.9896L10.6342 14.0828C16.1499 15.2539 21.8501 15.2539 27.3658 14.0828L37.2235 11.9896Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._Ellipse_46}    >
					</View>
				</View>
				<View style = {noneModeStyles._align_right}    >
					<View style = {noneModeStyles.style73}    >
						<View style = {noneModeStyles.style74}   >
							<Svg style={{height: 4, width: 38}} viewBox = "0 0 38 4">
								<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M35.8333 2H2.00001"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style75}    >
						<View style = {noneModeStyles.style76}   >
							<Svg style={{height: 4, width: 48}} viewBox = "0 0 48 4">
								<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M45.5 2H2"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style77}    >
						<View style = {noneModeStyles.style78}   >
							<Svg style={{height: 4, width: 48}} viewBox = "0 0 48 4">
								<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M45.5 2H2"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style79}    >
						<View style = {noneModeStyles.style80}   >
							<Svg style={{height: 4, width: 38}} viewBox = "0 0 38 4">
								<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M35.8333 2H2.00001"/>
							</Svg>
						</View>
					</View>
				</View>
				<Text style = {noneModeStyles._Kudos}   >
					Kudos
				</Text>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_Home

const noneModeStyles = StyleSheet.create({
_page9: {
	height: 926,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_post: {
	width: 428,
	height: 423,
	position: "absolute",
	left: 0,
	top: 501,
	},
style2: {
	width: 428,
	height: 423,
	position: "absolute",
	left: 0,
	top: 0,
	},
style3: {
	},
_user_icon: {
	width: 65,
	height: 62,
	position: "absolute",
	left: 9,
	top: 29,
	},
_Subtract: {
	width: 54.1667,
	height: 51.6667,
	position: "absolute",
	left: 5.41666,
	top: 5.16675,
	},
_Rectangle_26: {
	width: 54.1667,
	height: 51.6667,
	position: "absolute",
	transform: [
		{translateX: 5.41669},
		{translateY: 5.16675},
	],
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(255, 255, 255)",
	borderRadius: 56,
	},
_Aliyan_Ali: {
	width: 85,
	height: 21,
	position: "absolute",
	left: 82,
	top: 29,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "700",
	lineHeight: 21.0938,
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_Need_Medical_assistance_for_my_neigbour_s_wife__He_is_poor_man_and_earns_through_only_labor_and_unable_to_pay_medical_expenses: {
	width: 307,
	height: 94,
	position: "absolute",
	left: 82,
	top: 59,
	color: "rgba(39, 59, 74, 0.57)",
	fontSize: 18,
	fontWeight: "500",
	lineHeight: 21.0938,
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_Rectangle_27_container: {
	width: 323,
	height: 190,
	position: "absolute",
	left: 82,
	top: 153,
	},
_Rectangle_27: {
	width: "100%",
	height: "100%",
	borderRadius: 6,
	},
_Rectangle_28: {
	width: 121,
	height: 39,
	backgroundColor: "rgb(60, 179, 113)",
	position: "absolute",
	left: 82,
	top: 363,
	borderRadius: 6,
	},
_Rectangle_30: {
	width: 148,
	height: 39,
	backgroundColor: "rgb(60, 179, 113)",
	position: "absolute",
	left: 257,
	top: 363,
	borderRadius: 6,
	},
_Chat: {
	width: 65,
	height: 30,
	position: "absolute",
	left: 142,
	top: 372,
	color: "rgb(229, 229, 229)",
	fontSize: 24,
	fontWeight: "700",
	lineHeight: 28.125,
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_Donate: {
	width: 91,
	height: 30,
	position: "absolute",
	left: 314,
	top: 372,
	color: "rgb(229, 229, 229)",
	fontSize: 24,
	fontWeight: "700",
	lineHeight: 28.125,
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_Chat_2: {
	width: 36,
	height: 33,
	position: "absolute",
	left: 88,
	top: 366,
	},
_Rectangle_1: {
	width: 24,
	height: 22,
	position: "absolute",
	transform: [
		{translateX: 6},
		{translateY: 5.5},
	],
	borderTopWidth: 2,
	borderRightWidth: 2,
	borderBottomWidth: 2,
	borderLeftWidth: 2,
	borderStyle: "solid",
	borderColor: "rgb(255, 255, 255)",
	borderRadius: 9,
	},
style17: {
	position: "absolute",
	transform: [
		{translateX: 13.5},
		{translateY: 15.125},
	],
	},
style18: {
	},
style19: {
	position: "absolute",
	transform: [
		{translateX: 18},
		{translateY: 20.625},
	],
	},
style20: {
	},
_Add_round_fill: {
	width: 24,
	height: 24,
	position: "absolute",
	left: 274,
	top: 370,
	},
_Subtract_2: {
	width: 18,
	height: 18,
	position: "absolute",
	left: 3,
	top: 3,
	},
_post_2: {
	width: 428,
	height: 423,
	position: "absolute",
	left: 0,
	top: 78,
	},
style24: {
	width: 428,
	height: 423,
	position: "absolute",
	left: 0,
	top: 0,
	},
style25: {
	},
_user_icon_2: {
	width: 65,
	height: 62,
	position: "absolute",
	left: 9,
	top: 29,
	},
_Subtract_3: {
	width: 54.1667,
	height: 51.6667,
	position: "absolute",
	transform: [
		{translateX: -475.583},
		{translateY: -3200.83},
	],
	},
_Rectangle_26_2: {
	width: 54.1667,
	height: 51.6667,
	position: "absolute",
	transform: [
		{translateX: -475.583},
		{translateY: -3200.83},
	],
	borderTopWidth: 1,
	borderRightWidth: 1,
	borderBottomWidth: 1,
	borderLeftWidth: 1,
	borderStyle: "solid",
	borderColor: "rgb(255, 255, 255)",
	borderRadius: 56,
	},
_Aliyan_Ali_2: {
	width: 85,
	height: 21,
	position: "absolute",
	left: 82,
	top: 29,
	color: "rgb(0, 0, 0)",
	fontSize: 18,
	fontWeight: "700",
	lineHeight: 21.0938,
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_Need_Medical_assistance_for_my_neigbour_s_wife__He_is_poor_man_and_earns_through_only_labor_and_unable_to_pay_medical_expenses_2: {
	width: 307,
	height: 94,
	position: "absolute",
	left: 82,
	top: 59,
	color: "rgba(39, 59, 74, 0.57)",
	fontSize: 18,
	fontWeight: "500",
	lineHeight: 21.0938,
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_Rectangle_27_container_2: {
	width: 323,
	height: 190,
	position: "absolute",
	left: 82,
	top: 153,
	},
_Rectangle_27_2: {
	width: "100%",
	height: "100%",
	borderRadius: 6,
	},
_Chat_Button: {
	width: 125,
	height: 39,
	position: "absolute",
	left: 82,
	top: 363,
	},
_Rectangle_28_2: {
	width: 121,
	height: 39,
	backgroundColor: "rgb(60, 179, 113)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 6,
	},
_Chat_3: {
	width: 65,
	height: 30,
	position: "absolute",
	left: 60,
	top: 9,
	color: "rgb(255, 255, 255)",
	fontSize: 24,
	fontWeight: "700",
	lineHeight: 28.125,
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_Chat_4: {
	width: 36,
	height: 33,
	position: "absolute",
	left: 6,
	top: 3,
	},
_Rectangle_1_2: {
	width: 24,
	height: 22,
	position: "absolute",
	transform: [
		{translateX: -396},
		{translateY: -2863.5},
	],
	borderTopWidth: 2,
	borderRightWidth: 2,
	borderBottomWidth: 2,
	borderLeftWidth: 2,
	borderStyle: "solid",
	borderColor: "rgb(255, 255, 255)",
	borderRadius: 9,
	},
style38: {
	position: "absolute",
	transform: [
		{translateX: 101.5},
		{translateY: 459.125},
	],
	},
style39: {
	},
style40: {
	position: "absolute",
	transform: [
		{translateX: 106},
		{translateY: 464.625},
	],
	},
style41: {
	},
_Donate_Button: {
	width: 148,
	height: 39,
	position: "absolute",
	left: 257,
	top: 363,
	},
_Rectangle_30_2: {
	width: 148,
	height: 39,
	backgroundColor: "rgb(60, 179, 113)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 6,
	},
_Donate_2: {
	width: 91,
	height: 30,
	position: "absolute",
	left: 57,
	top: 9,
	color: "rgb(229, 229, 229)",
	fontSize: 24,
	fontWeight: "700",
	lineHeight: 28.125,
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_Add_round_fill_2: {
	width: 24,
	height: 24,
	position: "absolute",
	left: 17,
	top: 7,
	},
_Subtract_4: {
	width: 18,
	height: 18,
	position: "absolute",
	transform: [
		{translateX: -213},
		{translateY: -2862},
	],
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
style51: {
	position: "absolute",
	transform: [
		{translateX: 5.5},
		{translateY: 3.5},
	],
	},
style52: {
	},
style53: {
	position: "absolute",
	transform: [
		{translateX: 16.5},
		{translateY: 21},
	],
	},
style54: {
	},
_message_square: {
	width: 44,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	flexShrink: 0,
	marginRight: 62,
	},
style56: {
	position: "absolute",
	transform: [
		{translateX: 5.5},
		{translateY: 5.25},
	],
	},
style57: {
	},
_plus_square: {
	width: 44,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	flexShrink: 0,
	},
style59: {
	position: "absolute",
	transform: [
		{translateX: 5.5},
		{translateY: 5.25},
	],
	},
style60: {
	},
style61: {
	position: "absolute",
	transform: [
		{translateX: 22},
		{translateY: 14},
	],
	},
style62: {
	},
style63: {
	position: "absolute",
	transform: [
		{translateX: 14.6667},
		{translateY: 21},
	],
	},
style64: {
	},
_top_menu: {
	width: 428,
	height: 75,
	position: "absolute",
	left: 0,
	top: 0,
	},
style66: {
	width: 428,
	height: 75,
	position: "absolute",
	left: 0,
	top: 0,
	},
style67: {
	},
_User_fill: {
	width: 53,
	height: 54,
	position: "absolute",
	left: 16,
	top: 5,
	},
style69: {
	position: "absolute",
	transform: [
		{translateX: 23.3022},
		{translateY: 38.75},
	],
	},
style70: {
	},
_Ellipse_46: {
	width: 22.0833,
	height: 22.5,
	position: "absolute",
	transform: [
		{translateX: -458.542},
		{translateY: -3301.25},
	],
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
style73: {
	position: "absolute",
	transform: [
		{translateX: 16.9167},
		{translateY: 18.3333},
	],
	},
style74: {
	},
style75: {
	position: "absolute",
	transform: [
		{translateX: 7.25},
		{translateY: 11},
	],
	},
style76: {
	},
style77: {
	position: "absolute",
	transform: [
		{translateX: 7.25},
		{translateY: 25.6667},
	],
	},
style78: {
	},
style79: {
	position: "absolute",
	transform: [
		{translateX: 16.9167},
		{translateY: 33},
	],
	},
style80: {
	},
_Kudos: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 79,
	top: 23,
	color: "rgb(0, 0, 0)",
	fontSize: 24,
	fontWeight: "500",
	fontFamily: "Tajawal",
	textAlign: "left",
	},
})

