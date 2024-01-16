import {
  ReactNode,
  createContext,
  memo,
  useContext,
  useMemo,
  useState,
} from "react";

interface Inputs {
  searchText: string;
  updateSearchText: (value: string) => void;
}
export const InputContext = createContext<Inputs>({
  searchText: "",
  updateSearchText: () => null,
});

interface InputsProvider {
  children: ReactNode;
}

export const InputsProvider = memo<InputsProvider>(({ children }) => {
  const [searchText, setSearchText] = useState("");

  const inputs = useMemo<Inputs>(() => {
    return {
      searchText,
      updateSearchText: (value) => {
        setSearchText(value);
      },
    };
  }, [searchText]);
  return (
    <InputContext.Provider value={inputs}>{children}</InputContext.Provider>
  );
});
export const useInputsContext = () => useContext(InputContext);
