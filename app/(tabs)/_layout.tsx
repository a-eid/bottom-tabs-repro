import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

import {
	createNativeBottomTabNavigator,
	type NativeBottomTabNavigationEventMap,
	type NativeBottomTabNavigationOptions,
} from "@bottom-tabs/react-navigation";

import type {
	ParamListBase,
	TabNavigationState,
} from "@react-navigation/native";
import { withLayoutContext } from "expo-router";

const { Navigator } = createNativeBottomTabNavigator();

export const Tabs = withLayoutContext<
	NativeBottomTabNavigationOptions,
	typeof Navigator,
	TabNavigationState<ParamListBase>,
	NativeBottomTabNavigationEventMap
>(Navigator);

export default function TabLayout() {
	return (
		<Tabs translucent hapticFeedbackEnabled labeled>
			<Tabs.Screen name="index" options={{ title: "Home" }} />
			<Tabs.Screen name="explore" options={{ title: "Explore" }} />
		</Tabs>
	);
}
