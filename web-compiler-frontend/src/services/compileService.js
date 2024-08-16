export const compileCode = async (code) => {
  try {

    const response = await fetch('http://localhost:3001/compile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ file: code }),
    });

    return await response.json();
  } catch (error) {
    console.error('Error during compilation:', error);
    throw error;
  }
};
