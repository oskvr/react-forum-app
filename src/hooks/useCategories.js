import { FaAccusoft } from 'react-icons/fa';
import { useParams } from 'react-router';
import useSWR from 'swr';
import URL from '../api/apiEndpointConstants';
import fetcher from '../utils/fetcher';
const dummyObject = (title, description, color) => {
  return {
    threads: Array(Math.floor(Math.random() * 100)),
    _id: Math.random() * 1000,
    name: `{"title":"${title}", "description" : "${description}", "color": "${color}"}`,
    __v: 9,
  };
};
const staticTestData = [
  {
    threads: [
      '60538f7dfc9cd8001eef9404',
      '6056944cfc9cd8001eef945c',
      '60569e17fc9cd8001eef9463',
      '6057b852fc9cd8001eefa87a',
      '6057b9eefc9cd8001eefa87b',
      '605a88b0fc9cd8001eefa91c',
      '605d1b98fc9cd8001eefa9b9',
      '605f1d14fc9cd8001eefaa17',
    ],
    _id: '60538ee3fc9cd8001eef9402',
    name: `{"title":"Testkategori", "description": "En testkategori för att testa ett test", "color": "blue"}`,
    __v: 8,
  },
  {
    threads: [
      '6056959dfc9cd8001eef945d',
      '60569a4afc9cd8001eef945f',
      '60569adffc9cd8001eef9460',
      '60569b10fc9cd8001eef9461',
      '60569b7ffc9cd8001eef9462',
      '60579ba3fc9cd8001eef9494',
      '6058c152fc9cd8001eefa8cf',
      '60597d3afc9cd8001eefa8d9',
      '605dedf0fc9cd8001eefa9f4',
    ],
    _id: '60567f98fc9cd8001eef9448',
    name: `{"title":"Allmänt", "description": "Diskutera allt mellan himmel och jord", "color": "green"}`,
    __v: 9,
  },
  dummyObject('Generella diskussioner', 'Diskutera generella saker', 'purple'),
  dummyObject('Bilar', 'Diskutera generella saker', 'purple'),
  dummyObject('Ekonomi', 'Diskutera generella saker', 'orange'),
  dummyObject('Samhälle', 'Diskutera generella saker', 'pink'),
  dummyObject('Kultur', 'Diskutera generella saker', 'cyan'),
];
export function useCategories() {
  // const { data } = useSWR(URL.CATEGORIES, fetcher);
  const { categoryId } = useParams();
  const parsedData = staticTestData.map(category => {
    const { title, description, color } = JSON.parse(category.name);
    const newCategory = {
      threads: category.threads,
      _id: category._id,
      title,
      description,
      color,
      __v: category.__v,
    };
    return newCategory;
  });
  let current = categoryId
    ? parsedData.find(category => category._id === categoryId)
    : {};

  //TODO: if categoryId exists but is not valid it throws an exception now.
  // Temporary if fix - should return error message instead
  if (!current) current = {};
  return { current, categories: parsedData ?? [] };
}
