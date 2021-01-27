export const convertId = (name: string) => name.replace(/\./g, "__");

export const convertToIdKeyValueObj = (
    array: { [key: string]: any }[],
    keyName = "id",
    ...restKeyNames: string[]
  ): { [key: string]: any } => {
    const compositeKeyArray = [keyName, ...restKeyNames];
    return array.reduce(
      (acc, v) => ({
        ...acc,
        [getObjectValuesFromKeys(v, compositeKeyArray)]: v
      }),
      {}
    );
};
  
const getObjectValuesFromKeys = (obj: any, keys: string[]) => {
    const values = keys.map(key => obj[key]);
    const jointValue = values.join("-");
    return convertId(jointValue);
  };