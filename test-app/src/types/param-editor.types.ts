export interface IParam {
    id: number;
    name: string;
    type: 'text' | 'number' | 'date' | 'button' | 'email' | 'file' | 'radio';
}
export interface IParamValue {
    paramId: number;
    value: string;
}

export interface IModel {
    paramValues: IParamValue[];
}