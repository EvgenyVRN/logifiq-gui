import {Good} from "./good";
import {Unit} from "./unit";
import {Country} from "./country";

export class GoodInStock {
  id: number;
  name: string;
  text: string;
  good: Good;
  palletCount: number;
  palletUnit: Unit;
  placeCount: number;
  placeUnit: Unit;
  salesPackage: number;
  salesPackageUnit: Unit;
  piecesCount: number;
  piecesUnit: Unit;
  weight: number;
  volume: number;
  area: number;
  freightWeight: number;
  country: Country;
  // warehouseArea: WarehouseArea;
  // warehousePlace: WarehousePlace;
}

