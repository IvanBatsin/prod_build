import { Country } from "entities/Country/model/types/country";
import React from "react";
import { useTranslation } from "react-i18next";
import type { CommonComponentProps } from "shared/types/commonTypes";
import { Select } from "shared/ui/Select/Select";

const options = [
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Brazil, content: Country.Brazil },
  { value: Country.Kazahstan, content: Country.Kazahstan },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.USA, content: Country.USA }
];

type CountrySelectorProps = CommonComponentProps & {
  value?: Country
  readonly?: boolean
  onChange?: (value: Country) => void
}

export const CountrySelector: React.FC<CountrySelectorProps> = React.memo(function CountrySelector (props: CountrySelectorProps) {
  const { additionalClass, value, readonly, onChange } = props;
  const { t } = useTranslation("profile");

  const handleSelectChange = React.useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange]);

  return (
    <Select
      additionalClass={additionalClass}
      label={t("chooseCountry") || ""}
      options={options}
      value={value}
      readonly={readonly}
      onChange={handleSelectChange}
    />
  );
});
