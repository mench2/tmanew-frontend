// Базовый URL API
const API_URL = 'https://tmanew-backend-production.up.railway.app/api';

// Получение данных пользователя
export const getUserData = async (userId) => {
  try {
    console.log('Запрос к API:', `${API_URL}/user/${userId}`);
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
    console.log('Отправка данных на API:', `${API_URL}/user/${userId}`, userData);
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