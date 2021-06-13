import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import {fetchColors as mockFetchColors} from './fetchColors'


 jest.mock('./fetchColors')

 const mockColors = [
   {
     color: "blue",
     code: {
       hex: "#0000FF",
     },
     id: 1,
   },
   {
     color: "green",
     code: {
       hex: "#00ff00",
     },
     id: 2,
   }
 ]


test("Renders BubblePage without errors", () => {
  render(<BubblePage/>)

});

test("Fetches data and renders the bubbles on mounting", async () => {
  // Finish this test
  render(<BubblePage/>)
  mockFetchColors.mockResolvedValueOnce({
    colors: (mockColors)})

    await waitFor(() => {
      const color = screen.findAllByTestId('color-test')
      expect(color).toBeInTheDocument()
    })
  })
;

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading