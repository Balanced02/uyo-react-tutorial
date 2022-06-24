import { useState } from "react"

export const withUser = Component => {
  return (props) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    
    useState(() => {
      let timeout = setTimeout(() => {
        setUser({ name: 'Daniel', age: 16 })
        setLoading(false)
      }, 2000);
      return () => clearTimeout(timeout);
    }, [])
    
    return <Component {...props} user={user} loading={loading} />
  }
}