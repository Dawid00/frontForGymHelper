export interface UserDetail{
    username:string,
    email:string,
    athleteInfo :AthleteInfo
}
interface AthleteInfo{
    weight: number;
    height:number;
}