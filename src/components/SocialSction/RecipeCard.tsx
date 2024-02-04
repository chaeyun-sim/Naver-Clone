import { css } from '../../../styled-system/css';

interface Props {
  imageUrl: string;
  category: string;
  title: string;
  description: string;
  noDescription?: boolean;
  newspaperName?: string;
}

const RecipeCard = ({
  imageUrl,
  category,
  title,
  description,
  noDescription,
  newspaperName,
}: Props) => {
  return (
    <div className={container}>
      <img src={imageUrl} className={image} />
      {!noDescription && <p className={categoryText}>{category}</p>}
      <p className={titleText}>{title}</p>
      {noDescription ? (
        <p className={dailyNews}>{newspaperName}</p>
      ) : (
        <p className={descriptionText}>{description}</p>
      )}
    </div>
  );
};

export default RecipeCard;

const container = css({
  width: '25rem',
  height: '24.2rem',
  paddingBottom: '2.4rem',
  paddingLeft: '2rem',
});

const image = css({
  marginBottom: '1rem',
});

const categoryText = css({
  fontFamily: 'var(--font-nanumsquare-bold)',
  fontSize: '1.3rem',
  lineHeight: '2rem',
  color: '#EBAA00',
});

const titleText = css({
  fontFamily: 'var(--font-nanumsquare-regular',
  fontWeight: '600',
  fontSize: '1.4rem',
  color: '#101010',
});

const descriptionText = css({
  fontFamily: 'var(--font-nanumsquare-regular',
  marginTop: '0.4rem',
  fontSize: '1.3rem',
  fontWeight: '600',
  color: '#101010',
});

const dailyNews = css({
  color: '#606060',
  marginTop: '0.4rem',
  lineHeight: '1.9rem',
  fontSize: '1.3rem',
  fontFamily: 'var(--font-nanumsquare-regular',
  fontWeight: '600',
  letterSpacing: '-0.4rem',
});
