/**
 * Created by liao on 2017/12/14.
 */
import {createStore,combineReducers} from 'redux'
import * as model from "./reducer/IndexModel"
const rootreducer=combineReducers(model)
const store=createStore(rootreducer);
export default store