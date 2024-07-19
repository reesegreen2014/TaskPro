export const getMotivationalQuote = () => {
    return fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => data.slip.advice)
      .catch(error => {
        console.error('Error fetching motivational quote:', error);
        return 'Stay motivated!';
      });
  };