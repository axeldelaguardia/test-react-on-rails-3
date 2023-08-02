const handleFormSubmit = (url, method, authenticityToken, data) => {
  const form = document.createElement('form');
  form.action = url;
  form.method = 'post';

  const tokenInput = document.createElement('input');
  tokenInput.type = 'hidden';
  tokenInput.name = 'authenticity_token';
  tokenInput.value = authenticityToken;
  form.appendChild(tokenInput);

	if (method === 'patch') {
		const methodInput = document.createElement('input');
		methodInput.type = 'hidden';
		methodInput.name = '_method';
		methodInput.value = 'patch';
		form.appendChild(methodInput);
	};

  Object.keys(data).forEach((key) => {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = key;
    input.value = data[key];
    form.appendChild(input);
  });

  document.body.appendChild(form);
  form.submit();
};

const handleFileUpload = (url, authenticity_token, file) => {
  const formData = new FormData();
  formData.append('authenticity_token', authenticity_token);
  formData.append('file', file);

  fetch(url, {
    method: 'post',
    body: formData,
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};


export { handleFormSubmit, handleFileUpload };
