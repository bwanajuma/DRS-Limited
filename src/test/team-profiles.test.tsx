import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { TeamProfileGrid } from "@/routes/team";

describe("Team profiles", () => {
  it("opens a full profile in a dialog and closes it from the X button", () => {
    render(<TeamProfileGrid />);

    fireEvent.click(screen.getByRole("button", { name: /Lpaletu Lesingiran/ }));

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText(/Project Management Professional/)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Close" }));

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
