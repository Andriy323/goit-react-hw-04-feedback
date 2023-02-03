import PropTypes from 'prop-types';
import css from './section.module.css';
const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      <p className={css.title}>{title}</p>
      {children}
    </section>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
