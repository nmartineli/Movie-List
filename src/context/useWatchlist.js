import { createContext, useContext } from 'react';

const WatchListContext = createContext();

export function WatchListProvider({ children }) {
	const watchList = [];
	return <WatchListContext.Provider value={{ watchList }}>{children}</WatchListContext.Provider>;
}

export function useWatchList() {
	const context = useContext(WatchListContext);
	return context;
}
