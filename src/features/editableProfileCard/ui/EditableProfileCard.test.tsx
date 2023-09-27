import { EditableProfileCard } from "./EditableProfileCard";
import { screen } from "@testing-library/react";
import { type RenderWithRouterOptions, componentRender } from "shared/lib/tests/componentRender/componentRender";
import type { Profile } from "../model/types/profile";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { editableProfileCardReducer } from "../model/slice/editableProfileCardSlice";
import userEvent from "@testing-library/user-event";
import { axiosApi } from "shared/api/api";

const profileData: Profile = {
  age: 12,
  avatar: "https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2023-03/JONES_JON_L_BELT_03_04.png?itok=P6J6DQpm",
  city: "Moscow",
  country: Country.Russia,
  currency: Currency.RUB,
  firstName: "firstName",
  lastName: "lastName",
  id: "1",
  username: "Test"
};

const options: RenderWithRouterOptions = {
  route: "/",
  initialState: {
    profile: {
      isLoading: false,
      readonly: true,
      data: profileData,
      form: profileData
    },
    user: {
      authData: {
        id: "1",
        username: "Test"
      }
    }
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  asyncReducers: { profile: editableProfileCardReducer }
};

describe("features/EditableProfileCard component", () => {
  beforeEach(() => {
    componentRender(<EditableProfileCard id="1"/>, options);
  });

  test("click to edit btn", async () => {
    await userEvent.click(screen.getByTestId("EditableProfileCard.EditBtn"));
    expect(screen.getByTestId("EditableProfileCard.CancelBtn")).toBeInTheDocument();
  });

  test("should reset form when push cancel btn", async () => {
    await userEvent.click(screen.getByTestId("EditableProfileCard.EditBtn"));

    await userEvent.clear(screen.getByTestId("ProfileCard.firstName"));
    await userEvent.clear(screen.getByTestId("ProfileCard.lastName"));

    await userEvent.type(screen.getByTestId("ProfileCard.firstName"), "test");
    await userEvent.type(screen.getByTestId("ProfileCard.lastName"), "test");

    expect(screen.getByTestId("ProfileCard.firstName")).toHaveValue("test");
    expect(screen.getByTestId("ProfileCard.lastName")).toHaveValue("test");

    await userEvent.click(screen.getByTestId("EditableProfileCard.CancelBtn"));

    expect(screen.getByTestId("ProfileCard.firstName")).toHaveValue("firstName");
    expect(screen.getByTestId("ProfileCard.lastName")).toHaveValue("lastName");
  });

  test("should show error", async () => {
    await userEvent.click(screen.getByTestId("EditableProfileCard.EditBtn"));
    await userEvent.clear(screen.getByTestId("ProfileCard.firstName"));
    await userEvent.click(screen.getByTestId("EditableProfileCard.SaveBtn"));
    expect(screen.getByTestId("EditableProfileCard.Error.Header")).toBeInTheDocument();
  });

  test("should send request to the server", async () => {
    const mockRequest = jest.spyOn(axiosApi, "put");
    await userEvent.click(screen.getByTestId("EditableProfileCard.EditBtn"));
    await userEvent.type(screen.getByTestId("ProfileCard.firstName"), "test");
    await userEvent.click(screen.getByTestId("EditableProfileCard.SaveBtn"));
    expect(mockRequest).toHaveBeenCalled();
  });
});
