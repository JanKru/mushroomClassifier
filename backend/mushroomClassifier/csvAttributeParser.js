exports.getClass = (attributeToParse) => {
  if (attributeToParse === 'e') {
    return 0;
  } else if (attributeToParse === 'p') {
    return 1;
  } else {
    throw new Error(`Parameter (${attributeToParse}) can not be parsed`);
  }
};

exports.getCapShape = (attributeToParse) => {
  if (attributeToParse === 'b') {
    return 0;
  } else if (attributeToParse === 'c') {
    return 1;
  } else if (attributeToParse === 'x') {
    return 2;
  } else if (attributeToParse === 'f') {
    return 3;
  } else if (attributeToParse === 'k') {
    return 4;
  } else if (attributeToParse === 's') {
    return 5;
  } else {
    throw new Error(`Parameter (${attributeToParse}) can not be parsed`);
  }
};

exports.getCapSurface = (attributeToParse) => {
  if (attributeToParse === 'f') {
    return 0;
  } else if (attributeToParse === 'g') {
    return 1;
  } else if (attributeToParse === 'y') {
    return 2;
  } else if (attributeToParse === 's') {
    return 3;
  } else {
    throw new Error(`Parameter (${attributeToParse}) can not be parsed`);
  }
};

exports.getCapColor = (attributeToParse) => {
  if (attributeToParse === 'n') {
    return 0;
  } else if (attributeToParse === 'b') {
    return 1;
  } else if (attributeToParse === 'c') {
    return 2;
  } else if (attributeToParse === 'g') {
    return 3;
  } else if (attributeToParse === 'r') {
    return 4;
  } else if (attributeToParse === 'p') {
    return 5;
  } else if (attributeToParse === 'u') {
    return 6;
  } else if (attributeToParse === 'e') {
    return 7;
  } else if (attributeToParse === 'w') {
    return 8;
  } else if (attributeToParse === 'y') {
    return 9;
  } else {
    throw new Error(`Parameter (${attributeToParse}) can not be parsed`);
  }
};

exports.getBruises = (attributeToParse) => {
  if (attributeToParse === 't') {
    return 0;
  } else if (attributeToParse === 'f') {
    return 1;
  } else {
    throw new Error(`Parameter (${attributeToParse}) can not be parsed`);
  }
};

exports.getOdor = (attributeToParse) => {
  if (attributeToParse === 'a') {
    return 0;
  } else if (attributeToParse === 'l') {
    return 1;
  } else if (attributeToParse === 'c') {
    return 2;
  } else if (attributeToParse === 'y') {
    return 3;
  } else if (attributeToParse === 'f') {
    return 4;
  } else if (attributeToParse === 'm') {
    return 5;
  } else if (attributeToParse === 'n') {
    return 6;
  } else if (attributeToParse === 'p') {
    return 7;
  } else if (attributeToParse === 's') {
    return 8;
  } else {
    throw new Error(`Parameter (${attributeToParse}) can not be parsed`);
  }
};

exports.getGillAttachment = (attributeToParse) => {
  if (attributeToParse === 'a') {
    return 0;
  } else if (attributeToParse === 'd') {
    return 1;
  } else if (attributeToParse === 'f') {
    return 2;
  } else if (attributeToParse === 'n') {
    return 3;
  } else {
    throw new Error(`Parameter (${attributeToParse}) can not be parsed`);
  }
};

exports.getGillSpacing = (attributeToParse) => {
  if (attributeToParse === 'c') {
    return 0;
  } else if (attributeToParse === 'w') {
    return 1;
  } else if (attributeToParse === 'd') {
    return 2;
  } else {
    throw new Error(`Parameter (${attributeToParse}) can not be parsed`);
  }
};

exports.getGillSize = (attributeToParse) => {
  if (attributeToParse === 'b') {
    return 0;
  } else if (attributeToParse === 'n') {
    return 1;
  } else {
    throw new Error(`Parameter (${attributeToParse}) can not be parsed`);
  }
};

exports.getGillColor = (attributeToParse) => {
  if (attributeToParse === 'k') {
    return 0;
  } else if (attributeToParse === 'n') {
    return 1;
  } else if (attributeToParse === 'b') {
    return 2;
  } else if (attributeToParse === 'h') {
    return 3;
  } else if (attributeToParse === 'g') {
    return 4;
  } else if (attributeToParse === 'r') {
    return 5;
  } else if (attributeToParse === 'o') {
    return 6;
  } else if (attributeToParse === 'p') {
    return 7;
  } else if (attributeToParse === 'u') {
    return 8;
  } else if (attributeToParse === 'e') {
    return 9;
  } else if (attributeToParse === 'w') {
    return 10;
  } else if (attributeToParse === 'y') {
    return 11;
  } else {
    throw new Error(`Parameter (${attributeToParse}) can not be parsed`);
  }
};

exports.getStalkShape = (attributeToParse) => {
  if (attributeToParse === 'e') {
    return 0;
  } else if (attributeToParse === 't') {
    return 1;
  } else {
    throw new Error(`Parameter (${attributeToParse}) can not be parsed`);
  }
};

exports.getStalkRoot = (attributeToParse) => {
  if (attributeToParse === 'b') {
    return 0;
  } else if (attributeToParse === 'c') {
    return 1;
  } else if (attributeToParse === 'u') {
    return 2;
  } else if (attributeToParse === 'e') {
    return 3;
  } else if (attributeToParse === 'z') {
    return 4;
  } else if (attributeToParse === 'r') {
    return 5;
  } else if (attributeToParse === '?') {
    return 6;
  } else {
    throw new Error(`Parameter (${attributeToParse}) can not be parsed`);
  }
};

exports.getStalkSurfaceRing = (attributeToParse) => {
  if (attributeToParse === 'f') {
    return 0;
  } else if (attributeToParse === 'y') {
    return 1;
  } else if (attributeToParse === 'k') {
    return 2;
  } else if (attributeToParse === 's') {
    return 3;
  } else {
    throw new Error(`Parameter (${attributeToParse}) can not be parsed`);
  }
};

exports.getStalkColorRing = (attributeToParse) => {
  if (attributeToParse === 'n') {
    return 0;
  } else if (attributeToParse === 'b') {
    return 1;
  } else if (attributeToParse === 'c') {
    return 2;
  } else if (attributeToParse === 'g') {
    return 3;
  } else if (attributeToParse === 'o') {
    return 4;
  } else if (attributeToParse === 'p') {
    return 5;
  } else if (attributeToParse === 'e') {
    return 6;
  } else if (attributeToParse === 'w') {
    return 7;
  } else if (attributeToParse === 'y') {
    return 8;
  } else {
    throw new Error(`Parameter (${attributeToParse}) can not be parsed`);
  }
};

exports.getVeilType = (attributeToParse) => {
  if (attributeToParse === 'p') {
    return 0;
  } else if (attributeToParse === 'u') {
    return 1;
  } else {
    throw new Error(`Parameter (${attributeToParse}) can not be parsed`);
  }
};

exports.getVeilColor = (attributeToParse) => {
  if (attributeToParse === 'n') {
    return 0;
  } else if (attributeToParse === 'o') {
    return 1;
  } else if (attributeToParse === 'w') {
    return 2;
  } else if (attributeToParse === 'y') {
    return 3;
  } else {
    throw new Error(`Parameter (${attributeToParse}) can not be parsed`);
  }
};

exports.getRingNumber = (attributeToParse) => {
  if (attributeToParse === 'n') {
    return 0;
  } else if (attributeToParse === 'o') {
    return 1;
  } else if (attributeToParse === 't') {
    return 2;
  } else {
    throw new Error(`Parameter (${attributeToParse}) can not be parsed`);
  }
};

exports.getRingType = (attributeToParse) => {
  if (attributeToParse === 'c') {
    return 0;
  } else if (attributeToParse === 'e') {
    return 1;
  } else if (attributeToParse === 'f') {
    return 2;
  } else if (attributeToParse === 'l') {
    return 3;
  } else if (attributeToParse === 'n') {
    return 4;
  } else if (attributeToParse === 'p') {
    return 5;
  } else if (attributeToParse === 's') {
    return 6;
  } else if (attributeToParse === 'z') {
    return 7;
  } else {
    throw new Error(`Parameter (${attributeToParse}) can not be parsed`);
  }
};

exports.getSporePrintColor = (attributeToParse) => {
  if (attributeToParse === 'k') {
    return 0;
  } else if (attributeToParse === 'n') {
    return 1;
  } else if (attributeToParse === 'b') {
    return 2;
  } else if (attributeToParse === 'h') {
    return 3;
  } else if (attributeToParse === 'r') {
    return 4;
  } else if (attributeToParse === 'o') {
    return 5;
  } else if (attributeToParse === 'u') {
    return 6;
  } else if (attributeToParse === 'w') {
    return 7;
  } else if (attributeToParse === 'y') {
    return 8;
  } else {
    throw new Error(`Parameter (${attributeToParse}) can not be parsed`);
  }
};

exports.getPopulation = (attributeToParse) => {
  if (attributeToParse === 'a') {
    return 0;
  } else if (attributeToParse === 'c') {
    return 1;
  } else if (attributeToParse === 'n') {
    return 2;
  } else if (attributeToParse === 's') {
    return 3;
  } else if (attributeToParse === 'v') {
    return 4;
  } else if (attributeToParse === 'y') {
    return 5;
  } else {
    throw new Error(`Parameter (${attributeToParse}) can not be parsed`);
  }
};

exports.getHabitat = (attributeToParse) => {
  if (attributeToParse === 'g') {
    return 0;
  } else if (attributeToParse === 'l') {
    return 1;
  } else if (attributeToParse === 'm') {
    return 2;
  } else if (attributeToParse === 'p') {
    return 3;
  } else if (attributeToParse === 'u') {
    return 4;
  } else if (attributeToParse === 'w') {
    return 5;
  } else if (attributeToParse === 'd') {
    return 6;
  } else {
    throw new Error(`Parameter (${attributeToParse}) can not be parsed`);
  }
};


