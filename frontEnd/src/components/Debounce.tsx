// //디바운싱
// const useDebounce = (value: string, delay: number) => {
//   const [debouncedValue, setDebouncedValue] = useState(value);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setDebouncedValue(value);
//     }, delay);

//     return () => {
//       clearTimeout(timer);
//     }; //value 변경 시점에 clearTimeout을 해줘야함.
//   }, [value]);

//   return debouncedValue;
// };

// export defualt useDebounce;
