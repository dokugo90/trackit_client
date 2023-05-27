import { useContext, useState } from "react";
import AppContext from "./providers";

export function useAppContext() {
    const context = useContext(AppContext);
    return context;
}