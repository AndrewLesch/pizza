'use client';

import React, { useState } from 'react';

import { FilterCheckbox, FilterCheckboxProps } from './filter-checkbox';
import { Input } from '../ui/input';

type Item = FilterCheckboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  className?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = 'Поиск...',
  className,
  onChange,
  defaultValue,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSerchValue] = useState("")

  const onSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSerchValue(e.target.value)
  }

  
  const list = showAll 
    ? items.filter((item) => item.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) 
    : defaultItems.slice(0, limit)

  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>

      
      {showAll && (
        <div className="mb-5">
          <Input onChange={onSearchInput} placeholder={searchInputPlaceholder} className="bg-gray-100 border-none" />
        </div>
      )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {(list).map((item) => (
          <FilterCheckbox
            onCheckedChange={(ids) => console.log(ids)}
            checked={false}
            key={String(item.value)}
            value={item.value}
            text={item.text}
            endAdornment={item.endAdornment}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? 'border-t-2 border-t-neutral-200 mt-4' : ''}>
          <button onClick={() => setShowAll(!showAll)} className="text-primary mt-3 cursor-pointer">
            {showAll ? 'Скрыть' : '+ Показать все'}
          </button>
        </div>
      )}
    </div>
  );
};
