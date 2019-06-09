const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const csvAttributeParser = require('../mushroomClassifier/csvAttributeParser');

const MushroomClassification = new Schema({
  date: String,
  user: String,
  mushroomParameter: {
    cap_shape: String,
    cap_surface: String,
    cap_color: String,
    bruises: String,
    odor: String,
    gill_attachment: String,
    gill_spacing: String,
    gill_size: String,
    gill_color: String,
    stalk_shape: String,
    stalk_root: String,
    stalk_surface_above_ring: String,
    stalk_surface_below_ring: String,
    stalk_color_above_ring: String,
    stalk_color_below_ring: String,
    veil_type: String,
    veil_color: String,
    ring_number: String,
    ring_type: String,
    spore_print_color: String,
    population: String,
    habitat: String,
  },
});

MushroomClassification.methods.getNumberRepresentation =
(objectToTransform) => {
  return {
    cap_shape: csvAttributeParser.getCapShape(objectToTransform['cap_shape']),
    cap_surface: csvAttributeParser.getCapSurface(objectToTransform['cap_surface']),
    cap_color: csvAttributeParser.getCapColor(objectToTransform['cap_color']),
    bruises: csvAttributeParser.getBruises(objectToTransform['bruises']),
    odor: csvAttributeParser.getOdor(objectToTransform['odor']),
    gill_attachment: csvAttributeParser.getGillAttachment(objectToTransform['gill_attachment']),
    gill_spacing: csvAttributeParser.getGillSpacing(objectToTransform['gill_spacing']),
    gill_size: csvAttributeParser.getGillSize(objectToTransform['gill_size']),
    gill_color: csvAttributeParser.getGillColor(objectToTransform['gill_color']),
    stalk_shape: csvAttributeParser.getStalkShape(objectToTransform['stalk_shape']),
    stalk_root: csvAttributeParser.getStalkRoot(objectToTransform['stalk_root']),
    stalk_surface_above_ring: csvAttributeParser.getStalkSurfaceRing(objectToTransform['stalk_surface_above_ring']),
    stalk_surface_below_ring: csvAttributeParser.getStalkSurfaceRing(objectToTransform['stalk_surface_below_ring']),
    stalk_color_above_ring: csvAttributeParser.getStalkColorRing(objectToTransform['stalk_color_above_ring']),
    stalk_color_below_ring: csvAttributeParser.getStalkColorRing(objectToTransform['stalk_color_below_ring']),
    veil_type: csvAttributeParser.getVeilType(objectToTransform['veil_type']),
    veil_color: csvAttributeParser.getVeilColor(objectToTransform['veil_color']),
    ring_number: csvAttributeParser.getRingNumber(objectToTransform['ring_number']),
    ring_type: csvAttributeParser.getRingType(objectToTransform['ring_type']),
    spore_print_color: csvAttributeParser.getSporePrintColor(objectToTransform['spore_print_color']),
    population: csvAttributeParser.getPopulation(objectToTransform['population']),
    habitat: csvAttributeParser.getHabitat(objectToTransform['habitat']),
  };
};

module.exports = mongoose.model('mushroomClassification', MushroomClassification);
