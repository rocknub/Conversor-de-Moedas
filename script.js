function converterMoedas() {
    var real = document.getElementById("real").value;
    var dolar = document.getElementById("dolar").value;
    var selectedOpt = document.getElementById("combobox");
    var parDolar = document.getElementById("pDolar");
    var parReal = document.getElementById("pReal");
    var selectedOptValue =
      selectedOpt.options[selectedOptValue.selectedIndex].value;
  
    alert(selectedOptValue);
  
    const valorDolarR = 5.16;
    const valorRealD = 0.19;
  
    if (selectedOpt.value == "dolar") {
      var resultadoDolar = valorDolarR * real;
      alert("Dolar: " + resultadoDolar);
    } else if (selectedOpt.value == "real") {
      console.log("Chegou no real.");
      var resultadoReal = valorRealD * dolar;
      alert("Real: " + resultadoReal);
    } else {
      alert("Não passou em nenhuma das opções anteriores.");
    }
  }
  
  function showDolarBox() {
    if (selectedOpt.value == "dolar") {
      document.getElementById("pDolar").style.visibility = "visible";
    } else {
      document.getElementById("pDolar").style.visibility = "hidden";
    }
  }
  
  function showRealBox() {
    alert("Real Clicked.");
    if (selectedOpt.value == "real") {
      document.getElementById("pReal").style.visibility = "visible";
    } else {
      document.getElementById("pReal").style.visibility = "hidden";
    }
  }
  