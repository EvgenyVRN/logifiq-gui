import { Pipe, PipeTransform } from '@angular/core';
import {Consignment} from "../model/consignment";

@Pipe({
  name: 'consignmentFilter'
})
export class ConsignmentFilterPipe implements PipeTransform {

  transform(consignments: Consignment[], args: any[]): Consignment[] {
    if (consignments === null){
      return;
    }
    let result: Consignment[] = consignments;
    const direction = args[0];
    if (direction !== '' || direction !== null){
      result = result.filter(c => c.direction = direction);
    }
    const consId = args[1];
    if (consId !== null){
      result = result.filter(c => c.id = consId);
    }
    const consignor = args[2];
    if (consignor !== null){
      result = result.filter(c => c.consignor.id = consignor.id);
    }
    const consignee = args[3];
    if (consignee !== null){
      result = result.filter(c => c.consignee.id = consignee.id);
    }
    const vehicleId = args[4];
    if (vehicleId !== null){
      result = result.filter(c => c.vehicleRegNum = vehicleId);
    }
    const totalPackages = args[5];
    if (totalPackages !== null){
      result = result.filter(c => c.totalPackages = totalPackages);
    }
    const totalGrossWeight = args[6];
    if (totalGrossWeight !== null){
      result = result.filter(c => c.totalGrossWeight = totalGrossWeight);
    }
    const totalVolume = args[7];
    if (totalVolume !== null){
      result = result.filter(c => c.totalVolume = totalVolume);
    }
    return result;
  }

}
