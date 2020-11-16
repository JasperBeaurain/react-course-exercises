import TimeRecord from "./TimeRecord";

interface Day {
    id: string,
    date: Date,
    timeRecords: TimeRecord[],
}

export default Day;