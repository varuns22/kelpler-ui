export class Planet {
    
    constructor(
        public planetId?: number,
        public plLetter?: string,
        public plDiscmethod?: string,
        public plPnum?: number,
        public plTtvflag?: number,
        public plKepflag?: number,
        public plK2flag?: number,
        public plNnotes?: number,
        public raStr?: string,
        public ra?: number,
        public declinStr?: string,
        public declin?: number
    ) { }
}