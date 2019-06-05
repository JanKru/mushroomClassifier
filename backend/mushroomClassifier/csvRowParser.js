const csvAttributeParser = require('./csvAttributeParser');

/**
 * parses the origin csv data to brain.js format
 * @param {CsvRow} row row of the train-data-csv-file
 * @return {object} object in brain.js required form
 */
exports.parseCsvRow = (row) => {
  // TODO: reg-Ex replace - with _ would be nicer
  return {
    input: {
      cap_shape: csvAttributeParser.getCapShape(row['cap-shape']),
      cap_surface: csvAttributeParser.getCapSurface(row['cap-surface']),
      cap_color: csvAttributeParser.getCapColor(row['cap-color']),
      bruises: csvAttributeParser.getBruises(row['bruises']),
      odor: csvAttributeParser.getOdor(row['odor']),
      gill_attachment: csvAttributeParser.getGillAttachment(row['gill-attachment']),
      gill_spacing: csvAttributeParser.getGillSpacing(row['gill-spacing']),
      gill_size: csvAttributeParser.getGillSize(row['gill-size']),
      gill_color: csvAttributeParser.getGillColor(row['gill-color']),
      stalk_shape: csvAttributeParser.getStalkShape(row['stalk-shape']),
      stalk_root: csvAttributeParser.getStalkRoot(row['stalk-root']),
      stalk_surface_above_ring: csvAttributeParser.getStalkSurfaceRing(row['stalk-surface-above-ring']),
      stalk_surface_below_ring: csvAttributeParser.getStalkSurfaceRing(row['stalk-surface-below-ring']),
      stalk_color_above_ring: csvAttributeParser.getStalkColorRing(row['stalk-color-above-ring']),
      stalk_color_below_ring: csvAttributeParser.getStalkColorRing(row['stalk-color-below-ring']),
      veil_type: csvAttributeParser.getVeilType(row['veil-type']),
      veil_color: csvAttributeParser.getVeilColor(row['veil-color']),
      ring_number: csvAttributeParser.getRingNumber(row['ring-number']),
      ring_type: csvAttributeParser.getRingType(row['ring-type']),
      spore_print_color: csvAttributeParser.getSporePrintColor(row['spore-print-color']),
      population: csvAttributeParser.getPopulation(row['population']),
      habitat: csvAttributeParser.getHabitat(row['habitat']),
    },
    output: {
      class: csvAttributeParser.getClass(row['class']),
    },
  };
};
