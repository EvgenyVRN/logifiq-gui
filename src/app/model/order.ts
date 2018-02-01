import {GoodInStock} from "./good-in-stock";

export class Order {
  id: number;
  goodsInStock: Array<GoodInStock> = [];
}
