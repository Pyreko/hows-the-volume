import type { PageLoad } from "./$types";

const nephilimLabels = [
    'Hope',
    'the nephilim',
    '███████ IRyS',
    'the "seiso" nephilim',
    'the seiso nephilim',
    'the pon',
    'the Embodiment of HOPE',
    'the keyboard enthusiast',
    'Umino Milk',
    'The Hot Pink One',
    ['the Diamond Girlfriend', 'https://www.youtube.com/watch?v=EXM0EE_NpQc']
];
const IRYS_LABEL_OFFSET = 20;

/**
 *  Returns a random value from 0 to the given `maxVal`.
 */
function randomInt(maxVal: number) {
    return Math.floor(Math.random() * (maxVal + 1));
}

export const load: PageLoad =
    () => {

        const nephilimLabelIndex = randomInt(nephilimLabels.length - 1 + IRYS_LABEL_OFFSET);

        return {
            nephilimLabel: nephilimLabelIndex <= IRYS_LABEL_OFFSET
                ? 'IRyS'
                : nephilimLabels[nephilimLabelIndex - IRYS_LABEL_OFFSET]
        };
    }