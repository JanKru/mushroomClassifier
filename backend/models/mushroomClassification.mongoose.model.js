const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mushroomClassification = new Schema({
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

module.exports = mongoose.model('mushroomClassification', mushroomClassification);
