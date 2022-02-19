import AsyncStorage from '@react-native-community/async-storage';

const key = 'todos';
const todosStorage = {
  async get() {
    try {
      const rawTodos = await AsyncStorage.getItem(key);
      if (!rawTodos) {
        throw new Error('No saved todos');
      }
      const saveTodos = JSON.parse(rawTodos);
      return saveTodos;
    } catch (e) {
      console.error(e);
    }
  },

  async set(date) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(date));
    } catch (error) {
      console.log('Failed to save todos');
    }
  },
};
export default todosStorage;
