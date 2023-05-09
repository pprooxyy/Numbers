const { body } = document;
const numberContainer = document.querySelector('.number-container');
const infoContainer = document.querySelector('.info-container');

const fetchNumberInfo = async (url) => {
  const response = await fetch(url, {
    method: 'GET',
    redirect: 'follow',
  });
  if (!response.ok) {
    throw new Error(`API request failed with status ${response.status}`);
  }
  return response.text();
};

const postInfo = async (result, number) => {
  const backResponse = await fetch(`/get-info`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      result,
      number,
    }),
  });
};

body.addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log(e);
  const target = e.target;
  const data = new FormData(target);
  const number = data.get('number');

  try {
    let result;
    if (target.id === 'number') {
      result = await fetchNumberInfo(`http://numbersapi.com/${number}/trivia`);
    } else if (target.id === 'year') {
      result = await fetchNumberInfo(`http://numbersapi.com/${number}/year`);
    } else if (target.id === 'date') {
      result = await fetchNumberInfo(`http://numbersapi.com/${number}/date`);
    } else if (target.id === 'mathematical') {
      result = await fetchNumberInfo(`http://numbersapi.com/${number}/math`);
    }
    numberContainer.innerText = number;
    infoContainer.innerText = result;
    console.log(result);
    await postInfo(result, number);
  } catch (error) {
    console.log(error);
  }
});
