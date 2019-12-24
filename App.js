import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { key: Math.random().toString(), value: goalTitle }
    ]);
  };

  const removeGoalHandler = goalKey => {
    console.log("key", goalKey);
    setCourseGoals(currentGoals => {
      return currentGoals.filter(currentGoal => currentGoal.key !== goalKey);
    });
  };

  return (
    <View style={styles.container}>
      <Button
        title="Add New Goal"
        onPress={() => setIsAddMode(currentAddMode => !currentAddMode)}
      />
      <GoalInput
        visible={isAddMode}
        onAddGoal={goalTitle => addGoalHandler(goalTitle)}
        onAddMode={() => setIsAddMode(currentAddMode => !currentAddMode)}
      />
      <FlatList
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            onDelete={() => removeGoalHandler(itemData.item.key)}
            title={itemData.item.value}
          ></GoalItem>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  }
});
