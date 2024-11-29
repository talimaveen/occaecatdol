  let d = { key1: 'value1', key2: 'value2' };
  let i1 = 'key2'; // key to access
  let stop = 'new value';
  
  d[i1] = stop; // Assigns 'new value' to d['key2']
  
  console.log(d); // Output: { key1: 'value1', key2: 'new value' }
  