import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import RoundBtn from "@/components/RoundBtn";
import DropDown from "@/components/DropDown";
import { useBalanceStore } from "@/store/balanceStore";
import { defaultStyles } from "@/constants/Styles";
import { Ionicons } from "@expo/vector-icons";
import WidgetList from "@/components/SortableList/WidgetList";
import { useHeaderHeight } from "@react-navigation/elements";

const Page = () => {
  const headerHeight = useHeaderHeight();

  const { balance, runTransaction, transactions, clearTransactions } =
    useBalanceStore();

  const onAddMoney = () => {
    runTransaction({
      id: Math.random().toString(),
      amount: Math.floor(Math.random() * 100) * (Math.random() > 0.5 ? 1 : -1),
      date: new Date(),
      title: "Added money",
    });
  };

  return (
    <ScrollView
      style={{ backgroundColor: Colors.background }}
      contentContainerStyle={{
        paddingTop: headerHeight,
      }}
    >
      <View style={styles.container}>
        <View style={styles.account}>
          <View style={styles.row}>
            <Text style={styles.balance}>{balance()}</Text>
            <Text style={styles.currency}>₱</Text>
          </View>
          <TouchableOpacity
            style={[
              defaultStyles.pillButtonSmall,
              {
                backgroundColor: Colors.lightGray,
                alignSelf: "center",
                width: "50%",
                marginTop: 20,
              },
            ]}
          >
            <Text
              style={[defaultStyles.buttonTextSmall, { color: Colors.dark }]}
            >
              Accounts
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.actionRow}>
        <RoundBtn icon={"add"} text="Add money" onPress={onAddMoney} />
        <RoundBtn
          icon={"refresh"}
          text="Exchange"
          onPress={clearTransactions}
        />
        <RoundBtn icon={"list"} text="Details" />
        <DropDown />
      </View>

      <Text style={defaultStyles.sectionHeader}>Transactions</Text>

      <View style={styles.transactions}>
        {transactions.length === 0 && (
          <Text style={{ padding: 14, color: Colors.gray }}>
            No transactions yet
          </Text>
        )}

        {transactions.reverse().map((transaction) => (
          <View
            key={transaction.id}
            style={{ flexDirection: "row", alignItems: "center", gap: 16 }}
          >
            <View style={styles.circle}>
              <Ionicons
                name={transaction.amount > 0 ? "add" : "remove"}
                size={24}
                color={Colors.dark}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: "400" }}>{transaction.title}</Text>
              <Text style={{ color: Colors.gray, fontSize: 12 }}>
                {transaction.date.toLocaleString()}
              </Text>
            </View>
            <View
              style={
                transaction.amount > 0
                  ? styles.gainContainer
                  : styles.lossContainer
              }
            >
              <Text
                style={
                  transaction.amount > 0 ? styles.gainText : styles.lossText
                }
              >
                {transaction.amount}₱
              </Text>
            </View>
          </View>
        ))}
      </View>
      <Text style={defaultStyles.sectionHeader}>Widgets</Text>
      <WidgetList />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  account: {
    marginVertical: 20,
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    gap: 10,
  },
  balance: {
    fontSize: 50,
    fontWeight: "bold",
  },
  currency: {
    fontSize: 20,
    fontWeight: "500",
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  transactions: {
    marginHorizontal: 20,
    padding: 14,
    backgroundColor: "#fff",
    borderRadius: 16,
    gap: 20,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.lightGray,
    justifyContent: "center",
    alignItems: "center",
  },
  gainContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 28,
    borderRadius: 6,
    backgroundColor: "#dff7e1",
  },
  lossContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 28,
    borderRadius: 6,
    backgroundColor: "#f5d0d0",
  },
  gainText: { color: "green" },
  lossText: { color: "red" },
  container: {
    alignSelf: "center",
    alignContent: "center",
    marginVertical: 25,
    backgroundColor: "white",
    width: "85%",
    height: "17%",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Android shadow
  },
});

export default Page;
