import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";

interface Props {
  className?: string;
}

const defaultFilters = [
  {
    text: 'Сырный соус',
    value: '3',
  },
  {
    text: 'Моццарелла',
    value: '4',
  },
  {
    text: 'Чеснок',
    value: '5',
  },
  {
    text: 'Солённые огурчики',
    value: '6',
  },
  {
    text: 'Красный лук',
    value: '7',
  },
  {
    text: 'Томаты',
    value: '8',
  },
  {
    text: 'Мясо',
    value: '9',
  },
  {
    text: 'Ветчина',
    value: '10',
  },
]

export const Filters: React.FC<Props> = ({className}) => {
  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

      <div className="mt-5 border-y-2 border-y-neutral-200 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0} />
          <Input type="number" min={100} max={1000} placeholder="1000" />
        </div>

        <RangeSlider min={0} max={1000} step={100} value={[0, 1000]} />
      </div>

      <CheckboxFiltersGroup 
        title="Ингридиенты"
        className="mt-5"
        limit={6}
        defaultItems={defaultFilters}
        items={defaultFilters}
      />


    </div>
  )
}