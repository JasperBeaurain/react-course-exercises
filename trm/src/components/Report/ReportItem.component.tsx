import React from "react";

interface ReportItemProps {
    label: string,
    value: string | number,
}

const ReportItem: React.FC<ReportItemProps> = ({ label, value }: ReportItemProps) => {
    return (
        <>
            <span>{ label }</span>
            <b>{ value }</b>
        </>
    );
};

export default ReportItem;