const calCulateTemp = () => {
    let result;
    const numberTemp = document.getElementById('temp').value;
    const tempSeleted = document.getElementById('temp_diff');
    //const valueTemp = temp_diff.option[tempSeleted.selectedIndex].value;

    const celToFah = (cel) => {
        return Math.round((cel *9/5) + 32);
    }
     const FahToCel = (fehr) => {
        return Math.round((fehr - 32) * 5/9 );
    }

    if(tempSeleted.value == 'cel'){
       result = celToFah(numberTemp);
       document.getElementById('resultContainer').innerHTML = `= ${result} &#8457;`;
    }else{
        result = FahToCel(numberTemp);
       document.getElementById('resultContainer').innerHTML = `= ${result} &deg;`;
    }
    return false;
}