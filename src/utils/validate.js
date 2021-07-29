export const Email = (e) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (re.test(e.target.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

export const Name = (e) => {
    const re = /^[a-z ,.'-]+$/
    if (re.test(e.target.value))
  {
    return (true)
  }
    alert("Please enter your Name!")
    return (false)
}

export const Message = (e) => {
    const re = /^[a-z ,.'-]+$/
    if (re.test(e.target.value))
  {
    return (true)
  }
    alert("Please enter a message!")
    return (false)
}