import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Carousel from "../Carousel";

describe("Carousal test", () => {
  test("Lets users click on thumbnail to make them the hero", async () => {
    const images = ["0.jpg", "1.jpg", "2.jpg"];

    const carousal = render(<Carousel images={images} />);

    const hero = await carousal.findByTestId("hero");
    expect(hero.src).toContain(images[0]);
  });
});
