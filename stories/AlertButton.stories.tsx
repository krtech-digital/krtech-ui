import React from "react";
import { Meta, Story } from "@storybook/react";
import { AlertButton, Props } from "../src/components/AlertButton/AlertButton";

const meta: Meta = {
    title: "Alert",
    component: AlertButton
}

export default meta; 

export const MessageAlert = () => <AlertButton severity="message"></AlertButton>

export const SuccessMessage = () => <AlertButton severity="success"></AlertButton>

export const FailAlert = () => <AlertButton severity="alertFail"></AlertButton>

export const SuccessAlert = () => <AlertButton severity="alertSuccess"></AlertButton>

export const InfoAlert = () => <AlertButton severity="info"></AlertButton>