export type SessionEntity = {
  id: number;
  user_id: number;
  token: string;
};

export type NewSession = Omit<SessionEntity, "id">;
