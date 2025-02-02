/* eslint-disable react/prop-types */
import { Controller, useWatch } from "react-hook-form";
import Radio from "../../../Core/ui/Radio";
import Stars from "./Stars";
import FilterSection from "./FilterSection";
import HeaderWithReset from "./HeaderWithReset";

const ratings = ["5", "4", "3", "2", "1"];
const rateName = "rate";

function RatingFilters({ control, setValue }) {
  const rateValue = useWatch({
    control,
    name: rateName,
  });

  return (
    <div>
      <HeaderWithReset
        title="Rate"
        value={rateValue}
        onReset={() => setValue(rateName, null)}
      />
      <Controller
        name={rateName}
        control={control}
        render={({ field }) => {
          return (
            <FilterSection>
              {ratings.map((rate) => (
                <Radio
                  key={rate}
                  id={rate}
                  value={rate}
                  onChange={field.onChange}
                  name={field.name}
                  checked={rateValue === rate}
                >
                  <Stars starsNumber={rate} />
                </Radio>
              ))}
            </FilterSection>
          );
        }}
      />
    </div>
  );
}

export default RatingFilters;
