import { useEffect } from "react"

const ReadString = ({
    drizzle,
    drizzleState
}) => {
    useEffect(() => {
      console.log("weas")
        console.log(drizzle)
        console.log(drizzleState)
    }, [])

    return (
        <div>
            ReadString Component
        </div>
    )
}

export default ReadString