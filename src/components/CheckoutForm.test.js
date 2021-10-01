import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>)
});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm/>)
    const firstName = screen.getByLabelText(/First Name/);
    userEvent.type(firstName, 'Cameron');
    const lastName = screen.getByLabelText(/Last Name/);
    userEvent.type(lastName, 'Meiners');
    const addy = screen.getByLabelText(/Address/);
    userEvent.type(addy, '1414 Johnson Ave');
    const city = screen.getByLabelText(/City/);
    userEvent.type(city, 'Jonestown');
    const state = screen.getByLabelText(/State/);
    userEvent.type(state, 'Kentucky');
    const zippy = screen.getByLabelText(/Zip/);
    userEvent.type(zippy, '91981');
    const button = screen.getByRole('button');
    userEvent.click(button);
    const success = screen.queryByText(/You have ordered some plants!/)
    expect(success).toBeInTheDocument;
});
