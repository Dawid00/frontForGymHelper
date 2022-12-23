export class Exercise {
    id: number;
    type: string;
    weight: number;
    reps: number;
    sets: number;

    constructor(id:number, aType: string, aWeight: number, rreps: number, sseries: number) {
        this.id = id;
        this.type = aType;
        this.weight = aWeight;
        this.reps = rreps;
        this.sets = sseries;
      }
  }
  