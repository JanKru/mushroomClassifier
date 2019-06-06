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

  getGillAttachmentInfo(): MushroomData {
    return {
      options: {
        letters: ['a', 'd', 'f', 'n'],
        numbers: [0, 1, 2, 3],
        meanings: ['attached', 'descending', 'free', 'notched'],
      }
    };
  }

}