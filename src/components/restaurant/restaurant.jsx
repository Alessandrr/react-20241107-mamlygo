import { Tab } from '../tab/tab.jsx';

export const Restaurant = ({ name, id }) => {
  return (
    <div>
      <h2>{name}</h2>
      <Tab title="Menu" linkTo={`/restaurants/${id}/menu`} />
      <Tab title="Reviews" linkTo={`/restaurants/${id}/reviews`} />
    </div>
  );
};
