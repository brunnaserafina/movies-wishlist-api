export type UserEntity = {
  id: number;
  username: string;
  email: string;
  password: string;
};

export type NewUser = Omit<UserEntity, "id">;

export type User = Omit<NewUser, "name">;
