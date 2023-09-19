import { CREATE_NOMINEE } from "../actions/nomineeActions";

const nomineeInitialState = {
      data:''
}

const nomineeReducers = (state= nomineeInitialState,action)=>{
    switch(action.type){
        default :{
          return  {...state}
        }
    }
}

export default nomineeReducers