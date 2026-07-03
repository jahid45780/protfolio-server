
export interface IChat {
  message: string;
}

export interface IMessage {
  role: "user" | "model";
  text: string;
}