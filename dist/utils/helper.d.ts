import { List } from 'immutable';
import { moment } from './momentConfig';
export declare function toNumber(string: String): number;
export declare function toArray(iterable: any, start?: any, end?: any): any;
export declare function objectToArray(object: object, keyName?: string, valueName?: string): {}[];
export declare function decimalAdjust(type: any, value: any, exp?: number): any;
export declare function applyMixins(derivedCtor: any, baseCtors: any[]): void;
export declare function isJson(str: any): boolean;
export declare function addToList(state: List<any>, entities: List<any>): List<any>;
export declare function deUmlaut(value: any): any;
export declare function camelize(str: any): any;
export declare function getMoment(timeString: string): moment.Moment;
export declare function formatTime(time: any): any;
export declare function calcDiffPercentage(value1: number, value2: number): any;
export declare function getGoodWillValue(value1: number, value2: number, settings: any): boolean;
export declare function reduce(entries: any, field?: string): any;
export declare function getWorklogBorderColor(worklog: any, settings: any): "yellow" | "green" | "red";
export declare function detectIE(): number | false;
