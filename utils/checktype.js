function checkType(values, type) {
    return values.findIndex((v) => typeof v !== type) === -1;
  }
  
  const hasType = {
    string(...values) {
      return checkType(values, "string");
    },
    number(...values) {
      return checkType(values, "number");
    },
    boolean(...values) {
      return checkType(values, "boolean");
    },
  };
    
  if (hasType.string(firstname, lastname)) {
    console.log("OK, c'est tous des strings");
  } else {
    console.log("Pas ok, ce n'est pas tous des strings");
  }

  module.exports = checkType;