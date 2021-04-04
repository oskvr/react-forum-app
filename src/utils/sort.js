export function sortBy(array, key, order = 'asc') {
  const sorted = array.sort((a, b) => {
    switch (typeof b[key]) {
      case 'string':
        return a[key] > b[key] ? -1 : 0;
      case 'number':
        return a[key] - b[key];
      case 'object':
        if (Array.isArray(b[key])) {
          return a[key].length - b[key].length;
        } else {
          return b;
        }
      default:
        return b;
    }
  }, {});
  if (order === 'asc') {
    return sorted;
  } else if (order === 'desc') {
    console.log('desc');
    return sorted.reverse();
  }
}
