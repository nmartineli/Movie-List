import { createContext, useContext, useState } from 'react';

const WatchListContext = createContext();

export function WatchListProvider({ children }) {
	const [watchList, setWatchList] = useState([]);

	return <WatchListContext.Provider value={{ watchList, setWatchList }}>{children}</WatchListContext.Provider>;
}

export function useWatchList() {
	const context = useContext(WatchListContext);
	return context;
}
