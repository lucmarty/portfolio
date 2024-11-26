'use client';

import { createContext, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const CursorContext = createContext<[string, Function] | []>([]);

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
    const [cursorType, setCursorType] = useState<string>("default");
    return <CursorContext.Provider value={[cursorType, setCursorType]}>{children}</CursorContext.Provider>;
};
