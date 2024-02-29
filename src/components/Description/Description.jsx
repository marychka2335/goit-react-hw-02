import css from './Description.module.css';

export const Description = () => {
  return (
    <div className={css.container}>
      <header>
        <h1>Sip Happens Café</h1>
        <p>
          Please leave your feedback about our service by selecting one of the
          options below.
        </p>
      </header>
    </div>
  );
};