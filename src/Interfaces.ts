export interface ITask {
  taskName: string;
  deadline: number;
}

export interface ITimes {
  hours: number;
  minutes: number;
  seconds: number;
}

export interface IGreetings {
  name: string;
  mark: string;
  optional?: string;
  onClick: (name: string) => void; //아무것도 리턴하지 않는다를 의미한다 void
}
