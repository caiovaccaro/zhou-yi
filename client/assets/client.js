(function() {
  var socket = io(),
    inputs = document.getElementsByTagName('input'),
    responseElement = document.getElementById('response'),
    inputsLength = inputs.length,
    allInputsEmpty = true,
    defaultLine = 'Marque suas dificuldades e verei como posso ajudar...',
    errorLine = 'Parece que não inventaram ainda isso aí...',
    moreThanOneConceptLine = 'Você pode usar um desses <b>conceitos</b>:<br>',
    oneConceptLine = 'O melhor <b>conceito</b> nesse caso é:<br>',
    moreThanOneApiLine = 'Você pode usar um desses tipos de <b>API</b>:<br>',
    oneApiLine = 'O melhor tipo de <b>API</b> nesse caso é:<br>',
    moreThanOneFrameworkLine = 'Você pode usar um desses tipos de <b>frameworks</b>:<br>',
    oneFrameworkLine = 'O melhor tipo de <b>framework</b> nesse caso é:<br>',
    itemsSeparator = ' ou ',
    linesSeparator = '.<br><br>',
    i, conceptLine, apisLine, frameworksLine, finalLine;

  init();

  function init() {
    iterateInputs(function(input) {
      input.addEventListener('change', syncRequest);
    });

    socket.on('response', gotResponseFromServer);
  }

  function gotResponseFromServer(response) {
    if(noData(response) && (allInputsEmpty || !allInputsEmpty)) {
      responseElement.innerHTML = allInputsEmpty ? defaultLine : errorLine;
      return false;
    }

    conceptLine = response.Concepts.length > 1 ? moreThanOneConceptLine : oneConceptLine;
    apisLine = response.APIs.length > 1 ? moreThanOneApiLine : oneApiLine;
    frameworksLine = response.Frameworks.length > 1 ? moreThanOneFrameworkLine : oneFrameworkLine;
    finalLine = conceptLine + response.Concepts.join(itemsSeparator) +
                  linesSeparator + apisLine + response.APIs.join(itemsSeparator) +
                  linesSeparator + frameworksLine + response.Frameworks.join(itemsSeparator) +
                  linesSeparator;

    responseElement.innerHTML = finalLine;
  }

  function noData(response) {
    return typeof response.Concepts === 'undefined';
  }

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
})();
