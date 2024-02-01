import React, { useState } from 'react';
import { faEye, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
  Card,
  Modal,
  Box,
  CardActionArea,
  CircularProgress,
} from '@mui/material';
import styles from './MultiColumnLayout.module.css';

interface GridCardProps {
  card: { id: number; title: string; content: string; image: string };
  isDarkMode: boolean;
}

const cardStyles = {
  boxShadow: 24,
  p: 4,
};

export const GridCard = ({ card, isDarkMode }: GridCardProps) => {
  const [liked, setLiked] = useState<{
    id: number | undefined;
    liked: boolean;
  }>({ id: undefined, liked: false });
  const [open, setOpen] = React.useState(false);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageLoaded(false);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleLike = (id: number) => {
    setLiked({ id, liked: !liked.liked });
  };

  return (
    <Grid item key={card.id} xs={12} sm={6} md={4}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={cardStyles}
          className={`${styles.modalWrapper} ${isDarkMode ? styles.darkModeBackground : styles.defaultModeBackground}`}
        >
          {imageLoaded ? (
            <img src={card.image} alt={card.image} className={styles.modalImage} />
          ) : (
            <div className={styles.loader}>
              <CircularProgress
                sx={{
                  color: isDarkMode ? 'var(--color-default)' : 'var(--color-cloud)',
                }}
              />
            </div>
          )}
          <Grid container sx={{ flexDirection: 'column', paddingLeft: 'var(--padding-sm)' }}>
            <Typography variant="h6" component="h2">
              {card.title}
            </Typography>
            <Typography variant="button" component="h2">
              {card.content}
            </Typography>
          </Grid>
        </Box>
      </Modal>
      <Card
        sx={{
          backgroundColor: isDarkMode ? 'var(--color-night)' : 'var(--color-default)',
          color: isDarkMode ? 'var(--color-default)' : 'var(--color-mud)',
          borderColor: isDarkMode ? 'var(--color-shadow)' : 'var(--color-cloud)',
        }}
        variant="outlined"
        className={styles.card}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {card.title}
          </Typography>
          <Typography>{card.content}</Typography>
        </CardContent>
        <CardActionArea>
          <CardMedia
            component="div"
            sx={{
              pt: '56.25%',
            }}
            image={card.image}
            onClick={handleOpen}
            className={styles.cardMedis}
          >
            <img
              src={card.image}
              alt={card.image}
              style={{ display: 'none' }}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          </CardMedia>
        </CardActionArea>
        <CardActions
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <IconButton
            aria-label="like a picture"
            size="small"
            color="default"
            disableRipple
            className={styles.iconButton}
            onClick={handleOpen}
          >
            <FontAwesomeIcon
              icon={faEye}
              className={`${isDarkMode ? styles.darkModeBackground : styles.defaultModeBackground} ${styles.icon}`}
            />
          </IconButton>
          <IconButton
            aria-label="like a picture"
            size="small"
            color={liked.liked && card.id === liked.id ? 'error' : isDarkMode ? 'inherit' : 'default'}
            disableRipple
            onClick={() => handleLike(card.id)}
            className={styles.iconButton}
          >
            <FontAwesomeIcon icon={faHeart} className={styles.icon} />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};
