import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet } from "react-native";
import BooksScreen from "./BooksScreen.native";
import QuatationScreen from "./QuotationScreen.native";

const Tab = createMaterialTopTabNavigator();

const Tabs = [
  {
    name: "3 Okunan",
    component: BooksScreen,
  },
  {
    name: "Alıntılar",
    component: QuatationScreen,
  },
];

const TopBar = () => {
  return (
    <Tab.Navigator
      style={styles.navigator}
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: "#000000",
        },
        tabBarStyle: {
          backgroundColor: "#F2F2F2",
        },
        tabBarContentContainerStyle: {
          flex: 1,
          height: "100%",
        },
      }}
    >
      {Tabs.map((tab) => {
        return (
          <Tab.Screen
            key="topbarScreen"
            name={tab.name}
            component={tab.component}
          />
        );
      })}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  navigator: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default TopBar;
