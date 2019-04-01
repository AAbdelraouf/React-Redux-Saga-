import { AddNumberType, SubtractNumberType, DATA_REQUESTED } from '../Types/Types';
import { payLoadAdd, payLoadSubtract } from '../Payloads/PayloadsOne';

export const addNumber = () => ({ type: AddNumberType, payLoadAdd });
export const subtractNumber = () => ({ type: SubtractNumberType, payLoadSubtract });

export function getData() { return { type: DATA_REQUESTED } };