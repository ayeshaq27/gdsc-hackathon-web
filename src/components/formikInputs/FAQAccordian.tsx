import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function FAQAccordion() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqs = [
    {
      question: 'What is GDG on Campus?',
      answer: 'Google Developer Groups on Campus is a community-driven initiative by Google aimed at helping students build their technical and professional skills. The club provides opportunities to work on real-world projects, network with industry professionals, and learn from Google experts.',
    },
    {
      question: 'Who can participate?',
      answer: 'Students of any education level are eligible to apply for SolutionHacks! All attendees must be 13 years or older to participate.',
    },
    {
      question: 'How many people per team?',
      answer: "Hackers can form teams of up to 4 members. Teams can be created either before the event or on-site, entirely at the hackers' discretion.",
    },
    {
      question: 'What if I don’t know how to code?',
      answer: 'No worries, we will have prize categories for non-code submissions as well! You can also use this hackathon as an opportunity to learn how to code…',
    },
    {
      question: 'Does this event cost money?',
      answer: 'Nope! We will also be providing meals, snacks, and sleeping accommodation.',
    },
    {
      question: 'When do applications open?',
      answer: (
        <>
          Soon! Submit this <a href="/interest-form">interest form</a> so we can alert you as soon as applications open.
        </>
      ),
    },
    {
      question: 'What should I bring?',
      answer: 'Your laptop and a piece of valid ID. You can also bring your own pillow and blanket if you’d prefer',
    },
    {
      question: 'How can I get in contact with (GDG TMU)?',
      answer: 'Email: solutionhacks.gdg@gmail.com',
    }
    
  ];

  return (
    <div style={{ width: '100%', margin: '0 auto', borderRadius:'30px' }}>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
          sx={{
            boxShadow: 'none',
            borderBottom: '1px solid #e0e0e0',
            borderRadius: index === 0 ? '30px 30px 0 0' : index === faqs.length - 1 ? '0 0 30px 30px' : '0', // Conditional border radius
            backgroundColor: '#f5f5dc', // Changed background color
            '&:before': {
              display: 'none',
            },
            padding: '2vw'
          }}
        >
          <AccordionSummary
            expandIcon={
              <IconButton
                size="small"
                sx={{
                  backgroundColor: expanded === `panel${index}` ? '#82aff7' : '#4285f4', // Change color based on expanded state
                  color: '#fff', // White icon
                  borderRadius: '50%', // Circle shape
                  '&:hover': {
                    backgroundColor: '#82aff7', // Darker red on hover
                  },
                }}
              >
                {expanded === `panel${index}` ? <RemoveIcon fontSize="small" /> : <AddIcon fontSize="small" />}
              </IconButton>
            }
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            sx={{
              padding: '16px', // Increased padding
              '& .MuiAccordionSummary-content': {
                margin: '0',
              },
            }}
          >
            <Typography className="text-reg font-lg-24" sx={{  color: '#333' }}>
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-reg font-nm-16" sx={{ color: '#555' }}>
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default FAQAccordion;