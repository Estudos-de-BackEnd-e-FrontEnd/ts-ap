import {StaffTypes} from "./types"
import { checkUser} from "./ex-5-user"
import { checkDirector } from "./ex-6-director"

export function checkStaff(list: StaffTypes){
  
    if ('occupation' in list) {
        return checkUser(list)
        
      } else {
        return checkDirector(list)
      }
}



