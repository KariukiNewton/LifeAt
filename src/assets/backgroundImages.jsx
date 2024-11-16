import Aesthetic_Falls from './Aesthetic_Falls.mp4';
import Forest_Autumn from './Forest_Autumn.mp4';
import Forest_Walk from './Forest_walk.mp4';
import Forest_Winter from './Forest_winter.mp4';
import Giant_Falls from './Giant_Falls.mp4';

const backgroundImages = () => {
    return {
        nature: [
            { index: 0, src: Aesthetic_Falls, description: 'Aesthetic Falls' },
            { index: 1, src: Forest_Autumn, description: 'Forest in Autumn' },
            { index: 2, src: Forest_Walk, description: 'Forest Walk' },
            { index: 3, src: Forest_Winter, description: 'Forest in Winter' },
            { index: 4, src: Giant_Falls, description: 'Giant Falls' },
        ]
    };
};

export default backgroundImages;
