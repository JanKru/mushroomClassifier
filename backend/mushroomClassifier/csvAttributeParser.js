const getClass = (attributeToParse) => {
  if (attributeToParse === 'e') {
    return 0;
  } else if (attributeToParse === 'p') {
    return 1;
  } else {
    throw new Error('Parameter can not be parsed');
  }
};

const getCapShape = (attributeToParse) => {
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
    throw new Error('Parameter can not be parsed');
  }
};

const getCapSurface = (attributeToParse) => {
  if (attributeToParse === 'f') {
    return 0;
  } else if (attributeToParse === 'g') {
    return 1;
  } else if (attributeToParse === 'y') {
    return 2;
  } else if (attributeToParse === 's') {
    return 3;
  } else {
    throw new Error('Parameter can not be parsed');
  }
};

const getCapColor = (attributeToParse) => {
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
    throw new Error('Parameter can not be parsed');
  }
};

const getBruises = (attributeToParse) => {
  if (attributeToParse === 't') {
    return 0;
  } else if (attributeToParse === 'f') {
    return 1;
  } else {
    throw new Error('Parameter can not be parsed');
  }
};

const getOdor = (attributeToParse) => {
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
    throw new Error('Parameter can not be parsed');
  }
};

const getGillAttachment = (attributeToParse) => {
  if (attributeToParse === 'a') {
    return 0;
  } else if (attributeToParse === 'd') {
    return 1;
  } else if (attributeToParse === 'f') {
    return 2;
  } else if (attributeToParse === 'n') {
    return 3;
  } else {
    throw new Error('Parameter can not be parsed');
  }
};

const getGillSpacing = (attributeToParse) => {
  if (attributeToParse === 'c') {
    return 0;
  } else if (attributeToParse === 'w') {
    return 1;
  } else if (attributeToParse === 'd') {
    return 2;
  } else {
    throw new Error('Parameter can not be parsed');
  }
};

const getGillSize = (attributeToParse) => {
  if (attributeToParse === 'b') {
    return 0;
  } else if (attributeToParse === 'n') {
    return 1;
  } else {
    throw new Error('Parameter can not be parsed');
  }
};

const getGillColor = (attributeToParse) => {
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
    throw new Error('Parameter can not be parsed');
  }
};

const getStalkShape = (attributeToParse) => {
  if (attributeToParse === 'e') {
    return 0;
  } else if (attributeToParse === 't') {
    return 1;
  } else {
    throw new Error('Parameter can not be parsed');
  }
};

const getStalkRoot = (attributeToParse) => {
  if (attributeToParse === 'b') {
    return 0;
  } else if (attributeToParse === 'c') {
    return 1;
  } else if (attributeToParse === 'u') {
    return 2;
  } else if (attributeToParse === 'e') {
    return 3;
  } else if (attributeToParse === 'g') {
    return 4;
  } else if (attributeToParse === 'z') {
    return 5;
  } else if (attributeToParse === 'r') {
    return 6;
  } else if (attributeToParse === '?') {
    return 7;
  } else {
    throw new Error('Parameter can not be parsed');
  }
};

const getStalkSurfaceRing = (attributeToParse) => {
  if (attributeToParse === 'f') {
    return 0;
  } else if (attributeToParse === 'y') {
    return 1;
  } else if (attributeToParse === 'k') {
    return 2;
  } else if (attributeToParse === 's') {
    return 3;
  } else {
    throw new Error('Parameter can not be parsed');
  }
};

const getStalkColorRing = (attributeToParse) => {
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
    throw new Error('Parameter can not be parsed');
  }
};

const getVeilType = (attributeToParse) => {
  if (attributeToParse === 'p') {
    return 0;
  } else if (attributeToParse === 'u') {
    return 1;
  } else {
    throw new Error('Parameter can not be parsed');
  }
};

const getVeilColor = (attributeToParse) => {
  if (attributeToParse === 'n') {
    return 0;
  } else if (attributeToParse === 'o') {
    return 1;
  } else if (attributeToParse === 'w') {
    return 2;
  } else if (attributeToParse === 'y') {
    return 3;
  } else {
    throw new Error('Parameter can not be parsed');
  }
};

const getRingNumber = (attributeToParse) => {
  if (attributeToParse === 'n') {
    return 0;
  } else if (attributeToParse === 'o') {
    return 1;
  } else if (attributeToParse === 't') {
    return 2;
  } else {
    throw new Error('Parameter can not be parsed');
  }
};

const getRingType = (attributeToParse) => {
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
    throw new Error('Parameter can not be parsed');
  }
};

const getSporePrintColor = (attributeToParse) => {
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
    throw new Error('Parameter can not be parsed');
  }
};

const getPopulation = (attributeToParse) => {
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
    throw new Error('Parameter can not be parsed');
  }
};

const getHabitat = (attributeToParse) => {
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
    throw new Error('Parameter can not be parsed');
  }
};

/**
 * parses the origin csv data to brain.js format
 * @param {CsvRow} row row of the train-data-csv-file
 * @return {object} object in brain.js required form
 */
exports.parseCsvRow = (row) => {
  // TODO: reg-Ex replace - with _ would be nicer
  return {
    input: {
      cap_shape: getCapShape(row['cap-shape']),
      cap_surface: getCapSurface(row['cap-surface']),
      cap_color: getCapColor(row['cap-color']),
      bruises: getBruises(row['bruises']),
      odor: getOdor(row['odor']),
      gill_attachment: getGillAttachment(row['gill-attachment']),
      gill_spacing: getGillSpacing(row['gill-spacing']),
      gill_size: getGillSize(row['gill-size']),
      gill_color: getGillColor(row['gill-color']),
      stalk_shape: getStalkShape(row['stalk-shape']),
      stalk_root: getStalkRoot(row['stalk-root']),
      stalk_surface_above_ring: getStalkSurfaceRing(row['stalk-surface-above-ring']),
      stalk_surface_below_ring: getStalkSurfaceRing(row['stalk-surface-below-ring']),
      stalk_color_above_ring: getStalkColorRing(row['stalk-color-above-ring']),
      stalk_color_below_ring: getStalkColorRing(row['stalk-color-below-ring']),
      veil_type: getVeilType(row['veil-type']),
      veil_color: getVeilColor(row['veil-color']),
      ring_number: getRingNumber(row['ring-number']),
      ring_type: getRingType(row['ring-type']),
      spore_print_color: getSporePrintColor(row['spore-print-color']),
      population: getPopulation(row['population']),
      habitat: getHabitat(row['habitat']),
    },
    output: {
      class: getClass(row['class']),
    },
  };
};
