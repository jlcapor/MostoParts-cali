import { PropsWithChildren } from "react";

export default function OrdersLayout(props: PropsWithChildren) {
    return (
        <div className="flex flex-col h-screen">
            {props.children}
        </div>
    )
}