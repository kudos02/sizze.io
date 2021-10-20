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
const Page_Chat  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page8}    >
			<View style = {noneModeStyles._create_message}    >
				<View style = {noneModeStyles._Rectangle_31}    >
				</View>
				<View style = {noneModeStyles._Send_fill}    >
					<View style = {noneModeStyles._Subtract}    >
					</View>
				</View>
				<Text style = {noneModeStyles._Type_Here}   >
					Type Here
				</Text>
			</View>
			<View style = {noneModeStyles._message}    >
				<View style = {noneModeStyles._User_fill}    >
					<View style = {noneModeStyles.style8}    >
						<View style = {noneModeStyles.style9}   >
							<Svg style={{height: 15, width: 38}} viewBox = "0 0 38 15">
								<Path fill = {"#3CB371"}     d = "M37.2235 11.9896C37.8129 11.8644 38.1636 11.2514 37.9236 10.6987C36.6483 7.7618 34.3086 5.17782 31.183 3.27724C27.6879 1.15197 23.4055 1.29016e-06 19 0C14.5945 -1.29016e-06 10.3121 1.15196 6.81704 3.27723C3.69145 5.17781 1.35167 7.76179 0.0764057 10.6986C-0.16362 11.2514 0.187058 11.8644 0.776543 11.9896L10.6342 14.0827C16.1499 15.2539 21.8501 15.2539 27.3658 14.0828L37.2235 11.9896Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._Ellipse_46}    >
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_32}    >
				</View>
				<Text style = {noneModeStyles._Assalam_o_Alaikum}   >
					Assalam o Alaikum{'\n'}
				</Text>
			</View>
			<View style = {noneModeStyles._message_2}    >
				<View style = {noneModeStyles._User_fill_2}    >
					<View style = {noneModeStyles.style15}    >
						<View style = {noneModeStyles.style16}   >
							<Svg style={{height: 15, width: 38}} viewBox = "0 0 38 15">
								<Path fill = {"#3CB371"}     d = "M37.2235 11.9896C37.8129 11.8644 38.1636 11.2514 37.9236 10.6987C36.6483 7.7618 34.3086 5.17782 31.183 3.27724C27.6879 1.15197 23.4055 1.29016e-06 19 0C14.5945 -1.29016e-06 10.3121 1.15196 6.81703 3.27723C3.69144 5.17781 1.35166 7.76179 0.076393 10.6986C-0.163633 11.2514 0.187045 11.8644 0.77653 11.9896L10.6342 14.0828C16.1499 15.2539 21.8501 15.2539 27.3658 14.0828L37.2235 11.9896Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._Ellipse_46_2}    >
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_34}    >
				</View>
				<Text style = {noneModeStyles._Wa_Alaikum_Salam}   >
					Wa Alaikum Salam
				</Text>
			</View>
			<View style = {noneModeStyles._message_3}    >
				<View style = {noneModeStyles._User_fill_3}    >
					<View style = {noneModeStyles.style22}    >
						<View style = {noneModeStyles.style23}   >
							<Svg style={{height: 15, width: 38}} viewBox = "0 0 38 15">
								<Path fill = {"#3CB371"}     d = "M37.2235 11.9896C37.8129 11.8644 38.1636 11.2514 37.9236 10.6987C36.6483 7.7618 34.3086 5.17782 31.183 3.27724C27.6879 1.15197 23.4055 1.29016e-06 19 0C14.5945 -1.29016e-06 10.3121 1.15196 6.81704 3.27723C3.69145 5.17781 1.35167 7.76179 0.0764057 10.6986C-0.16362 11.2514 0.187058 11.8644 0.776543 11.9896L10.6342 14.0827C16.1499 15.2539 21.8501 15.2539 27.3658 14.0828L37.2235 11.9896Z"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles._Ellipse_46_3}    >
					</View>
				</View>
				<View style = {noneModeStyles._Rectangle_33}    >
				</View>
				<Text style = {noneModeStyles._I_want_to_donate}   >
					I want to donate
				</Text>
			</View>
			<View style = {noneModeStyles._top_menu}    >
				<View style = {noneModeStyles.style28}    >
					<View style = {noneModeStyles.style29}   >
						<Svg style={{height: 75, width: 428}} viewBox = "0 0 428 75">
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._align_right}    >
					<View style = {noneModeStyles.style31}    >
						<View style = {noneModeStyles.style32}   >
							<Svg style={{height: 4, width: 38}} viewBox = "0 0 38 4">
								<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M35.8333 2H2"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style33}    >
						<View style = {noneModeStyles.style34}   >
							<Svg style={{height: 4, width: 48}} viewBox = "0 0 48 4">
								<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M45.5 2H2"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style35}    >
						<View style = {noneModeStyles.style36}   >
							<Svg style={{height: 4, width: 48}} viewBox = "0 0 48 4">
								<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M45.5 2H2"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style37}    >
						<View style = {noneModeStyles.style38}   >
							<Svg style={{height: 4, width: 38}} viewBox = "0 0 38 4">
								<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M35.8333 2H2"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._arrow_left}    >
					<View style = {noneModeStyles.style40}    >
						<View style = {noneModeStyles.style41}   >
							<Svg style={{height: 4, width: 38}} viewBox = "0 0 38 4">
								<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M35.8333 2H2"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style42}    >
						<View style = {noneModeStyles.style43}   >
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
						<View style = {noneModeStyles.style48}    >
							<View style = {noneModeStyles.style49}   >
								<Svg style={{height: 39, width: 37}} viewBox = "0 0 37 39">
									<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M2 14.25L18.5 2L35 14.25V33.5C35 34.4283 34.6137 35.3185 33.9261 35.9749C33.2384 36.6313 32.3058 37 31.3333 37H5.66667C4.69421 37 3.76158 36.6313 3.07394 35.9749C2.38631 35.3185 2 34.4283 2 33.5V14.25Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style50}    >
							<View style = {noneModeStyles.style51}   >
								<Svg style={{height: 22, width: 15}} viewBox = "0 0 15 22">
									<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M2 19.5V2H13V19.5"/>
								</Svg>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._message_square}    >
						<View style = {noneModeStyles.style53}    >
							<View style = {noneModeStyles.style54}   >
								<Svg style={{height: 36, width: 37}} viewBox = "0 0 37 36">
									<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M35 23C35 23.9283 34.6137 24.8185 33.9261 25.4749C33.2384 26.1313 32.3058 26.5 31.3333 26.5H9.33333L2 33.5V5.5C2 4.57174 2.38631 3.6815 3.07394 3.02513C3.76158 2.36875 4.69421 2 5.66667 2H31.3333C32.3058 2 33.2384 2.36875 33.9261 3.02513C34.6137 3.6815 35 4.57174 35 5.5V23Z"/>
								</Svg>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._plus_square}    >
						<View style = {noneModeStyles.style56}    >
							<View style = {noneModeStyles.style57}   >
								<Svg style={{height: 36, width: 37}} viewBox = "0 0 37 36">
									<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M31.3333 2H5.66667C3.64162 2 2 3.567 2 5.5V30C2 31.933 3.64162 33.5 5.66667 33.5H31.3333C33.3584 33.5 35 31.933 35 30V5.5C35 3.567 33.3584 2 31.3333 2Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style58}    >
							<View style = {noneModeStyles.style59}   >
								<Svg style={{height: 18, width: 4}} viewBox = "0 0 4 18">
									<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M2 2V16"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style60}    >
							<View style = {noneModeStyles.style61}   >
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
export default Page_Chat

const noneModeStyles = StyleSheet.create({
_page8: {
	height: 926,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_create_message: {
	width: 396,
	height: 64,
	position: "absolute",
	left: 19,
	top: 770,
	},
_Rectangle_31: {
	width: 320,
	height: 64,
	backgroundColor: "rgba(196, 196, 196, 0.57)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 39,
	},
_Send_fill: {
	width: 64,
	height: 63,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 332,
	top: 0,
	},
_Subtract: {
	width: 45.1271,
	height: 44.4807,
	position: "absolute",
	transform: [
		{translateX: 340.541},
		{translateY: -3664.85},
	],
	},
_Type_Here: {
	width: 121,
	height: 26,
	position: "absolute",
	left: 30,
	top: 21,
	color: "rgba(0, 0, 0, 0.51)",
	fontSize: 24,
	fontWeight: "500",
	lineHeight: 28.125,
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_message: {
	width: 305,
	height: 54,
	position: "absolute",
	left: 9,
	top: 101,
	},
_User_fill: {
	width: 53,
	height: 54,
	position: "absolute",
	left: 0,
	top: 0,
	},
style8: {
	position: "absolute",
	transform: [
		{translateX: 7.30222},
		{translateY: 33.75},
	],
	},
style9: {
	},
_Ellipse_46: {
	width: 22.0833,
	height: 22.5,
	position: "absolute",
	transform: [
		{translateX: 15.4583},
		{translateY: 6.75},
	],
	},
_Rectangle_32: {
	width: 215,
	height: 46,
	backgroundColor: "rgb(196, 196, 196)",
	position: "absolute",
	left: 64,
	top: 4,
	},
_Assalam_o_Alaikum: {
	width: 222,
	height: 34,
	position: "absolute",
	left: 83,
	top: 16,
	color: "rgb(0, 0, 0)",
	fontSize: 24,
	fontWeight: "400",
	lineHeight: 28.125,
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_message_2: {
	width: 281,
	height: 54,
	position: "absolute",
	left: 125,
	top: 179,
	},
_User_fill_2: {
	width: 53,
	height: 54,
	position: "absolute",
	left: 228,
	top: 0,
	},
style15: {
	position: "absolute",
	transform: [
		{translateX: 7.30222},
		{translateY: 33.75},
	],
	},
style16: {
	},
_Ellipse_46_2: {
	width: 22.0833,
	height: 22.5,
	position: "absolute",
	transform: [
		{translateX: 15.4583},
		{translateY: 6.75},
	],
	},
_Rectangle_34: {
	width: 214,
	height: 46,
	backgroundColor: "rgb(196, 196, 196)",
	position: "absolute",
	left: 0,
	top: 8,
	},
_Wa_Alaikum_Salam: {
	width: 199,
	height: 22,
	position: "absolute",
	left: 12,
	top: 20,
	color: "rgb(0, 0, 0)",
	fontSize: 24,
	fontWeight: "400",
	lineHeight: 28.125,
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_message_3: {
	width: 279,
	height: 54,
	position: "absolute",
	left: 9,
	top: 261,
	},
_User_fill_3: {
	width: 53,
	height: 54,
	position: "absolute",
	left: 0,
	top: 0,
	},
style22: {
	position: "absolute",
	transform: [
		{translateX: 7.30222},
		{translateY: 33.75},
	],
	},
style23: {
	},
_Ellipse_46_3: {
	width: 22.0833,
	height: 22.5,
	position: "absolute",
	transform: [
		{translateX: 15.4583},
		{translateY: 6.75},
	],
	},
_Rectangle_33: {
	width: 215,
	height: 46,
	backgroundColor: "rgb(196, 196, 196)",
	position: "absolute",
	left: 64,
	top: 6,
	},
_I_want_to_donate: {
	width: 179,
	height: 24,
	position: "absolute",
	left: 86,
	top: 18,
	color: "rgb(0, 0, 0)",
	fontSize: 24,
	fontWeight: "400",
	lineHeight: 28.125,
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_top_menu: {
	width: 428,
	height: 75,
	position: "absolute",
	left: 0,
	top: 2,
	},
style28: {
	width: 428,
	height: 75,
	position: "absolute",
	left: 0,
	top: 0,
	},
style29: {
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
style31: {
	position: "absolute",
	transform: [
		{translateX: 16.9167},
		{translateY: 18.3335},
	],
	},
style32: {
	},
style33: {
	position: "absolute",
	transform: [
		{translateX: 7.25},
		{translateY: 11},
	],
	},
style34: {
	},
style35: {
	position: "absolute",
	transform: [
		{translateX: 7.25},
		{translateY: 25.6665},
	],
	},
style36: {
	},
style37: {
	position: "absolute",
	transform: [
		{translateX: 16.9167},
		{translateY: 33},
	],
	},
style38: {
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
style40: {
	position: "absolute",
	transform: [
		{translateX: 12.0833},
		{translateY: 22},
	],
	},
style41: {
	},
style42: {
	position: "absolute",
	transform: [
		{translateX: 12.0833},
		{translateY: 9.1665},
	],
	},
style43: {
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
style48: {
	position: "absolute",
	transform: [
		{translateX: 5.5},
		{translateY: 3.5},
	],
	},
style49: {
	},
style50: {
	position: "absolute",
	transform: [
		{translateX: 16.5},
		{translateY: 21},
	],
	},
style51: {
	},
_message_square: {
	width: 44,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	flexShrink: 0,
	marginRight: 62,
	},
style53: {
	position: "absolute",
	transform: [
		{translateX: 5.5},
		{translateY: 5.25},
	],
	},
style54: {
	},
_plus_square: {
	width: 44,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	flexShrink: 0,
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
style58: {
	position: "absolute",
	transform: [
		{translateX: 22},
		{translateY: 14},
	],
	},
style59: {
	},
style60: {
	position: "absolute",
	transform: [
		{translateX: 14.6667},
		{translateY: 21},
	],
	},
style61: {
	},
})

