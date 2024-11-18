// Importing sound files with capitalized names
import BirdsAndWaterfall from './Sounds/birds&waterfall.mp3';
import FireCrackling from './Sounds/fireCrackling.mp3';
import ForestSounds from './Sounds/forestSounds.mp3';
import Guitar from './Sounds/gitar.mp3';
import KeyboardTyping from './Sounds/keyboardTyping.mp3';
import NatureAndBirds from './Sounds/nature&birds.mp3';
import OceanWaves from './Sounds/oceanWaves.mp3';
import Peaceful from './Sounds/peaceful.mp3';
import Piano from './Sounds/piano.mp3';
import RainSounds from './Sounds/rainSounds.mp3';
import Wind from './Sounds/wind.mp3';

const backgroundSounds = () => {
    return {
        sounds: [
            { index: 0, src: BirdsAndWaterfall, description: 'Birds and Waterfall' },
            { index: 1, src: FireCrackling, description: 'Fire Crackling' },
            { index: 2, src: ForestSounds, description: 'Forest Sounds' },
            { index: 3, src: Guitar, description: 'Guitar Music' },
            { index: 4, src: KeyboardTyping, description: 'Keyboard Typing' },
            { index: 5, src: NatureAndBirds, description: 'Nature and Birds' },
            { index: 6, src: OceanWaves, description: 'Ocean Waves' },
            { index: 7, src: Peaceful, description: 'Peaceful Background' },
            { index: 8, src: Piano, description: 'Piano Music' },
            { index: 9, src: RainSounds, description: 'Rain Sounds' },
            { index: 10, src: Wind, description: 'Winds' }
        ],
    };
};

export default backgroundSounds;
