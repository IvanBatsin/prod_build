import { Sidebar } from "./Sidebar";
import { fireEvent, screen } from "@testing-library/react";
import { componentRender } from "@/shared/lib/tests/componentRender/componentRender";

describe("Sidebar component", () => {
  test("Sidebar render", () => {
    componentRender(<Sidebar/>, { route: "/" });
    expect(screen.getByTestId("sidebar-test-id")).toBeInTheDocument();
  });

  test("Toggle sidebar", () => {
    componentRender(<Sidebar/>, { route: "/" });
    const toggleBtn = screen.getByTestId("toggle-sidebar");
    const sidebarEL = screen.getByTestId("sidebar-test-id");
    expect(sidebarEL).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(sidebarEL).toHaveClass("collapsed");
  });
});
