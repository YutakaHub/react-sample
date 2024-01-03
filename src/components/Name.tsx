import React from "react";

const Name = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }

  return (
    <div style={{padding: '16PX', backgroundColor: 'grey'}}>
      <label htmlFor="name">名前</label>
      <input id='name' className="input-name" type="text" onChange={onChange}></input>
    </div>
  )
}

export default Name