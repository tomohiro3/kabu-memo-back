export type SemiPartial<T, Ps extends PropertyKey> = Omit<Fields<T>, Ps> & Partial<Fields<T>>;
type Fields<T> = { [P in FieldNames<T>]: T[P] };
type FieldNames<T> = {
  [P in keyof T]: T[P] extends (...args: any[]) => any ? never : P;
}[keyof T];
