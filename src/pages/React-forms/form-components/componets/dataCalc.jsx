function DataCalc(dateNow, data) {
  const arrayDataNow = dateNow.split('.');
  const arrayDataAfter = data.split('-').reverse();

  if (arrayDataAfter[2] > arrayDataNow[2]) {
    return true;
  }
  if (arrayDataNow[0] > arrayDataAfter[0]) {
    if (arrayDataNow[1] >= arrayDataAfter[1]) {
      return false;
    }
    return true;
  } else {
    return true;
  }
}

export default DataCalc;
