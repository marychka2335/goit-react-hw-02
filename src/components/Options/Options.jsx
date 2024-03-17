
import css from './Options.module.css';

const Button = ({ handleClick, children, type }) => {
  return (
    <button onClick={handleClick} className={`${css.buttons} ${type ? css[type] : ''}`}>
      {children}
    </button>
  );
};

export const Options = ({ handleFeedbackTypeChange, handleReset, hasFeedback }) => {
  return (
    <div className={css.container}>
      <Button handleClick={() => handleFeedbackTypeChange('good')} type="good">
        Good 
      </Button>
      <Button handleClick={() => handleFeedbackTypeChange('neutral')} type="neutral">
        Neutral 
      </Button>
      <Button handleClick={() => handleFeedbackTypeChange('bad')} type="bad">
        Bad 
      </Button>
      {hasFeedback && (
        <Button handleClick={handleReset} type="reset">
          Reset 
        </Button>
      )}
    </div>
  );
};
