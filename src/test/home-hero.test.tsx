import { QueryClient } from "@tanstack/react-query";
import { createMemoryHistory, createRouter, RouterProvider } from "@tanstack/react-router";
import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

describe("Home hero slideshow", () => {
  it("advances to the next feature and exposes its page link", async () => {
    const router = createRouter({
      routeTree,
      history: createMemoryHistory({ initialEntries: ["/"] }),
      context: { queryClient: new QueryClient() },
    });
    await router.load();
    render(<RouterProvider router={router} />);

    const slideshow = screen.getByRole("region", { name: "Featured areas of DRS work" });

    expect(within(slideshow).getByRole("link", { name: /How we work/ })).toHaveAttribute(
      "href",
      "/about",
    );

    fireEvent.click(within(slideshow).getByRole("button", { name: "Next slide" }));

    await waitFor(() => {
      expect(within(slideshow).getByRole("link", { name: /Explore our projects/ })).toHaveAttribute(
        "href",
        "/projects",
      );
    });
  });
});
