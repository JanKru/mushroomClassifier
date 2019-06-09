import { Injectable } from '@angular/core';
import { MushroomData } from '../models/mushroomData.model';

@Injectable({
  providedIn: 'root'
})

export class AboutMushroomDataService {

  constructor() { }

  getCapShapeInfo(): MushroomData {
    return {
      options: {
        letters: ['b', 'c', 'x', 'f', 'k', 's'],
        numbers: [0, 1, 2, 3, 4, 5, 6],
        meanings: ['bell', 'conical', 'convex', 'flat', 'knobbed', 'sunken'],
      }
    };
  }
  getCapSurfaceInfo(): MushroomData {
    return {
      options: {
        letters: ['f', 'g', 'y', 's'],
        numbers: [0, 1, 2, 3],
        meanings: ['fibrous', 'grooves', 'scaly', 'smooth'],
      }
    };
  }

  getCapColorInfo(): MushroomData {
    return {
      options: {
        letters: ['n', 'b', 'c', 'g', 'r', 'p', 'u', 'e', 'w', 'y'],
        numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        meanings: ['brown', 'buff', 'cinnamon', 'gray', 'green', 'pink', 'purple', 'red', 'white', 'yellow'],
      }
    };
  }

  getBruisesInfo(): MushroomData {
    return {
      options: {
        letters: ['t', 'f'],
        numbers: [0, 1],
        meanings: ['bruises', 'no'],
      }
    };
  }

  getOdorInfo(): MushroomData {
    return {
      options: {
        letters: ['a', 'l', 'c', 'y', 'f', 'm','n', 'p', 's'],
        numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        meanings: ['almond', 'anise', 'creosote', 'fishy', 'foul', 'musty', 'none', 'pungent', 'spicy'],
      }
    };
  }

  getGillAttachmentInfo(): MushroomData {
    return {
      options: {
        letters: ['a', 'd', 'f', 'n'],
        numbers: [0, 1, 2, 3],
        meanings: ['attached', 'descending', 'free', 'notched'],
      }
    };
  }

  getGillSpacingInfo(): MushroomData {
    return {
      options: {
        letters: ['c', 'w', 'd'],
        numbers: [0, 1, 2],
        meanings: ['close', 'crowded', 'distant'],
      }
    };
  }

  getGillSizeInfo(): MushroomData {
    return {
      options: {
        letters: ['b', 'n'],
        numbers: [0, 1],
        meanings: ['broad', 'narrow'],
      }
    };
  }

  getGillColorInfo(): MushroomData {
    return {
      options: {
        letters: ['k', 'n', 'b', 'h', 'g', 'r', 'o', 'p', 'u', 'e', 'w', 'y'],
        numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        meanings: ['black', 'brown', 'buff', 'chocolate', 'gray', 'green', 'orange', 'pink', 'purple', 'red', 'white', 'yellow'],
      }
    };
  }

  getStalkShapeInfo(): MushroomData {
    return {
      options: {
        letters: ['e', 't'],
        numbers: [0, 1],
        meanings: ['enlarging', 'tapering'],
      }
    };
  }

  getStalkRootInfo(): MushroomData {
    return {
      options: {
        letters: ['b', 'c', 'u', 'e', 'z', 'r', '?'],
        numbers: [0, 1, 2, 3, 4, 5, 6],
        meanings: ['bulbous', 'club', 'cup', 'equal', 'rhizomorphs', 'rooted', 'missing'],
      }
    };
  }
 
  getStalkSurfaceAboveRingInfo(): MushroomData {
    return {
      options: {
        letters: ['f', 'y', 'k', 's'],
        numbers: [0, 1, 2, 3],
        meanings: ['fibrous', 'scaly', 'silky', 'smooth'],
      }
    };
  }

  getStalkSurfaceBewlowRingInfo(): MushroomData {
    return this.getStalkSurfaceAboveRingInfo();
  }
  
  getStalkColorAboveRingInfo(): MushroomData {
    return {
      options: {
        letters: ['n', 'b', 'c', 'g', 'o', 'p', 'e', 'w', 'y'],
        numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        meanings: ['brown', 'buff', 'cinnamon', 'gray', 'orange', 'pink', 'red', 'white', 'yellow'],
      }
    };
  }

  getStalkColorBelowRingInfo(): MushroomData {
    return this.getStalkColorAboveRingInfo();
  }

  getVeilTypeInfo(): MushroomData {
    return {
      options: {
        letters: ['p', 'u'],
        numbers: [0, 1],
        meanings: ['partial', 'universal'],
      }
    };
  }

  getVeilColorInfo(): MushroomData {
    return {
      options: {
        letters: ['n', 'o', 'w', 'y'],
        numbers: [0, 1, 2, 3],
        meanings: ['brown', 'orange', 'white', 'yellow'],
      }
    };
  }

  getRingNumberInfo(): MushroomData {
    return {
      options: {
        letters: ['n', 'o', 't'],
        numbers: [0, 1, 2],
        meanings: ['none', 'one', 'two'],
      }
    };
  }

  getRingTypeInfo(): MushroomData {
    return {
      options: {
        letters: ['c', 'e', 'f', 'l', 'n', 'p', 's', 'z'],
        numbers: [0, 1, 2, 3, 4, 5, 6, 7],
        meanings: ['cobwebby', 'evanescent', 'flaring', 'large', 'none', 'pendant', 'sheating', 'zone'],
      }
    };
  }

  getSporePrintColorInfo(): MushroomData {
    return {
      options: {
        letters: ['k', 'n', 'b', 'h', 'r', 'o', 'u', 'w', 'y'],
        numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        meanings: ['black', 'brown', 'buff', 'chocolate', 'green', 'orange', 'purple', 'white', 'yellow'],
      }
    };
  }

  getSporePopulationInfo(): MushroomData {
    return {
      options: {
        letters: ['a', 'c', 'n', 's', 'v', 'y'],
        numbers: [0, 1, 2, 3, 4, 5],
        meanings: ['abundant', 'clustered', 'numerous', 'scattered', 'several', 'solitary'],
      }
    };
  }

  getSporeHabitatInfo(): MushroomData {
    return {
      options: {
        letters: ['g', 'l', 'm', 'p', 'u', 'w', 'd'],
        numbers: [0, 1, 2, 3, 4, 5, 6],
        meanings: ['grasses', 'leaves', 'meadows', 'paths', 'urban', 'waste', 'woods'],
      }
    };
  }

}