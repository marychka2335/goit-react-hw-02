import PropTypes from 'prop-types';
import css from './Section.module.css';

export function Section({ children, title }) {
  return (
    <div>
      {title && <h1 className={css.title}>{title}</h1>}
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};
