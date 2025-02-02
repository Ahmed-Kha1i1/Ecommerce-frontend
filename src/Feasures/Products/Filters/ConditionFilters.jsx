/* eslint-disable react/prop-types */
import { Controller, useWatch } from "react-hook-form";
import FilterSection from "./FilterSection";
import Radio from "../../../Core/ui/Radio";
import HeaderWithReset from "./HeaderWithReset";
import { conditions } from "../../../Constants";

const conditionName = "condition";

function ConditionFilters({ control, setValue }) {
  const conditionValue = useWatch({
    control,
    name: conditionName,
  });

  function check(text) {
    return conditionValue == text;
  }
  return (
    <div>
      <HeaderWithReset
        title="Condition"
        value={conditionValue}
        onReset={() => setValue(conditionName, null)}
      />
      <Controller
        name={conditionName}
        control={control}
        render={({ field }) => {
          return (
            <FilterSection>
              {conditions.map((condition) => (
                <Radio
                  key={condition.text}
                  id={condition.text}
                  value={condition.text}
                  onChange={field.onChange}
                  name={field.name}
                  checked={check(condition.text)}
                >
                  {condition.text}
                </Radio>
              ))}
            </FilterSection>
          );
        }}
      />
    </div>
  );
}

export default ConditionFilters;
