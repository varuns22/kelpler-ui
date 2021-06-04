import { Planet } from './Planet'

export class Sun {

    constructor(
        public sid?: number,
        public sunName?: string,
        public planetsWithSun?: Planet[],
        public stDist?: number,
        public stOptmag?: number,
        public stTeff?: number,
        public stMass?: number,
        public stRad?: number
    ) { }
}