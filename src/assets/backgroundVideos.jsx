import darkSmoke from './Videos/a_darkSmoke.mp4';
import firerySky from './Videos/a_firery_sky.mp4';
import kaleidoscope from './Videos/a_kaleidoscope.mp4';
import liquidMotion from './Videos/a_liquidMotion.mp4';
import smokeart from './Videos/a_smokeart.mp4';
import Aesthetic_Falls from './Videos/n_Aesthetic_Falls.mp4';
import Forest_Autumn from './Videos/n_Forest_Autumn.mp4';
import Forest_Walk from './Videos/n_Forest_Walk.mp4';
import Forest_Winter from './Videos/n_Forest_winter.mp4';
import Giant_Falls from './Videos/n_Giant_Falls.mp4';
import Aurora from './Videos/s_aurora.mp4';
import Clouds_moving from './Videos/s_CloudsMoving.mp4';
import Lightning from './Videos/s_lightning.mp4';
import Stary_Sky from './Videos/s_Stary_sky.mp4';
import Sunset from './Videos/s_sunset.mp4';
import Coding from './Videos/z_coding.mp4';
import Dna from './Videos/z_dna.mp4';
import Flames from './Videos/z_flames.mp4';
import zSunset from './Videos/z_sunset.mp4';
import Waves from './Videos/z_waves.mp4';

const backgroundVideos = () => {
    return {
        nature: [
            { index: 0, src: Aesthetic_Falls, description: 'Aesthetic Falls' },
            { index: 1, src: Forest_Autumn, description: 'Forest in Autumn' },
            { index: 2, src: Forest_Walk, description: 'Forest Walk' },
            { index: 3, src: Forest_Winter, description: 'Forest in Winter' },
            { index: 4, src: Giant_Falls, description: 'Giant Falls' },
        ],

        art: [
            { index: 0, src: darkSmoke, description: 'Dark Smoke' },
            { index: 1, src: firerySky, description: 'Fiery Sky' },
            { index: 2, src: kaleidoscope, description: 'Kaleidoscope' },
            { index: 3, src: liquidMotion, description: 'Liquid Motion' },
            { index: 4, src: smokeart, description: 'Smoke Art' },
        ],

        sky: [
            { index: 0, src: Aurora, description: 'Northern Lights' },
            { index: 1, src: Clouds_moving, description: 'Clouds Moving' },
            { index: 2, src: Lightning, description: 'Lightning' },
            { index: 3, src: Stary_Sky, description: 'Starry Sky' },
            { index: 4, src: Sunset, description: 'Sunset' },
        ],

        more: [
            { index: 0, src: Coding, description: 'Coding' },
            { index: 1, src: Dna, description: 'DNA' },
            { index: 2, src: Flames, description: 'Flames' },
            { index: 3, src: zSunset, description: 'Z Sunset' },
            { index: 4, src: Waves, description: 'Waves' },
        ],
    };
};

export default backgroundVideos;
