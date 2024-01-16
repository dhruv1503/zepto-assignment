import { FC } from "react";

export interface ListItemProps {
  name: string;
  email: string;
  image: string;
  id: number;
}

const ListItem: FC<ListItemProps> = ({ name, email, image, id }) => {
  return (
    <div key={id}>
      <img src={image} alt={name}/> <p>{name}</p>
      <p>{email}</p>
    </div>
  );
};

export default ListItem;
