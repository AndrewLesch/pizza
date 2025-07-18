'use client';

import React, { useState } from 'react';

import { FilterCheckbox, FilterCheckboxProps } from './filter-checkbox';
import { Input } from '../ui/input';
import { Skeleton } from '../ui';

type Item = FilterCheckboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  className?: string;
  onClickCheckbox?: (id: string) => void;
  defaultValue?: string[];
  loading?: boolean,
  selected?: Set<string>
  name?: string,
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = 'Поиск...',
  className,
  onClickCheckbox,
  name,
  defaultValue,
  loading,
  selected
}) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSerchValue] = useState("")

  const onSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSerchValue(e.target.value)
  }

  if (loading) {
   return (
      <div className={className}>
        <p className="font-bold mb-3">{title}</p>

        {...Array(limit)
          .fill(0)
          .map((_, index) => <Skeleton key={index} className="h-6 mb-4 rounded-[8px]" />)}

        <Skeleton className="w-28 h-6 mb-4 rounded-[8px]" />
      </div>
    );
  }

  
  const list = showAll 
    ? items.filter((item) => item.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) 
    : ( defaultItems || items ).slice(0, limit)

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
            checked={selected?.has(item.value)}
            key={String(item.value)}
            value={item.value}
            text={item.text}
            endAdornment={item.endAdornment}
            onCheckedChange={() => onClickCheckbox?.(item.value)}
            name={name}
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
