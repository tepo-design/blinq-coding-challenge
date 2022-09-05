import React from 'react';
import {act, render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InvitationForm, {requestInvitation} from "../components/InvitationForm";
import axios from "axios";
import {INVITATION_POST_URL} from "../App";

jest.mock("axios");

describe("Invitation Form Tests", () => {

    const SHORT_EMAIL = "ab";
    const ERROR_EMAIL = "bademail";
    const EMAIL = "test@test.com";

    it('should return an error about name length', async function () {
        const form = render(<InvitationForm />);

        const name = await form.queryByTestId("name");
        const submitButton = await form.queryByTestId("submitButton");

        await act(() => {
            userEvent.type(name, SHORT_EMAIL);
            userEvent.click(submitButton);
        });

        const error = form.queryByTestId('errors-name');
        expect(error.innerHTML).toBe("Name must have at least 3 characters.");
    });

    it('should return an error about email format', async function () {
        const form = render(<InvitationForm />);

        const email = await form.queryByTestId("email");
        const submitButton = await form.queryByTestId("submitButton");


        await act(() => {
            userEvent.type(email, ERROR_EMAIL);
            userEvent.click(submitButton);
        });

        const error = form.queryByTestId('errors-email');
        expect(error.innerHTML).toBe("Invalid email address. E.g. example@email.com");
    });

    it('should return an error about mismatched emails', async function () {
        const form = render(<InvitationForm />);

        const email = await form.queryByTestId("email");
        const confirmEmail = await form.queryByTestId("confirmEmail");
        const submitButton = await form.queryByTestId("submitButton");


        await act(() => {
            userEvent.type(email, EMAIL);
            userEvent.type(confirmEmail, ERROR_EMAIL);
            userEvent.click(submitButton);
        });

        const error = form.queryByTestId('errors-confirmEmail');
        expect(error.innerHTML).toBe("Please ensure your emails match.");
    });

    it('should return expected result for resolved', async function () {
        const data = {
            name: "Tessa Podbury",
            email: "test@test.com"
        };

        const mockResponse = { data: "Registered", status: 200 };

        axios.post.mockResolvedValue(mockResponse);

        const response = await requestInvitation(data);

        expect(axios.post).toHaveBeenCalledWith(INVITATION_POST_URL, data);
        expect(response).toEqual(mockResponse);
    });

    it('should return expected result for error', async function () {
        const data = {};
        const mockResponse = { message: "404"};
        axios.post.mockRejectedValue(mockResponse);

        const response = await requestInvitation(data);

        expect(axios.post).toHaveBeenCalledWith(INVITATION_POST_URL, data);
        expect(response).toEqual(mockResponse);
    });
})