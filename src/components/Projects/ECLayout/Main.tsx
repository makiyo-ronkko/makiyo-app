import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CircularProgress,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { generateRandomText } from '../../../helpers/textGenerator';
import { imageUrls } from './images';

import styles from './ECLayout.module.css';

const productList = [
  {
    id: '1',
    img: imageUrls.fashion,
    label: generateRandomText(1, false, true),
    price: '250',
  },
  {
    id: '2',
    img: imageUrls.woman,
    label: generateRandomText(1, false, true),
    price: '350',
  },
  {
    id: '3',
    img: imageUrls.dress,
    label: generateRandomText(1, false, true),
    price: '290',
  },
  {
    id: '4',
    img: imageUrls.jacket,
    label: generateRandomText(1, false, true),
    price: '235',
  },
  {
    id: '5',
    img: imageUrls.bag,
    label: generateRandomText(1, false, true),
    price: '180',
  },
  {
    id: '6',
    img: imageUrls.accessories,
    label: generateRandomText(1, false, true),
    price: '250',
  },
  {
    id: '7',
    img: imageUrls.fashion,
    label: generateRandomText(1, false, true),
    price: '350',
  },
  {
    id: '8',
    img: imageUrls.woman,
    label: generateRandomText(1, false, true),
    price: '290',
  },
  {
    id: '9',
    img: imageUrls.fashion,
    label: generateRandomText(1, false, true),
    price: '235',
  },
  {
    id: '10',
    img: imageUrls.cosmetics,
    label: generateRandomText(1, false, true),
    price: '180',
  },
];

interface MainProp {
  isDarkMode: boolean;
}

export const Main = ({ isDarkMode }: MainProp) => {
  const [images, setImages] = useState<{ id: string; img: string; label: string; price: string }[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const containerRef = useRef<HTMLUListElement>(null);
  const cardRef = useRef<HTMLImageElement>(null);
  const [isScrollAtLeftEnd, setScrollAtLeftEnd] = useState<boolean>(true);
  const [isScrollAtRightEnd, setScrollAtRightEnd] = useState<boolean>(false);

  const handleLeftScroll = () => {
    if (!containerRef.current) return;
    if (!cardRef.current) return;
    if (!cardRef.current && !isLoading) return;

    containerRef.current.scrollLeft -= cardRef.current.width + 13;
  };

  const handleRightScroll = () => {
    if (!containerRef.current) return;
    if (!cardRef.current) return;
    if (!cardRef.current && !isLoading) return;

    containerRef.current.scrollLeft += cardRef.current.width + 13;
  };

  useEffect(() => {
    const loadImages = async () => {
      const loadedImages = [];
      for (const imageObj of productList) {
        try {
          const img = new Image();
          img.src = imageObj.img;
          await img.decode(); // Wait for the image to be fully loaded
          loadedImages.push({ ...imageObj });
        } catch (error) {
          console.error('Error loading image:', imageObj.img);
        }
      }
      setImages(loadedImages);
      setIsLoading(false);
    };
    loadImages();

    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const isAtLeftEnd = container.scrollLeft === 0;
      const isAtRightEnd = container.scrollLeft + container.clientWidth === container.scrollWidth;

      setScrollAtLeftEnd(isAtLeftEnd ? true : false);
      setScrollAtRightEnd(isAtRightEnd ? true : false);
    };

    containerRef.current?.addEventListener('scroll', handleScroll);

    return () => {
      containerRef.current?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getImages = useMemo(() => {
    return (
      <div className={styles.productImgWrapper}>
        {isLoading ? (
          <CircularProgress
            sx={{
              color: isDarkMode ? 'var(--color-default)' : 'var(--color-cloud)',
            }}
          />
        ) : (
          images?.map((product) => (
            <ImageListItem
              key={product.id}
              sx={{
                height: '500px',
                justifyContent: 'center',
                paddingBottom: 0,
              }}
              className={styles.imageListItem}
            >
              <Card
                sx={{
                  cursor: 'pointer',
                  height: '100%',
                  width: '300px',
                  padding: '10px',
                  overflow: 'hidden',
                  backgroundColor: isDarkMode ? 'var(--color-navy)' : '#ffffff',
                  color: isDarkMode ? 'var(--color-default)' : 'var(--color-mud)',
                }}
              >
                <>
                  <div className={styles.productImgContainer}>
                    <img
                      src={product.img}
                      alt={product.id}
                      className={styles.productImg}
                      ref={cardRef}
                      loading="lazy"
                    />
                  </div>
                  <ImageListItemBar
                    title={product.label}
                    subtitle={<span className={styles.fontSize}>{product.price} €</span>}
                    position="below"
                    sx={{ padding: 'var(--padding-xxs)' }}
                  />
                </>
              </Card>
            </ImageListItem>
          ))
        )}
      </div>
    );
  }, [images, isLoading, isDarkMode]);

  return (
    <main className={isDarkMode ? styles.darkModeBackground : styles.defaultModeBackground}>
      <Grid>
        <Box
          sx={{
            backgroundColor: 'light-blue',
            overflowY: 'hidden',
            backgroundImage: `url('/assets/e-commerce/lauren-richmond-490uCO8h7ZA-unsplash.jpg')`,
            width: '100%',
            height: 'calc(var(--content-xxl)*2)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Button
            variant="outlined"
            color="inherit"
            sx={{
              width: 'var(--content-xxl)',
              height: 'var(--element-xs)',
              backgroundColor: isDarkMode ? 'var(--color-navy)' : 'var(--color-default)',
              color: isDarkMode ? 'var(--color-default)' : 'var(--color-mud)',
              fontSize: 'var(--font-size-subtitle)',
              fontWeight: 'lighter',
            }}
            disableFocusRipple
          >
            Discover New Arrival
          </Button>
        </Box>
      </Grid>
      <Box
        style={{
          height: '100%',
          backgroundColor: isDarkMode ? 'var(--color-night)' : 'var(--color-default)',
          position: 'relative',
        }}
      >
        <Grid columns={4} container={true} direction="row" spacing={1}>
          <ImageList
            cols={4}
            rowHeight={500}
            sx={{
              width: '100%',
              display: 'flex',
              overflowY: 'hidden',
              padding: '0 var(--padding-sm)',
              alignItems: 'center',
              justifyContent: isLoading ? 'center' : 'flex-start',
              scrollBehavior: 'smooth',
              margin: 'var(--margin-sm) var(--margin-xs)',
            }}
            className={styles.imageList}
            ref={containerRef}
          >
            {getImages}
          </ImageList>
          <div className={styles.buttonWrapper}>
            <IconButton
              type="button"
              sx={{
                p: '10px',
                width: 'var(--element-xxxs)',
                height: 'var(--element-xxxs)',
                backgroundColor: 'var(--color-default)',
                opacity: isScrollAtLeftEnd ? 0 : 0.6,
              }}
              size="small"
              aria-label="left-arrow"
              onClick={handleLeftScroll}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </IconButton>
            <IconButton
              type="button"
              sx={{
                p: '10px',
                width: 'var(--element-xxxs)',
                height: 'var(--element-xxxs)',
                backgroundColor: 'var(--color-default)',
                opacity: isScrollAtRightEnd ? 0 : 0.6,
              }}
              size="small"
              aria-label="right-arrow"
              onClick={handleRightScroll}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </IconButton>
          </div>
        </Grid>
      </Box>
    </main>
  );
};
