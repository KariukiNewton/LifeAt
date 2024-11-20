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
            { index: 0, src: BirdsAndWaterfall, name: 'Birds & Waterfall', icon: '🌊🐦' },
            { index: 1, src: FireCrackling, name: 'Fire Crackling', icon: '🔥' },
            { index: 2, src: ForestSounds, name: 'Forest Sounds', icon: '🌲🍃' },
            { index: 3, src: Guitar, name: 'Guitar Music', icon: '🎸' },
            { index: 4, src: KeyboardTyping, name: 'Keyboard Typing', icon: '⌨️' },
            { index: 5, src: NatureAndBirds, name: 'Nature & Birds', icon: '🌳🐦' },
            { index: 6, src: OceanWaves, name: 'Ocean Waves', icon: '🌊' },
            { index: 7, src: Peaceful, name: 'Peaceful Ambience', icon: '☁️' },
            { index: 8, src: Piano, name: 'Piano Music', icon: '🎹' },
            { index: 9, src: RainSounds, name: 'Rain Sounds', icon: '🌧️' },
            { index: 10, src: Wind, name: 'Wind', icon: '💨' }
        ],
    };
};

export default backgroundSounds;
