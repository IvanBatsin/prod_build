import type { Decorator } from "@storybook/react";
import "@/app/styles/index.scss";
import { Suspense } from "react";

const mockText = "Loading...";
export const suspenseDecorator: Decorator = (Story) => <Suspense fallback={<div>{mockText}</div>}><Story/></Suspense>;
