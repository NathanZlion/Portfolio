'use client';

import { Button } from "@/components/ui/button";
import { decrease, increase } from "@/lib/state/counter/counterSlice";
import { RootState } from '@/lib/store';
import { useAppSelector, useAppDispatch } from "@/lib/hooks";

export default function Home() {
    const count = useAppSelector((state: RootState) => state.counterReducer.value);
    const dispatch = useAppDispatch();

    return (
        <div className='flex flex-col items-center justify-center h-full'>
            <div> {count} </div>
            <div>
                <Button onClick={() => dispatch(increase())}> Increment </Button>
                <Button onClick={() => dispatch(decrease())}> Decrement </Button>
            </div>
        </div>
    )
}