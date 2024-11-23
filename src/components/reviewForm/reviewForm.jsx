import { useForm } from './useForm.js';
import { Counter } from '../counter/counter.jsx';

export const ReviewForm = () => {
  const { form, setName, setText, setRating, clear } = useForm();
  const { name, text, rating } = form;

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <span>Name</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <span>Text</span>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <Counter
        min={1}
        max={5}
        onIncrement={setRating}
        onDecrement={setRating}
        initialValue={rating}
      />

      <button onClick={clear}>Clear</button>

      <button type="submit">Submit</button>
    </form>
  );
};
