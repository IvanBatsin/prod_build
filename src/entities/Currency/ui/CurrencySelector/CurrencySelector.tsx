import { Currency } from "@/entities/Currency/model/types/currency";
import React from "react";
import { useTranslation } from "react-i18next";
import type { CommonComponentProps } from "@/shared/types/commonTypes";
import { ListBox } from "@/shared/ui/Popups/index";

const options = [
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.USD, content: Currency.USD }
];

type CurrencySelectorProps = CommonComponentProps & {
  value?: Currency
  readonly?: boolean
  onChange?: (value: Currency) => void
}

export const CurrencySelector: React.FC<CurrencySelectorProps> = React.memo(function CurrencySelector (props: CurrencySelectorProps) {
  const { additionalClass, value, readonly, onChange } = props;
  const { t } = useTranslation("profile");

  const handleSelectChange = React.useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return (
    <ListBox
      additionalClass={additionalClass}
      readonly={readonly}
      label={t("chooseCurrency") || ""}
      items={options}
      defaultValue={t("chooseCurrency") || ""}
      value={value}
      direction="top right"
      handleOnChangeValue={handleSelectChange}
    />
  );
});
