(function() {
  var socket = io(),
    inputs = document.getElementsByTagName('input'),
    responseElement = document.getElementById('response'),
    inputsLength = inputs.length,
    allInputsEmpty = true,
    defaultLine = 'Check what troubles you!',
    errorLine = 'It seems no one invented such a thing...',
    moreThanOneLine = 'You can use one of these <b>#{things}</b>:<br>',
    oneLine = 'The best <b>#{thing}</b> in this case is:<br>',
    itemsSeparator = ' or ',
    linesSeparator = '.<br><br>',
    i, finalLine;

  init();

  function init() {
    iterateInputs(function(input) {
      input.addEventListener('change', syncRequest);
    });

    socket.on('response', gotResponseFromServer);
  }

  function gotResponseFromServer(response) {
    var lines = []

    if(noData(response) && (allInputsEmpty || !allInputsEmpty)) {
      responseElement.innerHTML = allInputsEmpty ? defaultLine : errorLine;
      return false;
    }

    comparisons.forEach(function(comparison) {
      var finalItemLine,
        line = response[capitalizeFirstLetter(comparison)].length > 1
                  ? moreThanOneLine.replace('#{things}', comparison)
                  : oneLine.replace('#{thing}', comparison.slice(0, -1));

      finalItemLine = line + response[capitalizeFirstLetter(comparison)].join(itemsSeparator);
      lines.push(finalItemLine);
    });

    finalLine = lines.join(linesSeparator);
    responseElement.innerHTML = finalLine;
  }

  function noData(response) {
    return !Object.keys(response).length;
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

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
})();
