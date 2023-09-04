import React, { useState, useEffect, useRef } from 'react';
import './SelectBlock.scss';
import arrowDown from '../../assets/icons/arrowDown.svg';
import arrowUp from '../../assets/icons/arrowUp.svg';
import cn from 'classnames';

type Props = {
  selectName: string;
  options: (string | number)[];
  defaultValue: string | number;
};

export const SelectBlock: React.FC<Props> = ({
  selectName,
  options,
  defaultValue,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string | number) => {
    setSelectedValue(option);
    setIsOpen(false);
  };

  const handleClickOutside = (clickEvent: MouseEvent) => {
    if (
      wrapperRef.current
      && !wrapperRef.current.contains(clickEvent.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="selectBlock">
      <h3 className="selectBlock__title">{selectName}</h3>
      <div className="selectBlock__wrapper" ref={wrapperRef}>
        <div
          className="selectBlock__content"
          tabIndex={0}
          onClick={toggleDropdown}
        >
          <div className="selectBlock__selected-option">{selectedValue}</div>
          <div className="selectBlock__img">
            {isOpen ? (
              <img
                className="selectBlock__img-img"
                src={arrowUp}
                alt="arrowUp"
              />
            ) : (
              <img
                className="selectBlock__img-img"
                src={arrowDown}
                alt="arrowDown"
              />
            )}
          </div>
        </div>
        <ul className={cn('selectBlock__options', { active: isOpen })}>
          {options.map((option) => (
            <li
              key={option}
              className="selectBlock__option"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
