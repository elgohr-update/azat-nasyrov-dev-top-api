import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { prop } from '@typegoose/typegoose';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ReviewModel extends Base {}
export class ReviewModel extends TimeStamps {
  @prop()
  name: string;
  @prop()
  title: string;
  @prop()
  description: string;
  @prop()
  rating: string;
  @prop()
  createdAt: Date;
}
