import React from 'react';
import Typography from '@mui/material/Typography';

interface HighlightTextProps {
  text: string;
  highlightTerms: string[];
}

const HighlightText: React.FC<HighlightTextProps> = ({ text, highlightTerms }) => {
  return (
    <>
      {text.split(' ').map((word, index) => {
        const isTargetTerm = highlightTerms.some(term => word.includes(term));
        return isTargetTerm ? (
          <Typography key={index} component="span" sx={{ fontWeight: 'bold' }}>
            {word + ' '}
          </Typography>
        ) : (
          <span key={index}>{word + ' '}</span>
        );
      })}
    </>
  );
};

export default HighlightText;
