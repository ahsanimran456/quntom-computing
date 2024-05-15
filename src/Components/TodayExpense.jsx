import React from 'react'
import { LuBarChart4 } from "react-icons/lu";
const TodayExpense = () => {
    return (
        <div>
            <div className='d-flex justify-content-between align-items-center'>
                <div>
                    <p>
                        Today’s Expense
                    </p>
                    <span>
                        Expense Summery
                    </span>
                </div>
            </div>
            <div>
                <div>
                    <LuBarChart4 />
                </div>
            </div>
        </div>
    )
}

export default TodayExpense