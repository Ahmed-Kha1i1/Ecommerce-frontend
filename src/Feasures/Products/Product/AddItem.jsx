/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Select from "../../../Core/ui/Select";
import useGuestCart from "../../Cart/Hooks/useGuestCart";
import AddToCardButton from "../AddToCardButton";
import OutOfStockButton from "../OutOfStockButton";
import useAddCartItem from "../../Cart/Hooks/useAddCartItem";
import useSession from "../../Auth/useSession";
const maxOptions = 100;

function AddItem({ selectedItem }) {
  const { handleAddItem } = useGuestCart();
  const { isGuest, session } = useSession();
  const { isLoading, addCartItem } = useAddCartItem();
  const [value, setValue] = useState(1);

  useEffect(() => {
    if (!selectedItem || selectedItem.stockQuantity > 0) {
      setValue(1);
    }
  }, [selectedItem]);

  function onAddItem() {
    if (!selectedItem) return;

    if (isGuest) {
      handleAddItem(selectedItem.id, value, selectedItem.stockQuantity);
    } else
      addCartItem({
        customerId: session.customerId,
        productItemId: selectedItem.id,
        quantity: value,
      });
  }

  function onSelect(newValue) {
    setValue(newValue);
  }
  if (!selectedItem) return <AddToCardButton disabled={true} />;

  if (selectedItem.stockQuantity > 0) {
    return (
      <div className="flex flex-col gap-3">
        <Select
          values={Array.from(
            {
              length:
                selectedItem.stockQuantity <= maxOptions
                  ? selectedItem.stockQuantity
                  : maxOptions,
            },
            (_, index) => index + 1,
          )}
          defaultValue={1}
          title="Quantity: "
          onSelect={onSelect}
        />
        <AddToCardButton onClick={onAddItem} disabled={isLoading} />
      </div>
    );
  } else {
    return <OutOfStockButton />;
  }
}

export default AddItem;
