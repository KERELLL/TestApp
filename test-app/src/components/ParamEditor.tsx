import { ChangeEvent, useEffect, useState } from "react";
import { IModel, IParam, IParamValue } from "../types/param-editor.types";

interface ParamEditorProps {
    params: IParam[];
    model: IModel;
}
 
const ParamEditor: React.FC<ParamEditorProps> = ({params, model}) => {


    const [paramValues, setParamValues] = useState<IParamValue[]>([]);

    useEffect(() => {
        setParamValues(model.paramValues)
    }, [])

    const getModel = () =>  {
        console.log(paramValues);
    }

    const inputHandle = (e: ChangeEvent<HTMLInputElement>,  paramId: number) => {
        setParamValues(prevParamValues => {
            const updatedParamValues = prevParamValues.map(paramValue => {
                if (paramValue.paramId === paramId) {
                    return { ...paramValue, value: e.target.value };
                }
                return paramValue;
            });
            getModel();
            return updatedParamValues;
        });
    }

   return (
    <div style={{listStyleType: "none", display: "flex", flexDirection: "column", gap: "4px", margin: "10px"}}>
        {paramValues.map(({value, paramId}) => {
            return (
                <li key={paramId} style={{display: "flex", gap: "10px"}}>
                    <h3>{params.find(param => param.id === paramId)?.name}</h3>
                    <input
                    value={value}
                    type={params.find(param => param.id === paramId)?.type}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => inputHandle(e, paramId)}/>
                </li>
            )
        })
        }
    </div>
   )
}
 
export default ParamEditor;