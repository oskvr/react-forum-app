const fetcher = async url => fetch(url).then(res => res.json());
export default fetcher;
