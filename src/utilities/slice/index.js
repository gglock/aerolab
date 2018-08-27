function Slicing(data, pageSize, currentPage) {
  return data.slice(((currentPage * pageSize) - pageSize), currentPage * pageSize);
}

export default Slicing;
