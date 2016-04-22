var socket = io(),
  inputs = document.getElementsByTagName('input'),
  inputsLength = inputs.length,
  i

socket.on('response', function(response) {
  var conceptLine = response.Concepts.length > 1 ? "Você pode usar um desses <b>conceitos</b>: " : "O melhor <b>conceito</b> nesse caso é: ",
    apisLine = response.APIs.length > 1 ? "Você pode usar um desses tipos de <b>API</b>: " : "O melhor tipo de <b>API</b> nesse caso é: ",
    frameworksLine = response.Frameworks.length > 1 ? "Você pode usar um desses tipos de <b>frameworks</b>: " : "O melhor tipo de <b>framework</b> nesse caso é: ";
    finalLine = conceptLine + response.Concepts.join(' ou ') + '. ' + apisLine + response.APIs.join(' ou ') + '. ' + frameworksLine + response.Frameworks.join(' ou ') + '.';

    document.getElementById('response').innerHTML = finalLine;
});

iterateInputs(function(input) {
  input.addEventListener('change', syncRequest);
});

function iterateInputs(callback) {
  for(i = 0; i < inputsLength; i++) {
    callback(inputs[i])
  }
}

function syncRequest() {
  var request = {};

  iterateInputs(function(input) {
    if(input.checked) {
      request[input.name] = request[input.name] || [];
      request[input.name].push(input.value);
    }
  });

  makeRequest(request);
}

function makeRequest(request) {
  socket.emit('change', request)
}
