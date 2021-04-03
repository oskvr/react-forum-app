export function sortBy(array, key, order = 'asc') {
  const sorted = array.sort((a, b) => {
    switch (typeof b[key]) {
      case 'string':
        return a[key] > b[key] ? -1 : 0;
      case 'number':
        return a[key] - b[key];
      default:
        return b;
    }
  });
  if (order === 'asc') {
    return sorted;
  } else if (order === 'desc') {
    return sorted.reverse();
  } else {
    return sorted;
  }
}
