import { Animation1, Animation2, Animation3 } from "./Animations";

export const Loading = ({loading}) => {
  if(loading === 5) return <div>Loading 5</div>;
  if(loading === 2) return <Animation2 />;
  if(loading === 3) return <Animation3 />;
  if(loading === 4) return <div>Loading 4</div>;
  return <Animation1 />;
}