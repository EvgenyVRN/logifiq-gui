import {GoodInStock} from "./good-in-stock";
import {Contractor} from "./contractor";
import {Contract} from "./contract";

export class Order {
  id: number;
  goodsInStock: Array<GoodInStock> = [];
  orderDate: Date;
  owner: Contractor;
  payer: Contractor;
  deliverTo: Contractor;
  receiver: Contractor;
  // warehouse: Warehouse;
  vehicleId: string;
  trailerId: string;
  contract: Contract;
}
