const fetchPayments = () =>
  fetch('http://localhost:4000').then(response => response.json());

export { fetchPayments };
