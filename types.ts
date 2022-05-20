export interface Notes {
  title: string;
  body: string;
  author: string;
}

export interface Games {
  title: string;
  to: string;
  from: string;
  questions: question[];
}

export interface question {
  q: string;
  op1: string;
  op2: string;
  op3: string;
  op4: string;
  ans: string;
}
