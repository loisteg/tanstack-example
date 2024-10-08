import { FlashList, FlashListProps } from "@shopify/flash-list";

const List = <T,>(props: FlashListProps<T>) => {
    return <FlashList {...props} />;
};

export default List;