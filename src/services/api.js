// Базовый URL API
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

// Получение данных пользователя
export const getUserData = async (userId) => {
  try {
    const response = await fetch(`${API_URL}/user/${userId}`);
    if (!response.ok) {
      throw new Error('Ошибка при получении данных пользователя');
    }
    return await response.json();
  } catch (error) {
    console.error('Ошибка при получении данных пользователя:', error);
    return null;
  }
};

// Сохранение данных пользователя
export const saveUserData = async (userId, userData) => {
  try {
    const response = await fetch(`${API_URL}/user/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    
    if (!response.ok) {
      throw new Error('Ошибка при сохранении данных пользователя');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Ошибка при сохранении данных пользователя:', error);
    return null;
  }
}; 