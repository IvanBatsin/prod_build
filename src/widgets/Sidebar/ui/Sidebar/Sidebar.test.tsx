import { Sidebar } from "./Sidebar";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithTranslations } from "shared/lib/tests/renderWithTranslations/renderWithTranslations";

describe("Sidebar component", () => {
  test("Sidebar render", () => {
    renderWithTranslations(<Sidebar/>);
    expect(screen.getByTestId("sidebar-test-id")).toBeInTheDocument();
  });

  test("Toggle sidebar", () => {
    renderWithTranslations(<Sidebar/>);
    const toggleBtn = screen.getByTestId("toggle-sidebar");
    const sidebarEL = screen.getByTestId("sidebar-test-id");
    expect(sidebarEL).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(sidebarEL).toHaveClass("collapsed");
  });
});
