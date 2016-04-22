var socket = io(),
  inputs = document.getElementsByTagName('input'),
  inputsLength = inputs.length,
  allInputsEmpty = true,
  i

socket.on('response', function(response) {
  var conceptLine, apisLine, frameworksLine, finalLine,
    defaultLine = 'Marque suas dificuldades e verei como posso ajudar...',
    errorLine = 'Parece que não inventaram ainda isso aí...';

  if(typeof response.Concepts === 'undefined' && allInputsEmpty) {
    document.getElementById('response').innerHTML = defaultLine;
    return false;
  } else if(typeof response.Concepts === 'undefined' && !allInputsEmpty) {
    document.getElementById('response').innerHTML = errorLine;
    return false;
  }

  conceptLine = response.Concepts.length > 1 ? "Você pode usar um desses <b>conceitos</b>:<br>" : "O melhor <b>conceito</b> nesse caso é:<br>";
  apisLine = response.APIs.length > 1 ? "Você pode usar um desses tipos de <b>API</b>:<br>" : "O melhor tipo de <b>API</b> nesse caso é:<br>";
  frameworksLine = response.Frameworks.length > 1 ? "Você pode usar um desses tipos de <b>frameworks</b>:<br>" : "O melhor tipo de <b>framework</b> nesse caso é:<br>";
  finalLine = conceptLine + response.Concepts.join(' ou ') + '.<br><br>' + apisLine + response.APIs.join(' ou ') + '.<br><br>' + frameworksLine + response.Frameworks.join(' ou ') + '.<br><br>';

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
  allInputsEmpty = true;

  iterateInputs(function(input) {
    if(input.checked) {
      allInputsEmpty = false;
      request[input.name] = request[input.name] || [];
      request[input.name].push(input.value);
    }
  });

  makeRequest(request);
}

function makeRequest(request) {
  socket.emit('change', request)
}
