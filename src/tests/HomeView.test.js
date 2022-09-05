import {act, render} from "@testing-library/react";
import React from "react";
import HomeView from "../views/HomeView";
import userEvent from "@testing-library/user-event";

describe("Home View Tests", () => {
    it('should open the invitation modal', async function () {
        const homeView = render(<HomeView/>);
        const openModalButton = await homeView.queryByTestId("openModalButton");

        await act(() => {
            userEvent.click(openModalButton);
        });

        const modal = await homeView.queryByTestId("invitationModal");

        expect(modal).toBeVisible();
    });
})