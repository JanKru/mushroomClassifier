const Joi = require('joi');

const schema = {
  date: Joi.alternatives().try(
      Joi.string().valid(''),
      Joi.date().min('now')
  ).required(),
  mushroomParameter: {
    cap_shape: Joi.string().min(1).max(1).valid('b', 'c', 'x', 'f', 'k', 's'),
    cap_surface: Joi.string().min(1).max(1).valid('f', 'g', 'y', 's'),
    cap_color: Joi.string().min(1).max(1).valid('n', 'b', 'c', 'g', 'r', 'p', 'u', 'e', 'w', 'y'),
    bruises: Joi.string().min(1).max(1).valid('t', 'f'),
    odor: Joi.string().min(1).max(1).valid('a', 'l', 'c', 'y', 'g', 'm', 'n', 'p', 's'),
    gill_attachment: Joi.string().min(1).max(1).valid('a', 'd', 'f', 'n'),
    gill_spacing: Joi.string().min(1).max(1).valid('c', 'w', 'd'),
    gill_size: Joi.string().min(1).max(1).valid('b', 'n'),
    gill_color: Joi.string().min(1).max(1).valid('k', 'n', 'b', 'h', 'g', 'r', 'o', 'p', 'u', 'e', 'w', 'y'),
    stalk_shape: Joi.string().min(1).max(1).valid('e', 't'),
    stalk_root: Joi.string().min(1).max(1).valid('b', 'c', 'u', 'e', 'z', 'r', '?'),
    stalk_surface_above_ring: Joi.string().min(1).max(1).valid('f', 'y', 'k', 's'),
    stalk_surface_below_ring: Joi.string().min(1).max(1).valid('f', 'y', 'k', 's'),
    stalk_color_above_ring: Joi.string().valid('n', 'b', 'c', 'g', 'o', 'p', 'e', 'w', 'y'),
    stalk_color_below_ring: Joi.string().valid('n', 'b', 'c', 'g', 'o', 'p', 'e', 'w', 'y'),
    veil_type: Joi.string().valid('p', 'u'),
    veil_color: Joi.string().valid('n', 'o', 'w', 'y'),
    ring_number: Joi.string().valid('n', 'o', 't'),
    ring_type: Joi.string().valid('c', 'e', 'f', 'l', 'n', 'p', 's', 'z'),
    spore_print_color: Joi.string().valid('k', 'n', 'b', 'h', 'r', 'o', 'u', 'w', 'y'),
    population: Joi.string().valid('a', 'c', 'n', 's', 'v', 'y'),
    habitat: Joi.string().valid('g', 'l', 'm', 'p', 'u', 'w', 'd'),
  },
  originRequest: {},
  predictedValue: {},
  metaNN: {},
};

module.exports = {
  schema,
};

