import { FunctionComponent } from "react";
import classNames from "classnames";
import { CustomClasses } from "../types";
import { MenuOption } from "./types";
import { IS_FRONTIER } from "../../config";

interface Props extends CustomClasses {
  options: MenuOption[];
  selectedOptionId: string;
  onSelect: (optionId: string) => void;
}

export const MenuToggle: FunctionComponent<Props> = ({
  options,
  selectedOptionId,
  onSelect,
  className,
}) => (
  <div className="flex h-fit rounded-full bg-furyverse-700">
    {options.map(({ id, display }) => (
      <label
        key={id}
        htmlFor={"menu-radio"}
        className={classNames(
          "relative h-10 px-4 py-2 select-none cursor-pointer",
          {
            "bg-wfuryngton-400 rounded-full": id === selectedOptionId,
            "text-furyverse-1000": id === selectedOptionId && IS_FRONTIER,
          },
          className
        )}
      >
        <input
          id="menu-radio"
          type="radio"
          className={classNames(
            "absolute w-full h-full appearance-none cursor-pointer z-20",
            "after:absolute after:w-full after:h-full",
            {
              "text-furyverse-300": id !== selectedOptionId,
            }
          )}
          value={id}
          radioGroup={options.reduce((ids, { id }) => ids + id, "")}
          checked={id === selectedOptionId}
          onChange={() => onSelect(id)}
        ></input>
        <span
          className={classNames("relative subtitle2 z-10", {
            "text-furyverse-300": id !== selectedOptionId,
          })}
        >
          {display}
        </span>
      </label>
    ))}
  </div>
);
