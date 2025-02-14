import React from 'react';

interface SummaryCardProps {
    title: string;
    summary: string;
    link: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, summary, link }) => {
    return (
        <div className="summary-card">
            <h3 className="summary-title">{title}</h3>
            <p className="summary-text">{summary}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="read-more">
                Read More
            </a>
        </div>
    );
};

export default SummaryCard;
