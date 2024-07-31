// src/services/compileService.js
export const compileCode = async (code) => {
  try {
    const response = await fetch('http://localhost:8080/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ file: code }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    console.error('Error during compilation:', error);
    throw error;
  }
};
