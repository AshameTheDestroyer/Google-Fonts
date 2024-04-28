import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterSlice } from "../../features/Counter/CounterSlice";

import "./Home.scss";

import Page from "../../components/Page/Page";

export default function Home(): React.ReactElement {
    return (
        <Page id="home-page">
            <DeletableContent />
        </Page>
    );
}

function DeletableContent(): React.ReactElement {
    const { value } = useSelector(counterSlice.selectSlice);
    const Dispatch = useDispatch();

    const buttonClass = `
        bg-neutral-800 py-[1rem] px-[2rem] rounded-[10px]
        border-neutral-950 border-[2px] hover:scale-[1.05]
        hover:bg-neutral-700 transition
    `;

    return (
        <>
            <h1 className="mb-[2rem] text-center text-6xl font-bold">Welcome Back!</h1>
            <section className="flex flex-col gap-[2rem] items-center justify-center flex-grow">
                <h2 className="text-center">Little Redux Game</h2>
                <div className="flex gap-[1rem] items-center">
                    <button
                        className={buttonClass}

                        onClick={_ => Dispatch(counterSlice.actions.decrement())}

                        children="Decrement"
                    />
                    <p
                        className="min-w-[4ch] text-center"
                        children={value}
                    />
                    <button
                        className={buttonClass}

                        onClick={_ => Dispatch(counterSlice.actions.increment())}

                        children="Increment"
                    />
                </div>
            </section>
        </>
    );
}