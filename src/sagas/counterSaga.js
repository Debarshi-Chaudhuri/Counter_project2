import { put,takeEvery } from "redux-saga/effects";
import {increment,decrement} from '../actions/action'
const delay=(ms)=>new Promise(res=>setTimeout(res,1000))
export function* watcherSaga(){
    yield takeEvery('ASYNC_INCREMENT',incrementAsync)
    yield takeEvery('ASYNC_DECREMENT',decrementAsync)
}
function* incrementAsync(){
    yield delay(1000)
    yield put(increment())
}
function* decrementAsync(){
    yield delay(1000)
    yield put(decrement())
}