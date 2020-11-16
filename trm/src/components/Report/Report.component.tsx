import React from "react";
import Day from "../../models/Day";
import ReportItem from "./ReportItem.component";
import styles from "./Report.module.scss";

interface ReportProps {
    days: Day[],
}

const Report: React.FC<ReportProps> = ({ days }: ReportProps) => {
    const daysCount = days.length;
    const trCount = days.reduce((trCount, day) => trCount + day.timeRecords.length, 0);
    const avgTrCountPerDay = trCount / daysCount;

    return (
        <>
            <h2>Report</h2>
            <div className={styles.reportItems}>
                <ReportItem
                    label="Number of work days"
                    value={daysCount}
                />
                <ReportItem
                    label="Total number of time records"
                    value={trCount}
                />
                <ReportItem
                    label="Average number of time records per day"
                    value={avgTrCountPerDay}
                />
            </div>
        </>
    );
};

export default Report;