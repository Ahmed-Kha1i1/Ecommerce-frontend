/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import useAddAddress from "./useAddAddress";
import useEditAddress from "./useEditAddress";
import { useForm } from "react-hook-form";
import SelectMany from "../../../Core/ui/SelectMany";
import InputField from "../../../Core/ui/InputField";
import SignButton from "../../Auth/SignButton";
import useCountries from "../../../Core/Hooks/useCountries";
import Spinner from "../../../Core/ui/Spinner";
import { setMaxLength } from "../../../Core/utils/validatorRulesUtils";
import ErrorFallback from "../../../Core/ui/ErrorFallback";

function AddressForm({ address }) {
  const isEdit = !!address;
  const navigate = useNavigate();
  const { isLoading: loadingAdd, addAddress } = useAddAddress();
  const { isLoading: loadingUpdate, updateAddress } = useEditAddress();
  const {
    isLoading: loadingCountry,
    countries,
    error: countriesError,
  } = useCountries();
  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    defaultValues: {
      address1: address?.address1 || "",
      address2: address?.address2 || "",
      city: address?.city || "",
      countryId: address?.country?.id || "",
      state: address?.state || "",
      postalCode: address?.postalCode || "",
    },
  });
  function onSubmit(values) {
    const trimmedFormValues = {
      address1: values.address1.trim(),
      address2: values.address2.trim(),
      city: values.city.trim(),
      state: values.state.trim(),
      postalCode: values.postalCode.trim(),
      countryId: values.countryId,
    };

    if (isEdit) {
      updateAddress(
        { ...trimmedFormValues, addressId: address.id },
        {
          onSuccess: onSuccess,
        },
      );
    } else {
      addAddress(trimmedFormValues, {
        onSuccess: onSuccess,
      });
    }
  }

  function onSuccess() {
    navigate("/Account/Addresses");
  }

  if (loadingCountry) return <Spinner />;

  if (countriesError) {
    return <ErrorFallback error={countriesError} />;
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <InputField
          id="address1"
          control={control}
          error={errors?.address1}
          label="Address 1"
          placeholder="Address 1"
          type="text"
          validationRule={{ required: "Address 1 is required" }}
        />
        <InputField
          id="address2"
          control={control}
          error={errors?.address2}
          label="Address 2"
          placeholder="Address 2"
          type="text"
          validationRule={null}
        />
        <div className="grid grid-cols-2 items-center gap-3">
          <InputField
            id="city"
            control={control}
            error={errors?.city}
            label="City"
            placeholder="City"
            type="text"
            validationRule={{
              required: "City is required",
              maxLength: setMaxLength(100, "city"),
            }}
          />
          <SelectMany
            id="countryId"
            control={control}
            error={errors?.countryId}
            label="Country"
            validationRule={{ required: "Country is required" }}
          >
            <option value="">Choose Country</option>
            {countries.map((country) => {
              return (
                <option value={country.id} key={country.id}>
                  {country.name}
                </option>
              );
            })}
          </SelectMany>
        </div>
        <div className="grid grid-cols-2 items-center gap-3">
          <InputField
            id="state"
            control={control}
            error={errors?.state}
            label="State"
            placeholder="State"
            type="text"
            validationRule={{
              required: "State is required",
              maxLength: setMaxLength(100, "state"),
            }}
          />
          <InputField
            id="postalCode"
            control={control}
            error={errors?.postalCode}
            label="Postal Code"
            placeholder="Postal Code"
            type="text"
            validationRule={{
              maxLength: setMaxLength(10, "postal code"),
            }}
          />
        </div>
        <div className="flex h-[100px] items-end pb-4">
          <SignButton disabled={loadingAdd || loadingUpdate}>
            {isEdit ? "Update" : "Add"}
          </SignButton>
        </div>
        {(loadingAdd || loadingUpdate) && <Spinner />}
      </form>
    </div>
  );
}

export default AddressForm;
