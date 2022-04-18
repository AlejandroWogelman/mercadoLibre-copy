import { Attribute } from "../interfaces";
export interface Info {
  name: string;
  value: string;
}

export const filterAtributte = (data: Attribute[]) => {
  const othersChars: Info[] = [];
  const principalChars: Info[] = [];

  data.forEach((el) => {
    const condition = el.attribute_group_id === "OTHERS";

    condition
      ? principalChars.push({
          name: el.name,
          value: el.value_name,
        })
      : othersChars.push({
          name: el.name,
          value: el.value_name,
        });
  });
  return { othersChars, principalChars };
};
