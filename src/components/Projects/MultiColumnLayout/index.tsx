import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Divider, Grid, Typography } from '@mui/material';

import { ScrollToTop } from '../../../helpers/scroll';
import { Header } from './Header';
import { GridCard } from './Card';
import { generateRandomText } from '../../../helpers/textGenerator';
import { useTheme } from '../../hooks/ThemeContext';
import { imageUrls } from './images';

import styles from './MultiColumnLayout.module.css';

const cards = [
  {
    id: 1,
    title: 'Card 1',
    content: generateRandomText(2),
    image: imageUrls.animal,
  },
  {
    id: 2,
    title: 'Card 2',
    content: generateRandomText(2),
    image: imageUrls.flower,
  },
  {
    id: 3,
    title: 'Card 3',
    content: generateRandomText(2),
    image: imageUrls.sky,
  },
  {
    id: 4,
    title: 'Card 4',
    content: generateRandomText(2),
    image: imageUrls.car,
  },
  {
    id: 5,
    title: 'Card 5',
    content: generateRandomText(2),
    image: imageUrls.smile,
  },
  {
    id: 6,
    title: 'Card 6',
    content: generateRandomText(2),
    image: imageUrls.tourism,
  },
  {
    id: 7,
    title: 'Card 7',
    content: generateRandomText(2),
    image: imageUrls.nature,
  },
  {
    id: 8,
    title: 'Card 8',
    content: generateRandomText(2),
    image: imageUrls.europe,
  },
  {
    id: 9,
    title: 'Card 9',
    content: generateRandomText(2),
    image: imageUrls.japan,
  },
  {
    id: 10,
    title: 'Card 10',
    content: generateRandomText(2),
    image: imageUrls.shopping,
  },
  {
    id: 11,
    title: 'Card 11',
    content: generateRandomText(2),
    image: imageUrls.shopping,
  },
  {
    id: 12,
    title: 'Card 12',
    content: generateRandomText(2),
    image: imageUrls.fashion,
  },
  {
    id: 13,
    title: 'Card 13',
    content: generateRandomText(2),
    image: imageUrls.mountain,
  },
  {
    id: 14,
    title: 'Card 14',
    content: generateRandomText(2),
    image: imageUrls.business,
  },
  {
    id: 15,
    title: 'Card 15',
    content: generateRandomText(2),
    image: imageUrls.hobby,
  },
  {
    id: 16,
    title: 'Card 16',
    content: generateRandomText(2),
    image: imageUrls.technology,
  },
  {
    id: 17,
    title: 'Card 17',
    content: generateRandomText(2),
    image: imageUrls.game,
  },
  {
    id: 18,
    title: 'Card 18',
    content: generateRandomText(2),
    image: imageUrls.family,
  },
  {
    id: 19,
    title: 'Card 19',
    content: generateRandomText(2),
    image: imageUrls.city,
  },
  {
    id: 20,
    title: 'Card 20',
    content: generateRandomText(2),
    image: imageUrls.food,
  },
  {
    id: 21,
    title: 'Card 21',
    content: generateRandomText(2),
    image: imageUrls.beauty,
  },
];

export const MultiColumnLayout = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={isDarkMode ? styles.darkModeBackground : styles.defaultModeBackground}>
      <Grid item>
        <ScrollToTop />
        <div className={styles.button}>
          <Link to={'/'} className={styles.backButton}>
            Back
          </Link>
        </div>
        <Header isDarkMode={isDarkMode} />
        <Grid>
          <main>
            <Container sx={{ py: 12 }} maxWidth="lg">
              <Grid container spacing={4}>
                {cards.map((card) => (
                  <GridCard card={card} key={card.id} isDarkMode={isDarkMode} />
                ))}
              </Grid>
            </Container>
          </main>
        </Grid>
        <Divider />
        <Grid item>
          <footer>
            <Typography variant="body2" padding="2rem" textAlign="center">
              © {new Date().getFullYear()} My App. All rights reserved.
            </Typography>
          </footer>
        </Grid>
      </Grid>
    </div>
  );
};
