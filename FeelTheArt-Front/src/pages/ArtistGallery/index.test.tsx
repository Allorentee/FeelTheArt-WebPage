import { render, screen } from "@testing-library/react";
import { ArtistGallery } from "./ArtistGallery";
import "@testing-library/jest-dom";

describe("Given Component", () => {
  test("should be render..", () => {
    global.fetch = jest
      .fn()
      .mockResolvedValue({ json: jest.fn().mockReturnValue("") });
    render(<ArtistGallery></ArtistGallery>);
    const element = screen.getByText(/artist/i);
    expect(element).toBeInTheDocument();
  });
});
