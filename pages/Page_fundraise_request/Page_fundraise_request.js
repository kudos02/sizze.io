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
const Page_fundraise_request  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page6}    >
			<View style = {noneModeStyles._title}    >
				<Text style = {noneModeStyles._Request_For_Fundraise}   >
					Request For Fundraise
				</Text>
			</View>
			<View style = {noneModeStyles._donation_required}    >
				<Text style = {noneModeStyles._Donation_Required}   >
					Donation Required
				</Text>
				<View style = {noneModeStyles._donation_required_2}    >
					<View style = {noneModeStyles._Rectangle_35}    >
					</View>
					<Text style = {noneModeStyles._rupees}   >
						rupees
					</Text>
				</View>
			</View>
			<View style = {noneModeStyles._purpose}    >
				<Text style = {noneModeStyles._Purpose}   >
					Purpose
				</Text>
				<View style = {noneModeStyles._purpose_2}    >
					<View style = {noneModeStyles._Rectangle_35_2}    >
					</View>
					<Text style = {noneModeStyles._two_to_three_words}   >
						two to three words
					</Text>
				</View>
			</View>
			<View style = {noneModeStyles._attach_images}    >
				<Text style = {noneModeStyles._Attach_Images}   >
					Attach Images
				</Text>
				<View style = {noneModeStyles._attach_images_2}    >
					<View style = {noneModeStyles._Rectangle_35_3}    >
					</View>
					<Text style = {noneModeStyles._at_least_one_image}   >
						at-least one image
					</Text>
					<View style = {noneModeStyles._paperclip}    >
						<View style = {noneModeStyles.style19}    >
							<View style = {noneModeStyles.style20}   >
								<Svg style={{height: 23, width: 22}} viewBox = "0 0 22 23">
									<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {2} d = "M20.7903 10.8459L11.4421 20.1941C10.2968 21.3394 8.74355 21.9827 7.12395 21.9827C5.50435 21.9827 3.95107 21.3394 2.80584 20.1941C1.66061 19.0489 1.01722 17.4956 1.01722 15.876C1.01722 14.2564 1.66061 12.7031 2.80584 11.5579L12.1541 2.20963C12.9176 1.44615 13.9531 1.01722 15.0329 1.01722C16.1126 1.01722 17.1481 1.44615 17.9116 2.20963C18.6751 2.97312 19.104 4.00864 19.104 5.08837C19.104 6.16811 18.6751 7.20362 17.9116 7.96711L8.55315 17.3154C8.1714 17.6971 7.65365 17.9116 7.11378 17.9116C6.57391 17.9116 6.05615 17.6971 5.67441 17.3154C5.29266 16.9336 5.0782 16.4159 5.0782 15.876C5.0782 15.3361 5.29266 14.8184 5.67441 14.4366L14.3106 5.8106"/>
								</Svg>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._description}    >
				<Text style = {noneModeStyles._Description}   >
					Description
				</Text>
				<View style = {noneModeStyles._Description_2}    >
					<View style = {noneModeStyles._Rectangle_35_4}    >
					</View>
					<Text style = {noneModeStyles._Write_description_here_minimum_50_words}   >
						Write description here minimum 50 words
					</Text>
				</View>
			</View>
			<View style = {noneModeStyles._post_button}    >
				<Text style = {noneModeStyles._Post}   >
					Post 
				</Text>
			</View>
			<View style = {noneModeStyles._top_menu}    >
				<View style = {noneModeStyles.style29}    >
					<View style = {noneModeStyles.style30}   >
						<Svg style={{height: 75, width: 428}} viewBox = "0 0 428 75">
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._align_right}    >
					<View style = {noneModeStyles.style32}    >
						<View style = {noneModeStyles.style33}   >
							<Svg style={{height: 4, width: 38}} viewBox = "0 0 38 4">
								<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M35.8333 2H2"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style34}    >
						<View style = {noneModeStyles.style35}   >
							<Svg style={{height: 4, width: 48}} viewBox = "0 0 48 4">
								<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M45.5 2H2"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style36}    >
						<View style = {noneModeStyles.style37}   >
							<Svg style={{height: 4, width: 48}} viewBox = "0 0 48 4">
								<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M45.5 2H2"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style38}    >
						<View style = {noneModeStyles.style39}   >
							<Svg style={{height: 4, width: 38}} viewBox = "0 0 38 4">
								<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M35.8333 2H2"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._arrow_left}    >
					<View style = {noneModeStyles.style41}    >
						<View style = {noneModeStyles.style42}   >
							<Svg style={{height: 4, width: 38}} viewBox = "0 0 38 4">
								<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M35.8333 2H2"/>
							</Svg>
						</View>
					</View>
					<View style = {noneModeStyles.style43}    >
						<View style = {noneModeStyles.style44}   >
							<Svg style={{height: 30, width: 21}} viewBox = "0 0 21 30">
								<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M18.992 27.7769L2.00796 14.8925L18.992 2.00808"/>
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
						<View style = {noneModeStyles.style49}    >
							<View style = {noneModeStyles.style50}   >
								<Svg style={{height: 39, width: 37}} viewBox = "0 0 37 39">
									<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M2 14.25L18.5 2L35 14.25V33.5C35 34.4283 34.6137 35.3185 33.9261 35.9749C33.2384 36.6313 32.3058 37 31.3333 37H5.66667C4.69421 37 3.76158 36.6313 3.07394 35.9749C2.38631 35.3185 2 34.4283 2 33.5V14.25Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style51}    >
							<View style = {noneModeStyles.style52}   >
								<Svg style={{height: 22, width: 15}} viewBox = "0 0 15 22">
									<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M2 19.5V2H13V19.5"/>
								</Svg>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._message_square}    >
						<View style = {noneModeStyles.style54}    >
							<View style = {noneModeStyles.style55}   >
								<Svg style={{height: 36, width: 37}} viewBox = "0 0 37 36">
									<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M35 23C35 23.9283 34.6137 24.8185 33.9261 25.4749C33.2384 26.1313 32.3058 26.5 31.3333 26.5H9.33333L2 33.5V5.5C2 4.57174 2.38631 3.6815 3.07394 3.02513C3.76158 2.36875 4.69421 2 5.66667 2H31.3333C32.3058 2 33.2384 2.36875 33.9261 3.02513C34.6137 3.6815 35 4.57174 35 5.5V23Z"/>
								</Svg>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._plus_square}    >
						<View style = {noneModeStyles.style57}    >
							<View style = {noneModeStyles.style58}   >
								<Svg style={{height: 36, width: 37}} viewBox = "0 0 37 36">
									<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M31.3333 2H5.66667C3.64162 2 2 3.567 2 5.5V30C2 31.933 3.64162 33.5 5.66667 33.5H31.3333C33.3584 33.5 35 31.933 35 30V5.5C35 3.567 33.3584 2 31.3333 2Z"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style59}    >
							<View style = {noneModeStyles.style60}   >
								<Svg style={{height: 18, width: 4}} viewBox = "0 0 4 18">
									<Path fill = {"none"}   stroke = {"#3CB371"} strokeWidth = {4} d = "M2 2V16"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles.style61}    >
							<View style = {noneModeStyles.style62}   >
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
export default Page_fundraise_request

const noneModeStyles = StyleSheet.create({
_page6: {
	height: 926,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_title: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "row",
	position: "absolute",
	left: 30,
	top: 94,
	paddingTop: 10,
	paddingRight: 10,
	paddingBottom: 10,
	paddingLeft: 10,
	},
_Request_For_Fundraise: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	color: "rgb(60, 179, 113)",
	fontSize: 36,
	fontWeight: "700",
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_donation_required: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	position: "absolute",
	left: 40,
	top: 187,
	},
_Donation_Required: {
	width: 230,
	height: 25,
	flexShrink: 0,
	marginBottom: 19,
	color: "rgb(0, 0, 0)",
	fontSize: 24,
	fontWeight: "700",
	lineHeight: 28.125,
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_donation_required_2: {
	width: 345,
	height: 50,
	flexShrink: 0,
	},
_Rectangle_35: {
	width: 345,
	height: 50,
	backgroundColor: "rgb(250, 249, 249)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 9,
	},
_rupees: {
	width: 259.571,
	height: 26,
	position: "absolute",
	left: 15.3334,
	top: 12,
	color: "rgba(0, 0, 0, 0.51)",
	fontSize: 24,
	fontWeight: "500",
	lineHeight: 28.125,
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_purpose: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	position: "absolute",
	left: 41,
	top: 300,
	},
_Purpose: {
	width: 97,
	height: 21,
	flexShrink: 0,
	marginBottom: 19,
	color: "rgb(0, 0, 0)",
	fontSize: 24,
	fontWeight: "700",
	lineHeight: 28.125,
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_purpose_2: {
	width: 345,
	height: 50,
	flexShrink: 0,
	},
_Rectangle_35_2: {
	width: 345,
	height: 50,
	backgroundColor: "rgb(250, 249, 249)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 9,
	},
_two_to_three_words: {
	width: 259.571,
	height: 26,
	position: "absolute",
	left: 15.3334,
	top: 12,
	color: "rgba(0, 0, 0, 0.51)",
	fontSize: 24,
	fontWeight: "500",
	lineHeight: 28.125,
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_attach_images: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	position: "absolute",
	left: 40,
	top: 665,
	},
_Attach_Images: {
	width: 174,
	height: 21,
	flexShrink: 0,
	marginBottom: 19,
	color: "rgb(0, 0, 0)",
	fontSize: 24,
	fontWeight: "700",
	lineHeight: 28.125,
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_attach_images_2: {
	width: 345,
	height: 50,
	flexShrink: 0,
	},
_Rectangle_35_3: {
	width: 345,
	height: 50,
	backgroundColor: "rgb(250, 249, 249)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 9,
	},
_at_least_one_image: {
	width: 259.571,
	height: 26,
	position: "absolute",
	left: 15.3334,
	top: 12,
	color: "rgba(0, 0, 0, 0.51)",
	fontSize: 24,
	fontWeight: "500",
	lineHeight: 28.125,
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_paperclip: {
	width: 24,
	height: 24,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 288,
	top: 12,
	},
style19: {
	position: "absolute",
	transform: [
		{translateX: 2.00171},
		{translateY: 1.38782},
	],
	},
style20: {
	},
_description: {
	width: "auto",
	height: "auto",
	backgroundColor: "rgba(0, 0, 0, 0)",
	display: "flex",
	flexDirection: "column",
	position: "absolute",
	left: 40,
	top: 409,
	},
_Description: {
	width: 173,
	height: 24,
	flexShrink: 0,
	marginBottom: 19,
	color: "rgb(0, 0, 0)",
	fontSize: 24,
	fontWeight: "700",
	lineHeight: 28.125,
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_Description_2: {
	width: 345,
	height: 194,
	flexShrink: 0,
	},
_Rectangle_35_4: {
	width: 345,
	height: 194,
	backgroundColor: "rgb(250, 249, 249)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 9,
	},
_Write_description_here_minimum_50_words: {
	width: 259.571,
	height: 100.88,
	position: "absolute",
	left: 15,
	top: 15,
	color: "rgba(0, 0, 0, 0.51)",
	fontSize: 24,
	fontWeight: "500",
	lineHeight: 28.125,
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_post_button: {
	width: 161,
	height: 43,
	backgroundColor: "rgb(204, 210, 227)",
	position: "absolute",
	left: 127,
	top: 785,
	borderRadius: 51,
	},
_Post: {
	width: 45,
	height: 19,
	position: "absolute",
	left: 58,
	top: 12,
	color: "rgb(0, 0, 0)",
	fontSize: 24,
	fontWeight: "500",
	lineHeight: 28.125,
	fontFamily: "Tajawal",
	textAlign: "left",
	},
_top_menu: {
	width: 428,
	height: 75,
	position: "absolute",
	left: -1,
	top: 0,
	},
style29: {
	width: 428,
	height: 75,
	position: "absolute",
	left: 0,
	top: 0,
	},
style30: {
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
style32: {
	position: "absolute",
	transform: [
		{translateX: 16.9166},
		{translateY: 18.3334},
	],
	},
style33: {
	},
style34: {
	position: "absolute",
	transform: [
		{translateX: 7.25},
		{translateY: 11},
	],
	},
style35: {
	},
style36: {
	position: "absolute",
	transform: [
		{translateX: 7.25},
		{translateY: 25.6666},
	],
	},
style37: {
	},
style38: {
	position: "absolute",
	transform: [
		{translateX: 16.9166},
		{translateY: 33},
	],
	},
style39: {
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
style41: {
	position: "absolute",
	transform: [
		{translateX: 12.0834},
		{translateY: 22},
	],
	},
style42: {
	},
style43: {
	position: "absolute",
	transform: [
		{translateX: 12.0834},
		{translateY: 9.16663},
	],
	},
style44: {
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
style49: {
	position: "absolute",
	transform: [
		{translateX: 5.5},
		{translateY: 3.5},
	],
	},
style50: {
	},
style51: {
	position: "absolute",
	transform: [
		{translateX: 16.5},
		{translateY: 21},
	],
	},
style52: {
	},
_message_square: {
	width: 44,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	flexShrink: 0,
	marginRight: 62,
	},
style54: {
	position: "absolute",
	transform: [
		{translateX: 5.5},
		{translateY: 5.25},
	],
	},
style55: {
	},
_plus_square: {
	width: 44,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	flexShrink: 0,
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
style59: {
	position: "absolute",
	transform: [
		{translateX: 22},
		{translateY: 14},
	],
	},
style60: {
	},
style61: {
	position: "absolute",
	transform: [
		{translateX: 14.6666},
		{translateY: 21},
	],
	},
style62: {
	},
})

