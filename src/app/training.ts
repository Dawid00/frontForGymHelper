import { Exercise } from "./exercise";

export interface Training {
    id:number;
    description: string;
    date: Date;
    status: string;
    exercises: Exercise[];
  }
  